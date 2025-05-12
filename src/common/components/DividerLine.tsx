"use client";

import styled from "@emotion/styled";

import { theme } from "@krafton-soc/common/styles/theme";

const HistoryCardBorderLine = styled.div<DividerLineProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: 1px;
  background-color: ${({ color }) => color || theme.colors.dividerLine};
  transform: scaleY(1); // 선을 균일하게 만들기 위해 추가
`;

type DividerLineProps = {
  width?: number;
  color?: string;
};

const DividerLine = ({ width, color }: DividerLineProps) => {
  return <HistoryCardBorderLine width={width} color={color} />;
};

export default DividerLine;
