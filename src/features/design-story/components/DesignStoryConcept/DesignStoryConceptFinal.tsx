"use client";

import styled from "@emotion/styled";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const DesignStoryConceptFinalContainer = styled.section`
  width: 1285px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 90px;
  //background-color: pink;
`;

const DesignStoryConceptFinalQuoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27px;
  //background-color: red;
`;

const DesignStoryConceptFinalQuoteText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 48px;
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.black};
  line-height: 130%;
  text-align: center;
  //background-color: green;
`;

const DesignStoryConceptFinalQuoteAuthor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  font-size: 14px;
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.black};
  line-height: 180%;

  //background-color: blue;
`;

const DesignStoryConceptFinalWish = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  font-size: 18px;
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.black};
  line-height: 180%;

  //background-color: magenta;
`;

const DesignStoryConceptFinal = () => {
  return (
    <DesignStoryConceptFinalContainer>
      <DesignStoryConceptFinalQuoteContainer>
        <DesignStoryConceptFinalQuoteText>
          <Text>
            {`The function of good software is to make\nthe complex appear to be simple`}
          </Text>
        </DesignStoryConceptFinalQuoteText>
        <DesignStoryConceptFinalQuoteAuthor>
          <Text>{`- Grady Booch (Developer of UML) -`}</Text>
        </DesignStoryConceptFinalQuoteAuthor>
      </DesignStoryConceptFinalQuoteContainer>
      <DesignStoryConceptFinalWish>
        <Text>
          {`마치 건축 디자인에서 하나의 선을 지우기 위해 숨어 있는 수많은 기술이 필요하듯,\n이 공간에서도 무의식적으로 평온한 공간을 최적화하기 위해 구조적, 기술적 한계를\n넘어서려 했습니다. 이러한 모든 과정이 공간에 녹아들어, 우리의 의지가 학생들과 이곳을 \n방문하는 모든 이들에게 오롯이 전달되기를 바랍니다.`}
        </Text>
      </DesignStoryConceptFinalWish>
    </DesignStoryConceptFinalContainer>
  );
};

export default DesignStoryConceptFinal;
