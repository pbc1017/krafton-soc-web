"use client";

import styled from "@emotion/styled";

import { theme } from "@krafton-soc/common/styles/theme";

import { getResponsiveValue, ResponsiveType } from "../libs/util";

type DividerLineProps = {
  width?: ResponsiveType<number>;
  lineColor?: ResponsiveType<string> | string;
  marginTop?: ResponsiveType<number>;
  marginBottom?: ResponsiveType<number>;
};

const HorizontalLine = styled.div<DividerLineProps>`
  width: ${({ width }) => getResponsiveValue(width, "pc", "100%")};
  background-color: ${({ lineColor }) =>
    getResponsiveValue(lineColor, "pc", theme.colors.dividerLine)};
  margin-top: ${({ marginTop }) => getResponsiveValue(marginTop, "pc", 0)};
  margin-bottom: ${({ marginBottom }) =>
    getResponsiveValue(marginBottom, "pc", 0)};

  @media (max-width: 1024px) {
    width: ${({ width }) => getResponsiveValue(width, "tablet", "100%")};
    background-color: ${({ lineColor }) =>
      getResponsiveValue(lineColor, "tablet", theme.colors.dividerLine)};
    margin-top: ${({ marginTop }) =>
      getResponsiveValue(marginTop, "tablet", 0)};
    margin-bottom: ${({ marginBottom }) =>
      getResponsiveValue(marginBottom, "tablet", 0)};
  }

  @media (max-width: 768px) {
    width: ${({ width }) => getResponsiveValue(width, "mobile", "100%")};
    background-color: ${({ lineColor }) =>
      getResponsiveValue(lineColor, "mobile", theme.colors.dividerLine)};
    margin-top: ${({ marginTop }) =>
      getResponsiveValue(marginTop, "mobile", 0)};
    margin-bottom: ${({ marginBottom }) =>
      getResponsiveValue(marginBottom, "mobile", 0)};
  }

  height: 1px;
  transform: scaleY(0.5); // 선을 균일하게 만들기 위해 추가
`;

const DividerLine = ({
  width,
  lineColor,
  marginTop,
  marginBottom,
}: DividerLineProps) => {
  return (
    <HorizontalLine
      width={width}
      lineColor={lineColor}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  );
};

export default DividerLine;
