"use client";

import styled from "@emotion/styled";
import Image from "next/image";

import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const BannerContainer = styled.section`
  width: 100%;
  height: 628px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  position: relative;
`;

const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const BannerTextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 93px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const BannerTitle = styled.div`
  font-size: 32px;
  font-weight: ${theme.fonts.weights.medium};
  line-height: 110%;
  color: ${theme.colors.white};
`;

const BannerSubTitle = styled.div`
  font-size: 24px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 110%;
  color: ${theme.colors.white};
`;

const DesignStoryBanner: React.FC = () => {
  const { windowWidth } = useResponsiveStore();

  return (
    <BannerContainer>
      <BannerImage>
        <Image
          src="/images/DesignStory/design-story.jpg"
          alt="Design Story Banner"
          width={windowWidth}
          height={628}
        />
      </BannerImage>
      <BannerTextContainer>
        <BannerTitle>
          <Text>KRAFTON X SoC, Design Story</Text>
        </BannerTitle>
        <BannerSubTitle>
          <Text>KRAFTON X SoC, 디자인 이야기</Text>
        </BannerSubTitle>
      </BannerTextContainer>
    </BannerContainer>
  );
};
export default DesignStoryBanner;
