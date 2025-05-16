"use client";

import styled from "@emotion/styled";
import Image from "next/image";

import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const CardContainer = styled.section`
  width: 1285px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 250px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 70px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: 80px;
  }
`;

const CardText = styled.div`
  width: 421px;

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

const CardImage = styled.div`
  width: 654px;
  height: 597px;

  position: relative;
  //background-color: red;
`;

const DesignStoryConceptCard10 = () => {
  const { deviceType } = useResponsiveStore();

  return (
    <CardContainer>
      <CardText>
        <Text>{`기존에 막힌 창호에 개방형 대형 창호를 설계하여  \n‘내부와 내부의 경계를 열어 연결되고, 마주 보고 소통하는’\n요소를 반영했습니다. \n\n이곳에서 학생들이 앉거나 누울 수도 있고, 밖을 바라보거나\n나갈 수도 있는 자유롭고 주도적인 공간을 경험할 수 있도록\n했으며, 이 공간에서 개인의 자유로움만큼 사고의 자유로움도\n확장될 수 있기를 기대했습니다.`}</Text>
      </CardText>
      <CardImage>
        <Image
          src={`/images/DesignStory/Concept/디자인이야기_Con15_${deviceType}.png`}
          alt="design-story-concept-card10"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </CardImage>
    </CardContainer>
  );
};

export default DesignStoryConceptCard10;
