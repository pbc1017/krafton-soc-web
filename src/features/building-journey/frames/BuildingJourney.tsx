"use client";

import styled from "@emotion/styled";

import BuildingJourneyBanner from "../components/BuildingJourneyBanner";

const BuildingJourneyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 240px;
  margin-bottom: 300px;
`;
const BuildingJourney: React.FC = () => {
  return (
    <BuildingJourneyContainer>
      <BuildingJourneyBanner />
    </BuildingJourneyContainer>
  );
};

export default BuildingJourney;
