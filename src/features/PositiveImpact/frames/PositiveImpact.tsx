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
        height={{
          desktop: 150,
          tablet: 120,
          mobile: 120,
        }}
        lineColor={theme.colors.black}
        marginTop={{
          desktop: 65,
          tablet: 37,
          mobile: 37,
        }}
        marginBottom={{
          desktop: 65,
          tablet: 37,
          mobile: 37,
        }}
      />
      <PositiveImpactMessage />
      <PositiveImpactDonner />
    </PositiveImpactContainer>
  );
};

export default PositiveImpact;
