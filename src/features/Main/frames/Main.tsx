"use client";

import styled from "@emotion/styled";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";
import { Locale } from "@krafton-soc/i18n/config";

import MainBanner from "../components/MainBanner";
import StoryCard from "../components/StoryCard";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 240px;
  margin-bottom: 300px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    gap: 151px;
    margin-bottom: 252px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 75px;
    margin-bottom: 180px;
  }
`;

const StoryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 260px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    gap: 210px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 160px;
  }
`;

const Main: React.FC = () => {
  const t = useTranslations("Main");
  const locale = useLocale() as Locale;
  const [isDesktop, setIsDesktop] = useState(true);
  const { deviceType } = useResponsiveStore();
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(
        window.innerWidth > parseInt(theme.breakpoints.tabletDesktop),
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MainContainer>
      <MainBanner />
      <StoryCardContainer>
        <StoryCard
          title={t("section1.title")}
          description={t("section1.description")}
          imageSrc={`/images/Main/_Main_con1_${deviceType}.png`}
          speaker={t("section1.speaker")}
          buttonLink="/building-journey"
          locale={locale}
        />
        <StoryCard
          title={t("section2.title")}
          description={t("section2.description")}
          imageSrc={`/images/Main/_Main_con2_${deviceType}.png`}
          isReversed={true}
          buttonLink="/design-story"
          locale={locale}
        />
        <StoryCard
          title={t("section3.title")}
          description={
            isDesktop
              ? t("section3.descriptionDesktop")
              : t("section3.description")
          }
          imageSrc={`/images/Main/_Main_con3_${deviceType}.png`}
          speaker={t("section3.speaker")}
          buttonLink="/positive-impact"
          locale={locale}
        />
      </StoryCardContainer>
    </MainContainer>
  );
};

export default Main;
