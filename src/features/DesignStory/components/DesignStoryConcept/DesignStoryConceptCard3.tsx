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
  align-items: stretch;
  justify-content: space-between;
  margin: 250px auto 0;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 160px;
    flex-direction: column;
    align-items: flex-start;
    gap: 90px;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: 100px;
    gap: 80px;
  }
`;

const CardTextContainer = styled.section`
  width: 399px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 457px;
    align-items: flex-start;
    text-align: left;
    gap: 20px;
    justify-content: flex-start;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 333px;
  }
`;

const CardTextTitle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  font-family: ${theme.fonts.families.pretendard};
  font-weight: ${theme.fonts.weights.medium};
  font-size: 42px;
  line-height: 120%;
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 32px;
  }
`;

const CardTextContent = styled.section`
  width: 100%;
  font-family: ${theme.fonts.families.pretendard};
  font-weight: ${theme.fonts.weights.regular};
  font-size: 18px;
  line-height: 180%;
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 16px;
    width: 333px;
  }
`;

const CardImageContainer = styled.section`
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 300px;
  max-width: 764px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 100%;
    max-width: 100%;
    align-items: flex-start;
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 764 / 573;
  position: relative;

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: calc(100% + 40px);
    margin: 0 -20px;
  }
`;

const CardImageCaption = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  font-family: ${theme.fonts.families.pretendard};
  font-weight: ${theme.fonts.weights.regular};
  font-size: 14px;
  line-height: 120%;
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 12px;
  }
`;

const DesignStoryConceptCard3 = () => {
  const { deviceType, isDesktop } = useResponsiveStore();
  const t = useTranslations("DesignStory.Concept.Card3");

  return (
    <CardContainer>
      <CardTextContainer>
        <CardTextTitle>
          <Text>{t(`title`)}</Text>
        </CardTextTitle>
        <CardTextContent>
          <Text>{t(`content`)}</Text>
        </CardTextContent>
      </CardTextContainer>
      {isDesktop && <Spacer width={24} />}
      <CardImageContainer>
        <CardImage>
          <Image
            src={`/images/DesignStory/Concept/디자인이야기_Con5_${deviceType}.png`}
            alt="design-story-concept-card3"
            fill
            style={{ objectFit: "cover" }}
          />
        </CardImage>
        <CardImageCaption>
          <Text>{`Reflective Jungle`}</Text>
        </CardImageCaption>
      </CardImageContainer>
    </CardContainer>
  );
};

export default DesignStoryConceptCard3;
