"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const IntroStartContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 24px;
    gap: 110px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0px;
    gap: 60px;
  }

  //background-color: pink;
`;

const ImageContainer = styled.section`
  position: relative;
  width: 740px;
  gap: 7px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 577px;
    gap: 10px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 373px;
    gap: 10px;
  }
  //background-color: orange;
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;

  height: 600px;
  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    height: 468px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    height: 303px;
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
  justify-content: flex-start;

  width: 458px;

  gap: 45px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 577px;
    padding-right: 20px;
    gap: 56px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 353px;
    margin-left: 20px;
    gap: 40px;
  }
  //background-color: yellow;
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

  //background-color: red;
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

  //background-color: blue;
`;

const DesignStoryIntroStart = () => {
  const t = useTranslations("DesignStory.Intro.Card1");
  const { deviceType } = useResponsiveStore();
  return (
    <IntroStartContainer>
      <ImageContainer>
        <CardImage>
          <Image
            src="/images/DesignStory/Intro/card1.png"
            alt="Design Story Intro Card 1"
            fill
          />
        </CardImage>
        <CardImageCaption>
          <Text>1F Concrete Wall & Table</Text>
        </CardImageCaption>
      </ImageContainer>
      <TextContainer>
        <TextTitle>
          <Text>{t(`title.${deviceType}`)}</Text>
        </TextTitle>
        <TextContent>
          <Text>{t(`content.${deviceType}`)}</Text>
        </TextContent>
      </TextContainer>
    </IntroStartContainer>
  );
};

export default DesignStoryIntroStart;
