"use client";

import styled from "@emotion/styled";
import Image from "next/image";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const CardContainer = styled.section`
  width: 1285px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  //background-color: green;
`;

const CardImage = styled.div`
  width: 837px;
  height: 345px;

  position: relative;
  //background-color: red;
`;

const CardText = styled.div`
  width: 413px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  font-family: ${theme.fonts.families.pretendard};
  font-weight: ${theme.fonts.weights.regular};
  font-size: 18px;
  line-height: 180%;
  color: ${theme.colors.black};

  //background-color: blue;
`;

const DesignStoryConceptCard2 = () => {
  return (
    <CardContainer>
      <CardImage>
        <Image
          src={"/images/DesignStory/Concept/card2.png"}
          alt="design-story-concept-card2"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </CardImage>
      <CardText>
        <Text>{`공간 설계는 수많은 고민을 거듭하며 단순한 기능적 배치나 장식적 요소를 넘어, 사용자들이 직관적으로 경험하고 \n참여할 수 있도록 이루어졌습니다.`}</Text>
      </CardText>
    </CardContainer>
  );
};

export default DesignStoryConceptCard2;
