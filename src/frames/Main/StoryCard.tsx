'use client';

import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Image } from '@krafton-soc/components/common/Image';

export interface StoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  caption?: string;
  speaker?: string;
  buttonText?: string;
  buttonLink?: string;
  direction?: 'row' | 'row-reverse';
  className?: string;
}

const StoryCardContainer = styled.div<{ direction: StoryCardProps['direction'] }>`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'row-reverse' ? 'row-reverse' : 'row')};
  gap: 4rem;
  align-items: center;
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  width: 412px;
`;

const ImageContainer = styled.div`
  width: 740px;
  height: 600px;
  position: relative;
`;

const Title = styled.div`
  color: #000000;
  font-family: 'Pretendard-SemiBold', Helvetica;
  font-size: 52px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 67.6px;
  white-space: pre-line;
`;

const Description = styled.p`
  color: #000000;
  font-family: 'Pretendard-Medium', Helvetica;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 48px;
`;

const SpeakerInfo = styled.p`
  color: #000000;
  font-family: 'Pretendard-Medium', Helvetica;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
  white-space: pre-line;
`;

const ExploreButton = styled.div`
  margin-top: 2rem;
  position: relative;
  cursor: pointer;
`;

const ButtonText = styled.div`
  color: #000000;
  font-family: 'Pretendard-Bold', Helvetica;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const ButtonLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: #000000;
  position: absolute;
  bottom: -8px;
`;

const ArrowIcon = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  right: 0;
  top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowSvg = () => (
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.5 0L9.4125 2.0875L17.5375 10.25H0V13.25H17.5375L9.4125 21.4125L11.5 23.5L23 12L11.5 0Z"
      fill="#000000"
    />
  </svg>
);

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  description,
  imageSrc,
  caption,
  speaker,
  buttonText = 'Explore this story',
  buttonLink = '#',
  direction = 'row',
  className,
}) => {
  return (
    <StoryCardContainer direction={direction} className={className}>
      <ImageContainer>
        <Image src={imageSrc} alt={title} fill objectFit="cover" priority />
      </ImageContainer>

      <ContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {speaker && <SpeakerInfo>{speaker}</SpeakerInfo>}

        <ExploreButton>
          <Link href={buttonLink} passHref>
            <ButtonText>{buttonText}</ButtonText>
            <ArrowIcon>
              <ArrowSvg />
            </ArrowIcon>
            <ButtonLine />
          </Link>
        </ExploreButton>
      </ContentContainer>
    </StoryCardContainer>
  );
};

export default StoryCard;
