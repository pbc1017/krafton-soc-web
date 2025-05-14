"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const IntroCard2Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    flex-direction: column;
    align-items: flex-end;
    margin-right: 25px;
    gap: 88px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-right: 0px;
    gap: 60px;
  }

  //background-color: pink;
`;

const ImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 680px;
  gap: 10px;

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
    height: 509px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    height: 329px;
  }
`;

const CardImageCaption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  font-size: 14px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 130%;
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 12px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-right: 20px;
  }

  //background-color: green;
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 521px;

  gap: 45px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 577px;
    padding-right: 20px;
    gap: 27px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 353px;
    margin-right: 20px;
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

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    padding-right: 20px;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 16px;
    line-height: 175%;
  }

  //background-color: blue;
`;

const DesignStoryIntroConnect = () => {
  const t = useTranslations("DesignStory.Intro.Card2");

  const { isDesktop, deviceType } = useResponsiveStore();
  return (
    <IntroCard2Container>
      {isDesktop && (
        <TextContainer>
          <TextTitle>
            <Text>{t(`title.${deviceType}`)}</Text>
          </TextTitle>
          <TextContent>
            <Text>{t(`content.${deviceType}`)}</Text>
          </TextContent>
        </TextContainer>
      )}
      <ImageContainer>
        <CardImage>
          <Image
            src="/images/DesignStory/Intro/card2.png"
            alt="Design Story Intro Card 2"
            fill
          />
        </CardImage>
        <CardImageCaption>
          <Text>{"1F Openable Window Linking Indoor and Outdoor Spaces"}</Text>
        </CardImageCaption>
      </ImageContainer>
      {!isDesktop && (
        <TextContainer>
          <TextTitle>
            <Text>{t(`title.${deviceType}`)}</Text>
          </TextTitle>
          <TextContent>
            <Text>{t(`content.${deviceType}`)}</Text>
          </TextContent>
        </TextContainer>
      )}
    </IntroCard2Container>
  );
};

export default DesignStoryIntroConnect;
