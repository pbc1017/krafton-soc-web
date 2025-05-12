import styled from "@emotion/styled";
import Image from "next/image";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const CardContainer = styled.section`
  width: 1285px;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  //background-color: red;
`;

const CardLeftContainer = styled.section`
  width: 762px;

  display: flex;
  flex-direction: column;

  align-items: flex-end;

  gap: 10px;

  //background-color: yellowgreen;
`;

const CardLeftImage = styled.div`
  width: 100%;
  height: 469px;
  position: relative;

  //background-color: blue;
`;

const CardLeftImageCaption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  text-align: left;
  font-size: 14px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 120%;
  color: ${theme.colors.black};

  //background-color: orange;
`;

const CardRightContainer = styled.section`
  width: 432px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  //background-color: green;
`;

const CardRightTextContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  //background-color: magenta;
`;

const CardRightTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  text-align: left;
  font-size: 42px;
  font-weight: ${theme.fonts.weights.medium};
  line-height: 120%;
  color: ${theme.colors.black};

  //background-color: pink;
`;

const CardRightText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  text-align: left;
  font-size: 18px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 180%;
  color: ${theme.colors.black};

  //background-color: yellow;
`;

const CardRightImage = styled.div`
  width: 232px;
  height: 230px;
  position: relative;

  //background-color: blue;
`;

const DesignStoryConceptCard9 = () => {
  return (
    <CardContainer>
      <CardLeftContainer>
        <CardLeftImage>
          <Image
            src={"/images/DesignStory/Concept/card9.png"}
            alt="design-story-concept-card-9"
            fill
          />
        </CardLeftImage>
        <CardLeftImageCaption>
          <Text>{"Along, A-long Table and Concrete Wall"}</Text>
        </CardLeftImageCaption>
      </CardLeftContainer>
      <CardRightContainer>
        <CardRightTextContainer>
          <CardRightTitle>
            <Text>{"Beyond Boundaries,\nConnecting Views"}</Text>
          </CardRightTitle>
          <CardRightText>
            <Text>
              {
                "폐쇄적인 건물 내부에 갇힌 학생들의 공간이 아닌, 5개의\n중첩된 레이어(외부 조경, 콘크리트 테이블, 실내 조경, 평상,\n외부 석재 조경)를 통해 내 외부 시선이 자연스럽게 연결되도록\n디자인했습니다."
              }
            </Text>
          </CardRightText>
        </CardRightTextContainer>
        <CardRightImage>
          <Image
            src={"/images/DesignStory/Concept/card9-2.png"}
            alt="design-story-concept-card-9-2"
            fill
          />
        </CardRightImage>
      </CardRightContainer>
    </CardContainer>
  );
};

export default DesignStoryConceptCard9;
