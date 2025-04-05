'use client';

import React from 'react';
import styled from '@emotion/styled';
import StoryCard from './StoryCard';

const SectionContainer = styled.section`
  padding: 4rem 0;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  margin-top: 3rem;
`;

const PositiveImpactSection: React.FC = () => {
  return (
    <SectionContainer>
      <StoryCard
        title="선한 영향력,\n그 과정의 기억"
        description="결국 저의 기부 중 일부는 전산학부 증축에 쓸 것이라는 결심까지 이어졌습니다."
        imageSrc="/images/Main/positive-impact.jpg"
        speaker="KAIST 전산학부 동문\n장병규 KRAFTON 의장 말씀 중"
        buttonText="Explore this story"
        buttonLink="/positive-impact"
      />
    </SectionContainer>
  );
};

export default PositiveImpactSection;
