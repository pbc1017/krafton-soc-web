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
  margin-bottom: 5rem;
`;

const ConstructionJourneySection: React.FC = () => {
  return (
    <SectionContainer>
      <StoryCard
        title="선한 영향력이\n선순환하는 공간"
        description="이곳은 우리 후배들에게 감사함을 나누는 Pay It Forward, 연결의 공간입니다."
        imageSrc="/images/Main/construction-journey.jpg"
        speaker="KAIST 전산학부 동문\n류석영 학부장 말씀 중"
        buttonText="Explore this story"
        buttonLink="/construction-journey"
      />
    </SectionContainer>
  );
};

export default ConstructionJourneySection;
