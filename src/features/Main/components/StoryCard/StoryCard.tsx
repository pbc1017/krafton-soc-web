import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Text from '@krafton-soc/common/components/Text';
import { theme } from '@krafton-soc/common/styles/theme';
import { useRouter } from 'next/navigation';
import ExploreButton from './ExploreButton';

export interface StoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  speaker?: string;
  buttonLink?: string;
  isReversed?: boolean;
}

const StoryCardContainer = styled.div<{ isReversed: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 10px;
  max-width: 1283px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    max-width: 900px;
    align-items: ${({ isReversed }) => (isReversed ? 'flex-end' : 'flex-start')};
    padding: 0 24px;
    margin: 0 auto;
  }
`;

const FlexContainer = styled.div<{ isReversed: boolean }>`
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
  }
`;

const ContentContainer = styled.div<{ isReversed: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ isReversed }) => (isReversed ? '435px' : '412px')};
  height: 600px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 457px;
    margin-top: 80px;
    height: 457px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 740px;
  height: 600px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 577px;
    height: 468px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: auto;
`;

const TitleContainer = styled.div`
  font-size: 52px;
  line-height: 67.6px;
`;

const DescriptionContainer = styled.div`
  font-size: 30px;
  line-height: 48px;
  margin-top: 24px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 30px;
    font-size: 28px;
    line-height: 42px;
  }
`;

const SpeakerContainer = styled.div`
  font-size: 18px;
  line-height: 28px;
  margin-top: 48px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 60px;
    font-size: 18px;
    line-height: 28px;
  }
`;

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  description,
  imageSrc,
  speaker,
  buttonLink = '/',
  isReversed = false,
}) => {
  const router = useRouter();
  return (
    <StoryCardContainer isReversed={isReversed}>
      <FlexContainer isReversed={isReversed}>
        <ImageContainer>
          <Image src={imageSrc} alt={title} fill objectFit="cover" priority />
        </ImageContainer>

        <ContentContainer isReversed={isReversed}>
          <TitleContainer>
            <Text fw={theme.fonts.weights.semibold}>{title}</Text>
          </TitleContainer>

          <DescriptionContainer>
            <Text fw={theme.fonts.weights.medium}>{description}</Text>
          </DescriptionContainer>

          {speaker && (
            <SpeakerContainer>
              <Text fw={theme.fonts.weights.medium}>{speaker}</Text>
            </SpeakerContainer>
          )}

          <ButtonContainer>
            <ExploreButton onClick={() => router.push(buttonLink)} />
          </ButtonContainer>
        </ContentContainer>
      </FlexContainer>
    </StoryCardContainer>
  );
};

export default StoryCard;
