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

const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Main: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <ContentWrapper>
        <MainBanner />
        <PositiveImpactSection />
        <DesignStorySection />
        <BuildingJourneySection />
      </ContentWrapper>
      <Footer />
    </MainContainer>
  );
};

export default Main;
