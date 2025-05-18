"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Spacer from "@krafton-soc/common/components/Spacer";
import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const IntroStartContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 110px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
  }
`;

const ImageContainer = styled.section`
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  max-width: 740px;
  gap: 7px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 577px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    padding-right: 20px;
    width: 100%;
  }
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 740 / 600;
  flex-shrink: 1;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    height: 468px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    height: auto;
  }
`;

const CardImageCaption = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 120%;
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 12px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-left: 20px;
  }
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  width: 458px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 577px;
    padding-right: 20px;
    gap: 56px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 353px;
    padding-right: 0px;
    padding-left: 20px;
  }
`;

const TextTitle = styled.div`
  width: 100%;
  font-size: 64px;
  font-weight: ${theme.fonts.weights.semibold};
  line-height: 130%;
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 56px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 40px;
    line-height: 120%;
  }
`;

const TextContent = styled.div`
  width: 100%;

  font-size: 18px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 180%;
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 16px;
    line-height: 175%;
  }
`;

const DesignStoryIntroStart = () => {
  const t = useTranslations("DesignStory.Intro.Card1");
  const { deviceType, isDesktop } = useResponsiveStore();
  return (
    <IntroStartContainer>
      <ImageContainer>
        <CardImage>
          <Image
            src={`/images/DesignStory/Intro/디자인이야기_Con1_${deviceType}.png`}
            alt="Design Story Intro Card 1"
            fill
          />
        </CardImage>
        <CardImageCaption>
          <Text>1F Concrete Wall & Table</Text>
        </CardImageCaption>
      </ImageContainer>
      {isDesktop && <Spacer width={27} />}
      <TextContainer>
        <TextTitle>
          <Text>{t(`title`)}</Text>
        </TextTitle>
        <TextContent>
          <Text>{t(`content`)}</Text>
        </TextContent>
      </TextContainer>
    </IntroStartContainer>
  );
};

export default DesignStoryIntroStart;
