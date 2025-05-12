"use client";

import styled from "@emotion/styled";
import Image from "next/image";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const IntroCard2Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  //background-color: pink;
`;

const TextContainer = styled.div`
  width: 521px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 53px;
  //background-color: blue;
`;

const DesignStoryIntroConnect = () => {
  return (
    <IntroCard2Container>
      <TextContainer>
        <Text
          fs="64px"
          fw={theme.fonts.weights.semibold}
          color={theme.colors.black}
          lh="130%"
        >
          {"모든 것을 연결하다"}
        </Text>
        <Text
          fs="18px"
          fw={theme.fonts.weights.regular}
          color={theme.colors.black}
          lh="180%"
        >
          {`KRAFTON X SoC 공간은 사람들이 머물고 교류하며 새로운 아이디어를 나누는 장이 되어 ‘지식과 사람’, ‘기술과 사람', ‘사람과 사람’ 이 연결되고\n그안에 인간이 중심이 되어있다는 의미를 담고자 하였습니다. \n\n시작은 ‘연결’이라는 하나의 단어였지만, 그 과정 속에서 우리는\n‘연결이 어떻게 경험될 수 있는가’에 대한 더 깊은 고민을 담았습니다.`}
        </Text>
      </TextContainer>
      <ImageContainer>
        <Image
          src="/images/DesignStory/Intro/card2.png"
          alt="Design Story Intro Card 2"
          width={680}
          height={600}
        />
        <Text
          fs="14px"
          fw={theme.fonts.weights.regular}
          color={theme.colors.black}
          lh="130%"
        >
          1F Openable Window Linking Indoor and Outdoor Spaces
        </Text>
      </ImageContainer>
    </IntroCard2Container>
  );
};

export default DesignStoryIntroConnect;
