import styled from "@emotion/styled";
import Image from "next/image";

import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const CardContainer = styled.div`
  width: 1280px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 250px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 100px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: 80px;
  }
`;

const CardImage = styled.div`
  width: 871px;
  height: 618px;
  position: relative;

  //background-color: magenta;
`;

const CardText = styled.div`
  width: 335px;
  text-align: left;

  font-size: 18px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 180%;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.families.pretendard};

  //background-color: green;
`;

const DesignStoryConceptCard6 = () => {
  const { deviceType } = useResponsiveStore();

  return (
    <CardContainer>
      <CardImage>
        <Image
          src={`/images/DesignStory/Concept/디자인이야기_Con9_${deviceType}.png`}
          alt="design-story-concept-card-6"
          fill
        />
      </CardImage>
      <CardText>
        <Text>
          {
            "우리는 작은 기부가 모여 더 큰 의미를 만들고,\n연결된 마음들이 새로운 가능성을 만들어 가는 \n과정을 시각적으로 표현하고자 했습니다. \n이 플레이트로 단순한 기록이 아니라, \n선한 영향력이 끊임없이 이어지는 공간이 되기를 \n바랐습니다. "
          }
        </Text>
      </CardText>
    </CardContainer>
  );
};

export default DesignStoryConceptCard6;
