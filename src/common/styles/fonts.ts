import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "../../../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Pretendard-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
  preload: true,
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "system-ui",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

const abeezee = localFont({
  src: "../../../public/fonts/ABeeZee-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-abeezee",
  display: "swap",
  preload: true,
});

const pridi = localFont({
  // TODO: Pridi 라이선스 관련 확인 필요
  src: "../../../public/fonts/Pridi-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-pridi",
  display: "swap",
  preload: true,
});

export const fontVariables = `${pretendard.variable} ${abeezee.variable} ${pridi.variable}`;

// 폰트 두께
export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

export type FontWeightType = keyof typeof fontWeights;

// 폰트 패밀리
export const fontFamilies = {
  pretendard: "var(--font-pretendard)",
  abeezee: "var(--font-abeezee)",
  pridi: "var(--font-pridi)",
  system:
    "-apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Arial, sans-serif",
} as const;

export type FontFamilyType = keyof typeof fontFamilies;
