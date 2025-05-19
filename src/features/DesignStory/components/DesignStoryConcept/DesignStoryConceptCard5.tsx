import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Spacer from "@krafton-soc/common/components/Spacer";
import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const CardContainer = styled.section`
  width: 100%;
  max-width: 1285px;
  min-height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 278px;
  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 160px;
    flex-direction: column;
    align-items: flex-start;
    gap: 90px;
  }
`;

const CardLeftContainer = styled.section`
  width: 460px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    gap: 60px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 333px;
    gap: 40px;
  }
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

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 32px;
  }
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

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 16px;
  }
`;

const CardRightContainer = styled.section`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  gap: 19px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 100%;
    align-items: flex-start;
  }
`;

const CardRightImage = styled.div`
  width: 100%;
  height: auto;
  max-width: 567px;
  aspect-ratio: 567 / 432;
  position: relative;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    max-width: unset;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: calc(100% + 40px) !important;
    max-width: unset;
    margin: 0 -20px;
  }
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

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 12px;
  }
`;

const DesignStoryConceptCard5 = () => {
  const { deviceType } = useResponsiveStore();
  const t = useTranslations("DesignStory.Concept.Card5");

  return (
    <CardContainer>
      <CardLeftContainer>
        <CardLeftTitle>
          <Text>{"A Line of Giving, \nA Cycle of Connection"}</Text>
        </CardLeftTitle>
        <CardLeftText>
          <Text>{t(`text`)}</Text>
        </CardLeftText>
      </CardLeftContainer>
      <Spacer width={20} />
      <CardRightContainer>
        <CardRightImage>
          <Image
            src={`/images/DesignStory/Concept/디자인이야기_Con8_${deviceType}.png`}
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
