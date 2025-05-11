"use client";

import styled from "@emotion/styled";

import PositiveImpactBanner from "../components/PositiveImpactBanner";
import PositiveImpactDonner from "../components/PositiveImpactDonner";
import PositiveImpactMessage from "../components/PositiveImpactMessage/PositiveImpactMessage";

const PositiveImpactContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PositiveImpact = () => {
  return (
    <PositiveImpactContainer>
      <PositiveImpactBanner />
      <PositiveImpactMessage />
      <PositiveImpactDonner />
    </PositiveImpactContainer>
  );
};

export default PositiveImpact;
