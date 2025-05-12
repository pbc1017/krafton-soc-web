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
  //background-color: pink;
`;

const ImageContainer = styled.section`
  position: relative;
  width: 740px;
  //background-color: orange;
  gap: 7px;
`;

const TextContainer = styled.section`
  width: 458px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 45px;
  //background-color: yellow;
`;

const DesignStoryIntroStart = () => {
  return (
    <IntroStartContainer>
      <ImageContainer>
        <Image
          src="/images/DesignStory/Intro/card1.png"
          alt="Design Story Intro Card 1"
          width={740}
          height={600}
        />
        <Text
          fs="14px"
          fw={theme.fonts.weights.regular}
          color={theme.colors.black}
          lh="120%"
        >
          1F Concrete Wall & Table
        </Text>
      </ImageContainer>
      <TextContainer>
        <Text
          fs="64px"
          fw={theme.fonts.weights.semibold}
          color={theme.colors.black}
          lh="130%"
        >
          {"우리의 시작을\n돌아보다"}
        </Text>
        <Text
          fs="18px"
          fw={theme.fonts.weights.regular}
          color={theme.colors.black}
          lh="180%"
        >
          {`처음 논의가 시작될 때, 우리가 가장 중요하게 던진 질문은\n"이 공간이 사용자들에게 어떤 의미를 가질 것인가?"였습니다.\n단순히 하나의 결과물로서 완성되는 것이 아닌,\n보이지 않는 선한 영향력을 공간을 통해 가시화하고자 했습니다.\n\n이 공간은 거대한 연결의 흐름 속에서 눈에 보이는 하나의 \n연결점이자 이정표와 같은 역할을 합니다. 그렇기에 이곳이 하나의 \n끝이 아니라, 새로운 연결이 시작되는 장소가 되기를 바랍니다.\n\n이 공간을 경험하는 사람들이 거대한 고리로 연결되어, 어떤 \n변화를 만들어 가는지, 그리고 자신은 그 흐름 속에서 어떤 \n연결을 만들어갈 것인지 자연스럽게 느낄 수 있기를 기대합니다.`}
        </Text>
      </TextContainer>
    </IntroStartContainer>
  );
};

export default DesignStoryIntroStart;
