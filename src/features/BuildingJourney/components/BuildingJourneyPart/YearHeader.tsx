"use client";

import styled from "@emotion/styled";
import React from "react";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const YearHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-family: ${theme.fonts.families.pretendard};
  font-size: 30px;
  font-weight: ${theme.fonts.weights.bold};
  line-height: 32px;
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 26px;
  }
`;

interface YearHeaderProps {
  year: string | number;
}

const YearHeader: React.FC<YearHeaderProps> = ({ year }) => {
  return (
    <YearHeaderContainer>
      <Text>{year}</Text>
    </YearHeaderContainer>
  );
};

export default YearHeader;
