"use client";

import styled from "@emotion/styled";
import React from "react";

import Text from "@krafton-soc/common/components/Text";

const YearHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
