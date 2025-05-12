"use client";

import styled from "@emotion/styled";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

import DonnerTable from "./PositiveImpactDonnerTable";

const DonnerContainer = styled.div`
  margin-top: 145px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 91px;
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
