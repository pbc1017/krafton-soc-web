"use client";

import styled from "@emotion/styled";
import React from "react";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const PartHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${theme.fonts.families.pretendard};
  align-items: center;
  justify-content: center;
  gap: 44px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 20px;
  }
`;

const PartNumber = styled.div`
  font-family: ${theme.fonts.families.pridi};
  font-size: 32px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 76px;
  color: ${theme.colors.black};
  letter-spacing: 0.5px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 26px;
  }
`;

const PartTitle = styled.div`
  font-size: 48px;
  font-weight: ${theme.fonts.weights.medium};
  line-height: 52px;
  color: ${theme.colors.black};
  letter-spacing: 0.5px;
  text-align: center;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 30px;
    width: 289px;
  }
`;

const PartTerm = styled.div`
  font-size: 30px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 32px;
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 20px;
  }
`;

interface PartHeaderProps {
  part: number | string;
  title: string;
  startTerm: string;
  endTerm: string;
}

const PartHeader: React.FC<PartHeaderProps> = ({
  part,
  title,
  startTerm,
  endTerm,
}) => {
  return (
    <PartHeaderContainer>
      <PartNumber>
        <Text>Part {part}.</Text>
      </PartNumber>
      <PartTitle>
        <Text>{title}</Text>
      </PartTitle>
      <PartTerm>
        <Text>
          {startTerm} - {endTerm}
        </Text>
      </PartTerm>
    </PartHeaderContainer>
  );
};

export default PartHeader;
