"use client";

import styled from "@emotion/styled";

import DesignStoryConceptCard1 from "./DesignStoryConceptCard1";
import DesignStoryConceptCard2 from "./DesignStoryConceptCard2";
import DesignStoryConceptCard3 from "./DesignStoryConceptCard3";
import DesignStoryConceptCard4 from "./DesignStoryConceptCard4";
import DesignStoryConceptCard5 from "./DesignStoryConceptCard5";
import DesignStoryConceptCard6 from "./DesignStoryConceptCard6";
import DesignStoryConceptCard7 from "./DesignStoryConceptCard7";
import DesignStoryConceptCard8 from "./DesignStoryConceptCard8";
import DesignStoryConceptCard9 from "./DesignStoryConceptCard9";
import DesignStoryConceptCard10 from "./DesignStoryConceptCard10";
import DesignStoryConceptFinal from "./DesignStoryConceptFinal";
import DesignStoryConceptTitle from "./DesignStoryConceptTitle";

const DesignStoryConceptContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 180px;
`;

const DesignStoryConceptCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 250px;
`;

const DesignStoryConcept = () => {
  return (
    <DesignStoryConceptContainer>
      <DesignStoryConceptTitle />
      <DesignStoryConceptCardContainer>
        <DesignStoryConceptCard1 />
        <DesignStoryConceptCard2 />
        <DesignStoryConceptCard3 />
        <DesignStoryConceptCard4 />
        <DesignStoryConceptCard5 />
        <DesignStoryConceptCard6 />
        <DesignStoryConceptCard7 />
        <DesignStoryConceptCard8 />
        <DesignStoryConceptCard9 />
        <DesignStoryConceptCard10 />
      </DesignStoryConceptCardContainer>
      <DesignStoryConceptFinal />
    </DesignStoryConceptContainer>
  );
};

export default DesignStoryConcept;
