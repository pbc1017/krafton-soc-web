'use client';

import React from 'react';
import styled from '@emotion/styled';
import MainBanner from '../components/MainBanner';
import StoryCard from '../components/StoryCard';

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionContainer = styled.section`
  padding: 4rem 0;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  margin-top: 3rem;
`;

const BuildingJourneySectionContainer = styled(SectionContainer)`
  margin-bottom: 5rem;
`;

const Main: React.FC = () => {
  return (
    <MainContainer>
      <MainBanner />
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
      <BuildingJourneySectionContainer>
        <StoryCard
          title="선한 영향력이\n선순환하는 공간"
          description="이곳은 우리 후배들에게 감사함을 나누는 Pay It Forward, 연결의 공간입니다."
          imageSrc="/images/Main/building-journey.jpg"
          speaker="KAIST 전산학부 동문\n류석영 학부장 말씀 중"
          buttonText="Explore this story"
          buttonLink="/building-journey"
        />
      </BuildingJourneySectionContainer>
    </MainContainer>
  );
};

export default Main;
