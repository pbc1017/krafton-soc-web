"use client";

import styled from "@emotion/styled";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const TitleContainer = styled.div`
  width: 1285px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 150px;

  //background-color: pink;
`;

const SubTitleContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  //background-color: red;
`;

const SubTitleLeft = styled.div`
  width: 350px;
  font-size: 42px;
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.black};
  line-height: 120%;
  //background-color: cyan;
`;

const SubTitleRight = styled.div`
  width: 849px;

  font-size: 18px;
  font-weight: ${theme.fonts.weights.regular};
  color: ${theme.colors.black};
  line-height: 180%;
  //background-color: yellow;
`;

const DesignStoryConceptTitle = () => {
  return (
    <TitleContainer>
      <Text
        fs="48px"
        fw={theme.fonts.weights.bold}
        color={theme.colors.black}
        lh="100%"
      >
        DESIGN CONCEPTS
      </Text>
      <SubTitleContainer>
        <SubTitleLeft>
          <Text>{"Human-Centered \nIdeology"}</Text>
        </SubTitleLeft>
        <SubTitleRight>
          <Text>
            {
              "이러한 연결에 대한 고민은 KAIST 전산학부와 KRAFTON이 공유하는 ‘Human-Centric’ 이념, \n즉 기술의 발전은 결국 인간을 향해야 한다는 명확한 가치에서 출발했습니다."
            }
          </Text>
        </SubTitleRight>
      </SubTitleContainer>
    </TitleContainer>
  );
};

export default DesignStoryConceptTitle;
