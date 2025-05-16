import styled from "@emotion/styled";
import Image from "next/image";

import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const CardContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 250px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 100px;
    flex-direction: column;
    gap: 60px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: 80px;
    flex-direction: column;
    gap: 60px;
  }
`;

const CardImage = styled.div`
  width: 520px;
  height: 726px;
  position: relative;
  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 457px;
    height: 638px;
    position: relative;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 300px;
    height: 400px;
    position: relative;
  }
`;

const CardRightContainer = styled.section`
  width: 432px;
  height: 726px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    justify-content: unset;
    width: 100%;
    gap: 40px;
    height: 480px;
  }
`;

const CardRightText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: left;
  font-size: 18px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 180%;
  color: ${theme.colors.black};
`;

const CardRightImage = styled.div`
  width: 100%;
  height: 378px;
  position: relative;
  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 400px;
    height: 350px;
    position: relative;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 300px;
    height: 250px;
    position: relative;
  }
`;

const DesignStoryConceptCard8 = () => {
  const { deviceType } = useResponsiveStore();

  return (
    <CardContainer>
      <CardImage>
        <Image
          src={`/images/DesignStory/Concept/디자인이야기_Con11_${deviceType}.png`}
          alt="design-story-concept-card-8"
          fill
        />
      </CardImage>
      <CardRightContainer>
        <CardRightText>
          <Text>
            {
              "‘Along, A-long Table’과 같은 오브제를 통해 \n유산(Legacy)의 지속성과 연속성이 테이블까지 이어지며, \n이를 사용하는 후배들에게 자연스럽게 전해지기를 바랐습니다."
            }
          </Text>
        </CardRightText>
        <CardRightImage>
          <Image
            src={`/images/DesignStory/Concept/디자인이야기_Con12_${deviceType}.png`}
            alt="design-story-concept-card-8-2"
            fill
          />
        </CardRightImage>
      </CardRightContainer>
    </CardContainer>
  );
};

export default DesignStoryConceptCard8;
