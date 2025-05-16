"use client";

import styled from "@emotion/styled";
import Image from "next/image";

import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const Card1Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
`;

const CardImage = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1285 / 624;
  position: relative;
`;

const CardImageCaption = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 120%;
  color: ${theme.colors.black};
`;

const DesignStoryConceptCard1 = () => {
  const { deviceType } = useResponsiveStore();

  return (
    <Card1Container>
      <CardImage>
        <Image
          src={`/images/DesignStory/Concept/디자인이야기_Con3_${deviceType}.png`}
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
