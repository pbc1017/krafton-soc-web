"use client";

import styled from "@emotion/styled";
import { useTranslations } from "next-intl";

import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const DesignStoryConceptFinalContainer = styled.section`
  width: min(1285px, 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 90px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 696px;
    gap: 56px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: min(100%, 353px);
    gap: 40px;
  }
  //background-color: pink;
`;

const DesignStoryConceptFinalQuoteContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    gap: 29px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 18px;
  }
  //background-color: red;
`;

const DesignStoryConceptFinalQuoteText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 48px;
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.black};
  line-height: 130%;
  text-align: center;

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 26px;
  }
  //background-color: green;
`;

const DesignStoryConceptFinalQuoteAuthor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  font-size: 14px;
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.black};
  line-height: 180%;

  //background-color: blue;
`;

const DesignStoryConceptFinalWish = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  font-size: 18px;
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.black};
  line-height: 180%;

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 16px;
  }

  //background-color: magenta;
`;

const DesignStoryConceptFinal = () => {
  const t = useTranslations("DesignStory.Concept.Final");
  const { deviceType } = useResponsiveStore();

  return (
    <DesignStoryConceptFinalContainer>
      <DesignStoryConceptFinalQuoteContainer>
        <DesignStoryConceptFinalQuoteText>
          <Text>{t(`quote.${deviceType}`)}</Text>
        </DesignStoryConceptFinalQuoteText>
        <DesignStoryConceptFinalQuoteAuthor>
          <Text>{`- Grady Booch (Developer of UML) -`}</Text>
        </DesignStoryConceptFinalQuoteAuthor>
      </DesignStoryConceptFinalQuoteContainer>
      <DesignStoryConceptFinalWish>
        <Text>{t(`wish.${deviceType}`)}</Text>
      </DesignStoryConceptFinalWish>
    </DesignStoryConceptFinalContainer>
  );
};

export default DesignStoryConceptFinal;
