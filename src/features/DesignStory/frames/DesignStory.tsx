"use client";

import styled from "@emotion/styled";

import { theme } from "@krafton-soc/common/styles/theme";

import DesignStoryBanner from "../components/DesignStoryBanner";
import DesignStoryConcept from "../components/DesignStoryConcept";
import DesignStoryGallery from "../components/DesignStoryGallery";
import DesignStoryIntro from "../components/DesignStoryIntro";

const FrameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`;

const BannerContainer = styled.div`
  width: 100%;
  margin-top: 72px;
  padding-bottom: 175px;
  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    padding-bottom: 160px;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    padding-bottom: 140px;
  }
`;

const IntroContainer = styled.div`
  width: 100%;
  padding-bottom: 365px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    padding-bottom: 333px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    padding-bottom: 220px;
  }
`;

const ConceptContainer = styled.div`
  width: 100%;
  padding-bottom: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    padding-bottom: 300px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    padding-bottom: 220px;
  }
`;

const GalleryContainer = styled.div`
  width: 100%;
  padding-bottom: 64px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    padding-bottom: 117px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    padding-bottom: 67px;
  }
`;

const DesignStory: React.FC = () => {
  return (
    <FrameContainer>
      <BannerContainer>
        <DesignStoryBanner />
      </BannerContainer>
      <IntroContainer>
        <DesignStoryIntro />
      </IntroContainer>
      <ConceptContainer>
        <DesignStoryConcept />
      </ConceptContainer>
      <GalleryContainer>
        <DesignStoryGallery />
      </GalleryContainer>
    </FrameContainer>
  );
};

export default DesignStory;
