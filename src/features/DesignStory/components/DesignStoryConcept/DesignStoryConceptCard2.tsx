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
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 250px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    flex-direction: column;
    align-items: stretch;
    gap: 60px;
    margin-top: 100px;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 40px;
    align-items: flex-start;
    margin-top: 60px;
  }
`;

const CardImage = styled.div`
  height: auto;
  max-width: 837px;
  aspect-ratio: 837 / 345;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 200px;
  position: relative;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: calc(100% - 239px);
    max-width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    align-self: flex-start;
    box-sizing: border-box;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: calc(100% - 94px);
    box-sizing: border-box;
    align-self: flex-start;
  }
`;

const CardText = styled.div`
  width: 413px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;

  font-family: ${theme.fonts.families.pretendard};
  font-weight: ${theme.fonts.weights.regular};
  font-size: 18px;
  line-height: 180%;
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 318px !important;
    text-align: left;
    justify-content: flex-end;
    align-self: flex-end;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 16px;
    width: 353px !important;
    align-self: flex-start;
  }
`;

const DesignStoryConceptCard2 = () => {
  const { deviceType, isDesktop } = useResponsiveStore();
  const t = useTranslations("DesignStory.Concept.Card2");

  return (
    <CardContainer>
      <CardImage>
        <Image
          src={`/images/DesignStory/Concept/디자인이야기_Con4_${deviceType}.png`}
          alt="design-story-concept-card2"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </CardImage>
      {isDesktop && <Spacer width={33} />}
      <CardText>
        <Text>{t(`title.${deviceType}`)}</Text>
      </CardText>
    </CardContainer>
  );
};

export default DesignStoryConceptCard2;
