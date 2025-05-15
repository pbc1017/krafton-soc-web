import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";
import { Locale } from "@krafton-soc/i18n/config";

import ExploreButton from "./ExploreButton";

export interface StoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  speaker?: string;
  buttonLink?: string;
  isReversed?: boolean;
  locale: Locale;
}

const StoryCardContainer = styled.div<{ isReversed: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 50px;
  max-width: 1363px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    max-width: 1000px;
    align-items: ${({ isReversed }) =>
      isReversed ? "flex-end" : "flex-start"};
    padding: 0 24px;
    margin: 0 auto;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    padding: 0 20px;
    margin: 0 0;
  }
`;

const FlexContainer = styled.div<{ isReversed: boolean }>`
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: ${({ isReversed }) => (isReversed ? "row-reverse" : "row")};
  align-items: stretch;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 100%;
  }
`;

const ContentContainer = styled.div<{ isReversed: boolean; locale: Locale }>`
  display: flex;
  flex-direction: column;
  width: ${({ isReversed }) => (isReversed ? "435px" : "412px")};
  flex-shrink: 0;
  height: auto;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 457px;
    margin-top: 80px;
    height: ${({ locale }) => (locale === "ko" ? "457px" : "527px")};
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 333px;
    margin-top: 60px;
    height: ${({ locale }) => (locale === "ko" ? "328px" : "388px")};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 740px;
  height: auto;
  aspect-ratio: 740 / 600;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 577px;
    height: 468px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 100%;
    aspect-ratio: 740 / 600;
    height: 100%;
  }
`;

const ButtonContainer = styled.div`
  margin-top: auto;
`;

const TitleContainer = styled.div<{ locale: Locale }>`
  font-size: ${({ locale }) => (locale === "ko" ? "52px" : "47px")};
  line-height: ${({ locale }) => (locale === "ko" ? "67.6px" : "54.6px")};

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 38px;
    line-height: 50px;
  }
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

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: 20px;
    font-size: 20px;
    line-height: 32px;
  }
`;

const SpeakerContainer = styled.div<{ locale: Locale }>`
  font-size: 18px;
  line-height: 28px;
  margin-top: 48px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: ${({ locale }) => (locale === "ko" ? "60px" : "30px")};
    font-size: 18px;
    line-height: 28px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: ${({ locale }) => (locale === "ko" ? "30px" : "15px")};
    font-size: 12px;
    line-height: 16.8px;
  }
`;

const Spacer = styled.div<{ isReversed: boolean }>`
  flex-shrink: 0;
  width: ${({ isReversed }) => (isReversed ? "64px" : "87.7px")};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 0;
    height: 0;
  }
`;

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  description,
  imageSrc,
  speaker,
  buttonLink = "/",
  isReversed = false,
  locale,
}) => {
  const router = useRouter();

  return (
    <StoryCardContainer isReversed={isReversed}>
      <FlexContainer isReversed={isReversed}>
        <ImageContainer>
          <Image src={imageSrc} alt={title} fill objectFit="cover" priority />
        </ImageContainer>
        <Spacer isReversed={isReversed} />
        <ContentContainer isReversed={isReversed} locale={locale}>
          <TitleContainer locale={locale}>
            <Text fw={theme.fonts.weights.semibold}>{title}</Text>
          </TitleContainer>

          <DescriptionContainer>
            <Text fw={theme.fonts.weights.medium}>{description}</Text>
          </DescriptionContainer>

          {speaker && (
            <SpeakerContainer locale={locale}>
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
