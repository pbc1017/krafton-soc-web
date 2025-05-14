"use client";

import styled from "@emotion/styled";
import Image from "next/image";

import Text from "@krafton-soc/common/components/Text";
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
  width: 458px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 45px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-left: 20px;
  }
  //background-color: yellow;
`;

const TextTitle = styled.div`
  font-size: 64px;
  font-weight: ${theme.fonts.weights.semibold};
  line-height: 130%;
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 48px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 32px;
  }
`;

const TextContent = styled.div`
  font-size: 18px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 180%;
  color: ${theme.colors.black};
`;

const DesignStoryIntroStart = () => {
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
          <Text>{"우리의 시작을\n돌아보다"}</Text>
        </TextTitle>
        <TextContent>
          <Text>
            {`처음 논의가 시작될 때, 우리가 가장 중요하게 던진 질문은\n"이 공간이 사용자들에게 어떤 의미를 가질 것인가?"였습니다.\n단순히 하나의 결과물로서 완성되는 것이 아닌,\n보이지 않는 선한 영향력을 공간을 통해 가시화하고자 했습니다.\n\n이 공간은 거대한 연결의 흐름 속에서 눈에 보이는 하나의 \n연결점이자 이정표와 같은 역할을 합니다. 그렇기에 이곳이 하나의 \n끝이 아니라, 새로운 연결이 시작되는 장소가 되기를 바랍니다.\n\n이 공간을 경험하는 사람들이 거대한 고리로 연결되어, 어떤 \n변화를 만들어 가는지, 그리고 자신은 그 흐름 속에서 어떤 \n연결을 만들어갈 것인지 자연스럽게 느낄 수 있기를 기대합니다.`}
          </Text>
        </TextContent>
      </TextContainer>
    </IntroStartContainer>
  );
};

export default DesignStoryIntroStart;
