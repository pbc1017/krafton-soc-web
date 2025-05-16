"use client";

import styled from "@emotion/styled";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

import DonnerTable from "./PositiveImpactDonnerTable";

const DonnerContainer = styled.div`
  width: 1066px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 91px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    //width: calc(100% * 690 / 744);
    width: 690px;
    gap: 106px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    //width: calc(100% * 353 / 393);
    width: 353px;
    gap: 67px;
  }
`;

const DonnerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 48px;
  line-height: 50px;
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 0.5px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 36px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const PositiveImpactDonner = () => {
  return (
    <DonnerContainer>
      <DonnerTitle>
        <Text>{"HONORING OUR DONORS\nWHO HAVE MADE THIS POSSIBLE"}</Text>
      </DonnerTitle>
      <DonnerTable />
    </DonnerContainer>
  );
};

export default PositiveImpactDonner;
