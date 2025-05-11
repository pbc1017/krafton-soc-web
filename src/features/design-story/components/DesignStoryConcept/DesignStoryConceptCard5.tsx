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
  width: 460px;
  display: flex;
  flex-direction: column;
  gap: 153px;

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
  width: 567px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  gap: 19px;

  background-color: yellowgreen;
`;

const CardRightImage = styled.div`
  width: 100%;
  height: 432px;
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

const DesignStoryConceptCard5 = () => {
  return (
    <CardContainer>
      <CardLeftContainer>
        <CardLeftTitle>
          <Text>{"A Line of Giving, \nA Cycle of Connection"}</Text>
        </CardLeftTitle>
        <CardLeftText>
          <Text>
            {
              "기부자 명단 플레이트는 단순한 이름의 나열이 아닙니다.\n앞선 기부자의 이름이 다음 기부자의 이름과 한 줄로 이어지는 \n방식은, 기부가 단절된 행위가 아니라 하나의 선순환적 흐름이라는 \n의미를 담고 있습니다. \n\n단순히 기부자를 기리는 것을 넘어, ‘Pay It Forward’ 정신이 \n자연스럽게 확장될 수 있도록 구성되었습니다.\n기부를 받은 후배들은 이곳을 지나며 선배들의 따뜻한 마음을 \n기억하고, 언젠가 자신도 이 선 위에 이름을 남길 날을 \n떠올릴 수 있도록 의도했습니다."
            }
          </Text>
        </CardLeftText>
      </CardLeftContainer>
      <CardRightContainer>
        <CardRightImage>
          <Image
            src={"/images/DesignStory/Concept/card5.png"}
            alt="design-story-concept-card-5"
            fill
          />
        </CardRightImage>
        <CardRightImageCaption>
          <Text>{"Pay It Forward Plates"}</Text>
        </CardRightImageCaption>
      </CardRightContainer>
    </CardContainer>
  );
};

export default DesignStoryConceptCard5;
