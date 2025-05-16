"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Spacer from "@krafton-soc/common/components/Spacer";
import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const IntroCard2Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    flex-direction: column;
    align-items: flex-end;
    gap: 100px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 60px;
  }
`;

const ImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 680px;
  flex-grow: 1;
  flex-shrink: 1;
  gap: 10px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 577px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    padding-left: 20px;
    width: 100%;
    align-self: flex-end;
    box-sizing: border-box;
  }
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 680 / 600;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    height: 509px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    height: auto;
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
`;

const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 516px;
  flex-shrink: 0;
  gap: 52px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 577px;
    padding-right: 20px;
    gap: 27px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 353px;
    padding-right: 0px;
    padding-left: 20px;
    gap: 40px;
    align-self: flex-start;
  }
`;

const TextTitle = styled.div`
  width: 100%;
  font-size: 64px;
  font-weight: ${theme.fonts.weights.semibold};
  line-height: 83px;
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
      {isDesktop && <Spacer width={27} />}
      <ImageContainer>
        <CardImage>
          <Image
            src={`/images/DesignStory/Intro/디자인이야기_Con2_${deviceType}.png`}
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
