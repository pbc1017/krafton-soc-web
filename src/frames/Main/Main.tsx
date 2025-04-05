'use client';

import React from 'react';
import styled from '@emotion/styled';
import Header from '@krafton-soc/components/Header';
import Footer from '@krafton-soc/components/Footer';
import MainBanner from './MainBanner';
import PositiveImpactSection from './PositiveImpactSection';
import DesignStorySection from './DesignStorySection';
import BuildingJourneySection from './BuildingJourneySection';

const MainContainer = styled.main`
  width: 100%;
  background-color: #ffffff;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <MainBanner />
      <PositiveImpactSection />
      <DesignStorySection />
      <BuildingJourneySection />
      <Footer />
    </MainContainer>
  );
};

export default Main;
