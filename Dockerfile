# Stage 1: Build
# Node.js 20 Alpine 이미지를 기반으로 빌드 환경을 구성합니다.
FROM node:20-alpine AS builder
WORKDIR /app

# pnpm을 전역으로 설치합니다.
RUN npm install -g pnpm

# 의존성 설치를 위해 package.json과 pnpm-lock.yaml 파일을 먼저 복사합니다.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# next.config.ts 복사
COPY next.config.ts ./
# i18n 설정 파일들이 빌드 시점에 필요할 수 있으므로 builder에도 복사
COPY src/i18n ./src/i18n
# messages 파일들이 빌드 시점에 필요할 수 있으므로 builder에도 복사
COPY src/messages ./src/messages

# 나머지 소스 코드를 작업 디렉토리로 복사합니다.
COPY . .

# Next.js 애플리케이션을 빌드합니다. (이때 .next/standalone 생성)
RUN pnpm build

# Stage 2: Production
# 경량화된 Node.js 20 Alpine 이미지를 기반으로 프로덕션 환경을 구성합니다.
FROM node:20-alpine AS runner
WORKDIR /app

# 환경 변수 설정
ENV NODE_ENV=production

# 빌드 단계에서 생성된 standalone 폴더의 내용물을 복사합니다.
COPY --from=builder /app/.next/standalone ./

# 빌드 단계에서 생성된 정적 에셋(.next/static)을 standalone 폴더 내부의 .next/static으로 복사합니다.
COPY --from=builder /app/.next/static ./.next/static

# public 폴더의 내용을 standalone 폴더 내부의 public으로 복사합니다.
COPY --from=builder /app/public ./public

# i18n 설정 파일 복사
COPY --from=builder /app/src/i18n ./src/i18n
# messages 파일 복사
COPY --from=builder /app/src/messages ./src/messages

# Next.js 애플리케이션이 3000번 포트를 사용하도록 설정합니다.
EXPOSE 3000

# standalone 폴더 내의 server.js 파일을 node로 직접 실행합니다.
CMD ["node", "server.js"] 