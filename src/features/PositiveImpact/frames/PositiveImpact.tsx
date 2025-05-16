"use client";

import styled from "@emotion/styled";

import VerticalLine from "@krafton-soc/common/components/VerticalLine";
import { theme } from "@krafton-soc/common/styles/theme";

import PositiveImpactBanner from "../components/PositiveImpactBanner";
import PositiveImpactDonner from "../components/PositiveImpactDonner";
import PositiveImpactMessage from "../components/PositiveImpactMessage";

const PositiveImpactContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 130px;
`;

const PositiveImpact = () => {
  return (
    <PositiveImpactContainer>
      <PositiveImpactBanner />
      <VerticalLine
        height={150}
        lineColor={theme.colors.black}
        marginTop={65}
        marginBottom={65}
      />
      <PositiveImpactMessage />
      <PositiveImpactDonner />
    </PositiveImpactContainer>
  );
};

export default PositiveImpact;
