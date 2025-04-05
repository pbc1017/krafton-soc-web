'use client';

import React from 'react';
import styled from '@emotion/styled';
import MainBanner from './MainBanner';
import PositiveImpactSection from './PositiveImpactSection';
import DesignStorySection from './DesignStorySection';
import BuildingJourneySection from './BuildingJourneySection';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main: React.FC = () => {
  return (
    <MainContainer>
      <MainBanner />
      <PositiveImpactSection />
      <DesignStorySection />
      <BuildingJourneySection />
    </MainContainer>
  );
};

export default Main;
