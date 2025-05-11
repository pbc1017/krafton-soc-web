"use client";

import styled from "@emotion/styled";

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
`;

const IntroContainer = styled.div`
  width: 100%;
  padding-bottom: 365px;
`;

const ConceptContainer = styled.div`
  width: 100%;
  padding-bottom: 300px;
`;

const GalleryContainer = styled.div`
  width: 100%;
  padding-bottom: 64px;
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
