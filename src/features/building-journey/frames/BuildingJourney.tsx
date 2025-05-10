"use client";

import styled from "@emotion/styled";

import BuildingJourneyBanner from "../components/BuildingJourneyBanner";
import PreparingPart from "../components/parts/PreparingPart";

const BuildingJourneyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 333px;
  margin-bottom: 74px;
`;

const PartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 170px;
`;

const BuildingJourney: React.FC = () => {
  return (
    <BuildingJourneyContainer>
      <BuildingJourneyBanner />
      <PartContainer>
        <PreparingPart />
        {
          // part 2~4
        }
      </PartContainer>
    </BuildingJourneyContainer>
  );
};

export default BuildingJourney;
