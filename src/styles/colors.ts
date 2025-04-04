/**
 * 프로젝트에서 사용하는 색상 정의
 */

export const colors = {
  // 브랜드 색상
  primary: '#000000',
  secondary: '#FFFFFF',
} as const;

export type ColorType = keyof typeof colors;
