import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Spacer from "@krafton-soc/common/components/Spacer";
import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const CardContainer = styled.section`
  max-width: 1285px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  margin-top: 250px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 160px;
    flex-direction: column;
    align-items: center;
    gap: 90px;
    box-sizing: border-box;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 80px;
  }
`;

const CardLeftContainer = styled.section`
  width: 406px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 100%;
    gap: 60px;
    justify-content: flex-start;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 353px !important;
    align-self: flex-start;
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

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 437px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 16px;
    width: 333px;
  }
`;

const CardRightContainer = styled.section`
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 350px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  gap: 10px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 100%;
    max-width: 100%;
    min-width: unset;
    flex-grow: 0;
    flex-shrink: 0;
    align-items: center;
  }
`;

const CardRightImage = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 764 / 573;
  position: relative;
  max-width: 764px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin: 0 -20px;
    width: calc(100% + 40px);
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

const DesignStoryConceptCard7 = () => {
  const { deviceType, isDesktop } = useResponsiveStore();
  const t = useTranslations("DesignStory.Concept.Card7");

  return (
    <CardContainer>
      <CardLeftContainer>
        <CardLeftTitle>
          <Text>{"Express Intuitive \nContinuity"}</Text>
        </CardLeftTitle>
        <CardLeftText>
          <Text>{t(`text`)}</Text>
        </CardLeftText>
      </CardLeftContainer>
      {isDesktop && <Spacer width={24} />}
      <CardRightContainer>
        <CardRightImage>
          <Image
            src={`/images/DesignStory/Concept/디자인이야기_Con10_${deviceType}.png`}
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
