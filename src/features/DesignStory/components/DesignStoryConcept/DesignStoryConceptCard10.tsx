"use client";

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
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 250px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 100%;
    margin-top: 70px;
    margin-left: 239px;
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 40px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: 80px;
    margin-left: 53px;
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  font-family: ${theme.fonts.families.pretendard};
  font-weight: ${theme.fonts.weights.regular};
  font-size: 18px;
  line-height: 180%;
  color: ${theme.colors.black};
  width: 411px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 437px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 280px;
    font-size: 16px;
  }
`;

const CardImage = styled.div`
  width: 654px;
  height: auto;
  aspect-ratio: 654 / 597;
  position: relative;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 100%;
  }
`;

const DesignStoryConceptCard10 = () => {
  const { deviceType } = useResponsiveStore();
  const t = useTranslations("DesignStory.Concept.Card10");

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
      <CardContainer>
        <CardText>
          <Text>{t(`text`)}</Text>
        </CardText>
        <CardImage>
          <Image
            src={`/images/DesignStory/Concept/디자인이야기_Con15_${deviceType}.png`}
            alt="design-story-concept-card10"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </CardImage>
      </CardContainer>
    </div>
  );
};

export default DesignStoryConceptCard10;
