"use client";

import styled from "@emotion/styled";

import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

import DesignStoryConceptCard1 from "./DesignStoryConceptCard1";
import DesignStoryConceptCard2 from "./DesignStoryConceptCard2";
import DesignStoryConceptCard3 from "./DesignStoryConceptCard3";
import DesignStoryConceptCard4 from "./DesignStoryConceptCard4";
import DesignStoryConceptCard5 from "./DesignStoryConceptCard5";
import DesignStoryConceptCard6 from "./DesignStoryConceptCard6";
import DesignStoryConceptCard7 from "./DesignStoryConceptCard7";
import DesignStoryConceptCard8 from "./DesignStoryConceptCard8";
import DesignStoryConceptCard9 from "./DesignStoryConceptCard9";
import DesignStoryConceptCard9small from "./DesignStoryConceptCard9small";
import DesignStoryConceptCard10 from "./DesignStoryConceptCard10";
import DesignStoryConceptFinal from "./DesignStoryConceptFinal";
import DesignStoryConceptTitle from "./DesignStoryConceptTitle";

const DesignStoryConceptContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  max-width: 1345px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    padding: 0 24px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    padding: 0 20px;
  }
`;

const DesignStoryConceptTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 180px;
  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-bottom: 120px;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-bottom: 80px;
  }
`;

const DesignStoryConceptCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DesignStoryConceptCardEndingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 328px;
  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 300px;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: 220px;
  }
`;

const DesignStoryConcept = () => {
  const { isDesktop } = useResponsiveStore();

  return (
    <DesignStoryConceptContainer>
      <DesignStoryConceptTitleContainer>
        <DesignStoryConceptTitle />
      </DesignStoryConceptTitleContainer>
      <DesignStoryConceptCardContainer>
        <DesignStoryConceptCard1 />
        <DesignStoryConceptCard2 />
        <DesignStoryConceptCard3 />
        <DesignStoryConceptCard4 />
        <DesignStoryConceptCard5 />
        <DesignStoryConceptCard6 />
        <DesignStoryConceptCard7 />
        <DesignStoryConceptCard8 />
        {isDesktop ? (
          <DesignStoryConceptCard9 />
        ) : (
          <DesignStoryConceptCard9small />
        )}
        <DesignStoryConceptCard10 />
      </DesignStoryConceptCardContainer>
      <DesignStoryConceptCardEndingContainer>
        <DesignStoryConceptFinal />
      </DesignStoryConceptCardEndingContainer>
    </DesignStoryConceptContainer>
  );
};

export default DesignStoryConcept;
