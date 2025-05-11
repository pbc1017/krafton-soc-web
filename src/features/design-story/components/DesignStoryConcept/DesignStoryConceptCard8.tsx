import styled from "@emotion/styled";
import Image from "next/image";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const CardContainer = styled.section`
  width: 1285px;
  height: 726px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  background-color: red;
`;

const CardImage = styled.div`
  width: 520px;
  height: 100%;
  position: relative;

  background-color: pink;
`;

const CardRightContainer = styled.section`
  width: 432px;
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
  width: 100%;
  height: 378px;
  position: relative;
  background-color: orange;
`;

const DesignStoryConceptCard8 = () => {
  return (
    <CardContainer>
      <CardImage>
        <Image
          src={"/images/DesignStory/Concept/card8.png"}
          alt="design-story-concept-card-8"
          fill
        />
      </CardImage>
      <CardRightContainer>
        <CardRightText>
          <Text>
            {
              "‘Along, A-long Table’(가칭)과 같은 오브제를 통해 \n유산(Legacy)의 지속성과 연속성이 테이블까지 이어지며, \n이를 사용하는 후배들에게 자연스럽게 전해지기를 바랐습니다."
            }
          </Text>
        </CardRightText>
        <CardRightImage>
          <Image
            src={"/images/DesignStory/Concept/card8-2.png"}
            alt="design-story-concept-card-8-2"
            fill
          />
        </CardRightImage>
      </CardRightContainer>
    </CardContainer>
  );
};

export default DesignStoryConceptCard8;
