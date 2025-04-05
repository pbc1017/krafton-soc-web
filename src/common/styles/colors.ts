/**
 * 프로젝트에서 사용하는 색상 정의
 */

export const colors = {
  // 브랜드 색상
  black: '#000000',
  white: '#FFFFFF',
  headerBorder: '#F5F5F5',
  deviderLine: 'rgba(0, 0, 0, 0.20)',
} as const;

export type ColorType = keyof typeof colors;
