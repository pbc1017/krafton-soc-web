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

  background-color: red;
`;

const CardLeftContainer = styled.section`
  width: 406px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: green;
`;

const CardLeftTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  text-align: left;
  font-size: 42px;
  font-weight: ${theme.fonts.weights.medium};
  line-height: 120%;
  color: ${theme.colors.black};

  background-color: pink;
`;

const CardLeftText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  text-align: left;
  font-size: 18px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 180%;
  color: ${theme.colors.black};

  background-color: yellow;
`;

const CardRightContainer = styled.section`
  width: 764px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  gap: 10px;

  background-color: yellowgreen;
`;

const CardRightImage = styled.div`
  width: 100%;
  height: 573px;
  position: relative;

  background-color: blue;
`;

const CardRightImageCaption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  text-align: right;
  font-size: 14px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 120%;
  color: ${theme.colors.black};

  background-color: orange;
`;

const DesignStoryConceptCard7 = () => {
  return (
    <CardContainer>
      <CardLeftContainer>
        <CardLeftTitle>
          <Text>{"Express Intuitive \nContinuity"}</Text>
        </CardLeftTitle>
        <CardLeftText>
          <Text>
            {
              "설명으로 드러나지 않는 섬세한 기부자 공간으로서 \n더욱 Bold한 디자인을 적용하여, 사용자들에게 직관적으로\n메시지를 전달할 수 있는 강한 오브제적 요소와 \n공간감을 제공하고자 했습니다.\n\n‘Intuitive Continuity’를 구현하기 위해 Concrete라는 \n물성과 질감을 활용하여 공간을 하나의 언어로 통합하고, \n단순한 미학적 선택이 아닌, 공간의 지속성과 일관성을 \n유지하려 했습니다."
            }
          </Text>
        </CardLeftText>
      </CardLeftContainer>
      <CardRightContainer>
        <CardRightImage>
          <Image
            src={"/images/DesignStory/Concept/card7.png"}
            alt="design-story-concept-card-7"
            fill
          />
        </CardRightImage>
        <CardRightImageCaption>
          <Text>{"Along, A-long Table and Concrete Wall"}</Text>
        </CardRightImageCaption>
      </CardRightContainer>
    </CardContainer>
  );
};

export default DesignStoryConceptCard7;
