'use client';

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Text from '@krafton-soc/common/components/Text';
import { theme } from '@krafton-soc/common/styles/theme';

const BannerContainer = styled.section`
  margin-top: 72px;
  width: 100%;
  height: 837px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    height: 432px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    height: 500px;
  }
`;

const BannerImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  margin-top: -434px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: -194px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: -201px;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: 32px;
  line-height: 37px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 22px;
    line-height: 27px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const ArrowContainer = styled.div`
  width: 7px;
  height: 196px;
  margin-top: 100px;
  display: flex;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 30px;
    height: 101px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: 21px;
    height: 97px;
  }
`;

const ArrowLine = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${theme.colors.white};
`;

const ArrowHead = styled.div`
  width: 6px;
  height: 6px;
  position: absolute;
  bottom: 0;
  border-bottom: 1px solid ${theme.colors.white};
  border-right: 1px solid ${theme.colors.white};
  transform: rotate(45deg);
  margin-bottom: 1px;
  margin-left: -2.5px;
`;

const ScaledImage = styled(Image)`
  object-fit: cover;
  transform: scale(1.8);
  transform-origin: center bottom;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    transform: scale(1.5);
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    transform: scale(1.2);
  }
`;

const MainBanner: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= parseInt(theme.breakpoints.mobileTablet));
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BannerContainer>
      <BannerImage>
        <ScaledImage src="/images/Main/banner.jpg" alt="Krafton SoC Banner" fill priority />
      </BannerImage>
      <ContentContainer>
        <TitleContainer>
          <Text color={theme.colors.white} fw={theme.fonts.weights.medium}>
            Positive Influence,
            {isMobile ? '\n' : ' '}
            Memories of the Journey
          </Text>
        </TitleContainer>
        <ArrowContainer>
          <div style={{ position: 'relative', height: '100%' }}>
            <ArrowLine />
            <ArrowHead />
          </div>
        </ArrowContainer>
      </ContentContainer>
    </BannerContainer>
  );
};

export default MainBanner;
