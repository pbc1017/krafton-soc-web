import styled from "@emotion/styled";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

import DesignStoryGalleryBehind from "./DesignStoryGalleryBehind";
import DesignStoryGalleryPhoto from "./DesignStoryGalleryPhoto";

const GalleryContainer = styled.section`
  width: min(100%, 1285px);

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 0 30px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    max-width: 1000px;
    padding: 0 24px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    padding: 0 20px;
  }
`;

const GalleryTitle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 48px;
  line-height: 100%;
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.black};

  margin-bottom: 120px;

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 24px;
    letter-spacing: 0.5px;
    margin-bottom: 40px;
  }
`;

const DesignStoryGallery = () => {
  return (
    <GalleryContainer>
      <GalleryTitle>
        <Text>{"GALLERY"}</Text>
      </GalleryTitle>
      <DesignStoryGalleryPhoto />
      <DesignStoryGalleryBehind />
    </GalleryContainer>
  );
};

export default DesignStoryGallery;
