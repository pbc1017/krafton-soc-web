# Stage 1: Build
# Node.js 20 Alpine 이미지를 기반으로 빌드 환경을 구성합니다.
FROM node:20-alpine AS builder
WORKDIR /app

# pnpm을 전역으로 설치합니다.
RUN npm install -g pnpm

# 의존성 설치를 위해 package.json과 pnpm-lock.yaml 파일을 먼저 복사합니다.
# 이렇게 하면 의존성이 변경되지 않았을 경우 Docker 빌드 캐시를 활용할 수 있습니다.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 나머지 소스 코드를 작업 디렉토리로 복사합니다.
COPY . .

# Next.js 애플리케이션을 빌드합니다.
RUN pnpm build

# Stage 2: Production
# 경량화된 Node.js 20 Alpine 이미지를 기반으로 프로덕션 환경을 구성합니다.
FROM node:20-alpine AS runner
WORKDIR /app

# 빌드 단계에서 생성된 .next 폴더 (빌드 결과물)를 복사합니다.
COPY --from=builder /app/.next ./.next
# 프로덕션 실행에 필요한 node_modules를 빌드 단계에서 복사합니다.
COPY --from=builder /app/node_modules ./node_modules
# package.json을 복사하여 start 스크립트 등을 참조할 수 있도록 합니다.
COPY --from=builder /app/package.json ./package.json
# public 폴더의 정적 에셋을 복사합니다.
COPY --from=builder /app/public ./public

# Next.js 애플리케이션이 3000번 포트를 사용하도록 설정합니다.
EXPOSE 3000

# 컨테이너 실행 시 package.json의 "start" 스크립트를 실행합니다.
# (일반적으로 "next start"를 실행합니다)
CMD ["pnpm", "start"] 