import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import Text from '@krafton-soc/components/Text';
import { theme } from '@krafton-soc/styles/theme';

export interface StoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
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
  background-color: #f5f5f5;
`;

const ExploreButton = styled.div`
  margin-top: 2rem;
  position: relative;
  cursor: pointer;
`;

const ButtonLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${theme.colors.black};
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
      fill={theme.colors.black}
    />
  </svg>
);

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  description,
  imageSrc,
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
        <Text color={theme.colors.black} fs="52px" fw={theme.fonts.weights.semibold} lh="67.6px">
          {title}
        </Text>

        <Text color={theme.colors.black} fs="30px" fw={theme.fonts.weights.medium} lh="48px">
          {description}
        </Text>

        {speaker && (
          <Text color={theme.colors.black} fs="18px" fw={theme.fonts.weights.medium} lh="28px">
            {speaker}
          </Text>
        )}

        <ExploreButton>
          <Link href={buttonLink} passHref>
            <Text
              color={theme.colors.black}
              fs="24px"
              fw={theme.fonts.weights.bold}
              lh="28px"
              style={{ whiteSpace: 'nowrap' }}
            >
              {buttonText}
            </Text>
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
