"use client";

import styled from "@emotion/styled";

import { theme } from "@krafton-soc/common/styles/theme";

import DesignStoryIntroCard1 from "./DesignStoryIntroCard1";
import DesignStoryIntroCard2 from "./DesignStoryIntroCard2";

const DesignStoryIntroContainer = styled.section`
  max-width: 1385px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 200px;
  padding: 0 30px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    max-width: 1000px;
    padding: 0 25px;
    gap: 140px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    padding: 0 0px;
    gap: 120px;
  }
`;

const DesignStoryIntro = () => {
  return (
    <DesignStoryIntroContainer>
      <DesignStoryIntroCard1 />
      <DesignStoryIntroCard2 />
    </DesignStoryIntroContainer>
  );
};
export default DesignStoryIntro;
