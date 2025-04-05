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

const DesignStorySection: React.FC = () => {
  return (
    <SectionContainer>
      <StoryCard
        title="KRAFTON X SoC,\n디자인 이야기"
        description="이 공간의 시작은 '연결'이라는 하나의 단어였지만, 그 과정 속에서 우리는 '연결이 어떻게 경험될 수 있는가'에 대한 더 깊은 고민을 담았습니다."
        imageSrc="/images/Main/design-story.jpg"
        direction="row-reverse"
        buttonText="Explore this story"
        buttonLink="/design-story"
      />
    </SectionContainer>
  );
};

export default DesignStorySection;
