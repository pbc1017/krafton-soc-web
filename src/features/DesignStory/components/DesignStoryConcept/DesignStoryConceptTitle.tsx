"use client";

import styled from "@emotion/styled";
import { useTranslations } from "next-intl";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 150px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    max-width: 1000px;
    gap: 200px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 120px;
  }
`;

const TitleText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 48px;
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.black};
  line-height: 100%;

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 24px;
    letter-spacing: 0.5px;
  }
`;

const SubTitleContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
  }
`;

const SubTitleLeft = styled.div`
  font-size: 42px;
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.black};
  line-height: 120%;
  min-width: 424px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 32px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 333px;
    min-width: 333px;
  }
`;

const SubTitleRight = styled.div`
  font-size: 18px;
  font-weight: ${theme.fonts.weights.regular};
  color: ${theme.colors.black};
  line-height: 180%;
  width: 849px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 16px;
    width: 318px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    line-height: 175%;
    width: 333px;
  }
`;

const DesignStoryConceptTitle = () => {
  const t = useTranslations("DesignStory.Concept.Title");

  return (
    <TitleContainer>
      <TitleText>
        <Text>DESIGN CONCEPTS</Text>
      </TitleText>
      <SubTitleContainer>
        <SubTitleLeft>
          <Text>{"Human-Centered\nIdeology"}</Text>
        </SubTitleLeft>
        <SubTitleRight>
          <Text>{t(`subTitle`)}</Text>
        </SubTitleRight>
      </SubTitleContainer>
    </TitleContainer>
  );
};

export default DesignStoryConceptTitle;
