"use client";

import styled from "@emotion/styled";

import DesignStoryIntroCard1 from "./DesignStoryIntroCard1";
import DesignStoryIntroCard2 from "./DesignStoryIntroCard2";

const DesignStoryIntroContainer = styled.section`
  width: min(100%, 1285px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 200px;
  //background-color: rebeccapurple;
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
