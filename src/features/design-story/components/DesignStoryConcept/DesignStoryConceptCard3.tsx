"use client";

import styled from "@emotion/styled";
import Image from "next/image";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const CardContainer = styled.section`
  width: 1285px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  //background-color: red;
`;

const CardTextContainer = styled.section`
  width: 399px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 160px;

  //background-color: green;
`;

const CardTextTitle = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  text-align: left;
  font-family: ${theme.fonts.families.pretendard};
  font-weight: ${theme.fonts.weights.medium};
  font-size: 42px;
  line-height: 120%;
  color: ${theme.colors.black};

  //background-color: yellow;
`;

const CardTextContent = styled.section`
  width: 100%;
  font-family: ${theme.fonts.families.pretendard};
  font-weight: ${theme.fonts.weights.regular};
  font-size: 18px;
  line-height: 180%;
  color: ${theme.colors.black};

  //background-color: orange;
`;

const CardImageContainer = styled.section`
  width: 764px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 10px;

  //background-color: purple;
`;

const CardImage = styled.div`
  width: 100%;
  height: 573px;
  position: relative;

  //background-color: pink;
`;

const CardImageCaption = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  text-align: right;

  font-family: ${theme.fonts.families.pretendard};
  font-weight: ${theme.fonts.weights.regular};
  font-size: 14px;
  line-height: 120%;
  color: ${theme.colors.black};

  //background-color: wheat;
`;

const DesignStoryConceptCard3 = () => {
  return (
    <CardContainer>
      <CardTextContainer>
        <CardTextTitle>
          <Text>{`Heritage, \nNot a Narrative`}</Text>
        </CardTextTitle>
        <CardTextContent>
          <Text>{`‘Heritage, Not a Narrative’는 이번 프로젝트를 \n관통하는 가장 중요한 개념이었습니다. \n기부자들이 자신의 존재를 부각시키기보다, 후배들에게 \n자연스럽게 유산을 남기고자 하는 의지를 담아 \n공간 속에서 은은하게 드러나도록 디자인했습니다.\n\n함께 성장하는 ‘Reflective Jungle’(가칭)의 식물 사이로 슈퍼미러에 새겨진 기부자의 메시지는 단순한 일방적인 기념물이 아니라, 사용자의 움직임에 따라 변화하고 \n투영되는 요소로 작용합니다.`}</Text>
        </CardTextContent>
      </CardTextContainer>
      <CardImageContainer>
        <CardImage>
          <Image
            src={"/images/DesignStory/Concept/card3.png"}
            alt="design-story-concept-card3"
            fill
            style={{ objectFit: "cover" }}
          />
        </CardImage>
        <CardImageCaption>
          <Text>{`Reflective Jungle`}</Text>
        </CardImageCaption>
      </CardImageContainer>
    </CardContainer>
  );
};

export default DesignStoryConceptCard3;
