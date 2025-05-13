"use client";

import styled from "@emotion/styled";

import { theme } from "@krafton-soc/common/styles/theme";

const VerticalLineStyle = styled.div<VerticalLineProps>`
  width: 1px;
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  background-color: ${({ color }) => color || theme.colors.dividerLine};
  transform: scaleX(1); // 선을 균일하게 만들기 위해 추가
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : "0")};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? `${marginBottom}px` : "0"};
`;

type VerticalLineProps = {
  height?: number;
  color?: string;
  marginTop?: number;
  marginBottom?: number;
};

const VerticalLine = ({
  height,
  color,
  marginTop,
  marginBottom,
}: VerticalLineProps) => {
  return (
    <VerticalLineStyle
      height={height}
      color={color}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  );
};

export default VerticalLine;
