"use client";

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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 278px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    margin-top: 90px;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 20px;
    margin-top: 80px;
  }
`;

const CardImage = styled.div`
  max-width: 770px;
  min-width: 300px;
  flex-grow: 1;
  flex-shrink: 1;
  height: auto;
  aspect-ratio: 770 / 547;
  position: relative;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: calc(100% - 239px);
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 100%;
    max-width: unset;
    height: auto;
  }
`;

const CardRightContainer = styled.section`
  width: 436px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 100%;
    max-width: 100%;
    align-items: stretch;
    gap: 70px;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
  }
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

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 455px !important;
    font-size: 16px;
    text-align: left;
    align-self: flex-start;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 353px !important;
  }
`;

const CardRightImage = styled.div`
  width: 325px;
  height: 193px;
  position: relative;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: calc(100% - 406px);
    max-width: 325px;
    height: auto;
    aspect-ratio: 325 / 193;
    box-sizing: border-box;
    align-self: flex-end;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: calc(100% - 123px);
    max-width: 100%;
    min-width: unset;
    height: auto;
  }
`;

const DesignStoryConceptCard4 = () => {
  const { deviceType, isDesktop } = useResponsiveStore();
  const t = useTranslations("DesignStory.Concept.Card4");

  return (
    <CardContainer>
      <CardImage>
        <Image
          src={`/images/DesignStory/Concept/디자인이야기_Con6_${deviceType}.png`}
          alt={"design-story-concept-card-4-1"}
          fill
        />
      </CardImage>
      {isDesktop && <Spacer width={24} />}
      <CardRightContainer>
        <CardRightText>
          <Text>{t(`text.${deviceType}`)}</Text>
        </CardRightText>
        <CardRightImage>
          <Image
            src={`/images/DesignStory/Concept/디자인이야기_Con7_${deviceType}.png`}
            alt={"design-story-concept-card-4-2"}
            fill
          />
        </CardRightImage>
      </CardRightContainer>
    </CardContainer>
  );
};

export default DesignStoryConceptCard4;
