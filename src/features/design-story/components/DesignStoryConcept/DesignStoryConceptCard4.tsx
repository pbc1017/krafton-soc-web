import styled from "@emotion/styled";
import Image from "next/image";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const CardContainer = styled.section`
  width: 1285px;
  height: 547px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  background-color: red;
`;

const CardImage = styled.div`
  width: 770px;
  height: 100%;
  position: relative;

  background-color: pink;
`;

const CardRightContainer = styled.section`
  width: 436px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background-color: green;
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

  background-color: yellowgreen;
`;

const CardRightImage = styled.div`
  width: 325px;
  height: 193px;
  position: relative;
  background-color: orange;
`;

const DesignStoryConceptCard4 = () => {
  return (
    <CardContainer>
      <CardImage>
        <Image
          src={"/images/DesignStory/Concept/card4.png"}
          alt="design-story-concept-card-4"
          fill
        />
      </CardImage>
      <CardRightContainer>
        <CardRightText>
          <Text>
            {
              "기부자는 단순한 과거의 흔적이나 고정된 히스토리가 아니라, \n공간적 매개체를 통해 현재와 미래가 연결되는 존재로 \n기능하도록 의도했습니다."
            }
          </Text>
        </CardRightText>
        <CardRightImage>
          <Image
            src={"/images/DesignStory/Concept/card4-2.png"}
            alt="design-story-concept-card-4-2"
            fill
          />
        </CardRightImage>
      </CardRightContainer>
    </CardContainer>
  );
};

export default DesignStoryConceptCard4;
