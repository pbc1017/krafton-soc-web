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
  z-index: 0;
`;

const BannerTextContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 93px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const DesignStoryBanner: React.FC = () => {
  const { windowWidth } = useResponsiveStore();
  console.log(windowWidth);
  return (
    <BannerContainer>
      <BannerImage>
        <Image
          src="/images/DesignStory/design-story.jpg"
          alt="Design Story Banner"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </BannerImage>
      <BannerTextContainer>
        <Text
          fs="32px"
          fw={theme.fonts.weights.medium}
          color={theme.colors.white}
          lh="110%  "
        >
          KRAFTON X SoC, Design Story
        </Text>
        <Text
          fs="24px"
          fw={theme.fonts.weights.regular}
          color={theme.colors.white}
          lh="110%"
        >
          KRAFTON X SoC, 디자인 이야기
        </Text>
      </BannerTextContainer>
    </BannerContainer>
  );
};
export default DesignStoryBanner;
