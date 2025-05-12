"use client";

import styled from "@emotion/styled";
import Image from "next/image";

import { theme } from "@krafton-soc/common/styles/theme";

const Card1Container = styled.section`
  width: 1285px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  //background-color: green;
`;

const CardImage = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  //background-color: red;
`;

const CardImageCaption = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 120%;
  color: ${theme.colors.black};
  //background-color: yellowgreen;
`;

const DesignStoryConceptCard1 = () => {
  return (
    <Card1Container>
      <CardImage>
        <Image
          src={"/images/DesignStory/Concept/card1.png"}
          alt="design-story-concept-card1"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </CardImage>
      <CardImageCaption>{"1F Concrete Wall & Table"}</CardImageCaption>
    </Card1Container>
  );
};

export default DesignStoryConceptCard1;
