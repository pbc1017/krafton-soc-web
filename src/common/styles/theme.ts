import { colors } from "./colors";
import { fontFamilies, fontWeights } from "./fonts";

/**
 * 프로젝트 테마 설정
 */
export const theme = {
  colors,
  fonts: {
    weights: fontWeights,
    families: fontFamilies,
  },

  // 반응형 디자인 브레이크포인트
  breakpoints: {
    mobileTablet: "768px",
    tabletDesktop: "1200px",
  },
} as const;

export type Theme = typeof theme;
export type BreakpointType = keyof typeof theme.breakpoints;
