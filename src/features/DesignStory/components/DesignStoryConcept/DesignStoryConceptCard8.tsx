import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslations } from "next-intl";

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
    width: 210px;
    height: 293px;
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

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 338px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 16px;
    width: 333px;
  }
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
    width: 200px;
    height: 184px;
    position: relative;
  }
`;

const DesignStoryConceptCard8 = () => {
  const { deviceType } = useResponsiveStore();
  const t = useTranslations("DesignStory.Concept.Card8");
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
          <Text>{t(`text`)}</Text>
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
