"use client";

import styled from "@emotion/styled";

import { theme } from "@krafton-soc/common/styles/theme";

import { getResponsiveValue, ResponsiveType } from "../libs/util";

const VerticalLineStyle = styled.div<VerticalLineProps>`
  // 반응형 PC
  height: ${({ height }) => getResponsiveValue(height, "desktop", "100%")};
  background-color: ${({ lineColor }) =>
    getResponsiveValue(lineColor, "desktop", theme.colors.dividerLine)};
  margin-top: ${({ marginTop }) => getResponsiveValue(marginTop, "desktop", 0)};
  margin-bottom: ${({ marginBottom }) =>
    getResponsiveValue(marginBottom, "desktop", 0)};

  // 반응형 태블릿
  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    height: ${({ height }) => getResponsiveValue(height, "tablet", "100%")};
    background-color: ${({ lineColor }) =>
      getResponsiveValue(lineColor, "tablet", theme.colors.dividerLine)};
    margin-top: ${({ marginTop }) =>
      getResponsiveValue(marginTop, "tablet", 0)};
    margin-bottom: ${({ marginBottom }) =>
      getResponsiveValue(marginBottom, "tablet", 0)};
  }

  // 반응형 모바일
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    height: ${({ height }) => getResponsiveValue(height, "mobile", "100%")};
    background-color: ${({ lineColor }) =>
      getResponsiveValue(lineColor, "mobile", theme.colors.dividerLine)};
    margin-top: ${({ marginTop }) =>
      getResponsiveValue(marginTop, "mobile", 0)};
    margin-bottom: ${({ marginBottom }) =>
      getResponsiveValue(marginBottom, "mobile", 0)};
  }

  width: 1px;
  transform: scaleX(0.5); // 선을 균일하게 만들기 위해 추가
`;

type VerticalLineProps = {
  height?: ResponsiveType<number>;
  lineColor?: ResponsiveType<string>;
  marginTop?: ResponsiveType<number>;
  marginBottom?: ResponsiveType<number>;
};

const VerticalLine = ({
  height,
  lineColor,
  marginTop,
  marginBottom,
}: VerticalLineProps) => {
  return (
    <VerticalLineStyle
      height={height}
      lineColor={lineColor}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  );
};

export default VerticalLine;
