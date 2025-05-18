"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import Text from "@krafton-soc/common/components/Text";
import VerticalLine from "@krafton-soc/common/components/VerticalLine";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const BannerContainer = styled.section`
  width: 100%;
  margin-top: 72px;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 626px;
  z-index: 0;
  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    height: 380px;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    height: 500px;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;
  }
`;

const BannerImage = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  object-fit: cover;
  overflow: hidden;
  z-index: 0;
`;

const ChairmanMessageContainer = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: ${theme.fonts.weights.regular};
  font-family: "Pretendard";
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  line-height: 32px;

  width: 100%;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    gap: 40px;
  }
`;

const MessageContainer = styled.div`
  font-size: 18px;
  line-height: 32px;
  width: 642px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 680px;
    font-size: 18px;
    line-height: 32px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: min(345px, 100%);
    font-size: 16px;
    line-height: 30px;
  }
`;

const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    gap: 0px;
  }
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 8px;
  }
`;

const NameContainer = styled.div`
  font-size: 18px;
  line-height: 32px;
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 14px;
    line-height: normal;
  }
`;

const DateContainer = styled.div`
  font-size: 14px;
  line-height: 32px;

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 10px;
    line-height: normal;
  }
`;

const ChairmanMessage: React.FC = () => {
  const t = useTranslations("BuildingJourney.chairmanMessage");
  const { deviceType } = useResponsiveStore();
  return (
    <BannerContainer>
      <ImageContainer>
        <BannerImage>
          <Image
            src={`/images/BuildingJourney/건립의여정_hero_${deviceType}.png`}
            alt="Building Journey Page Banner Image"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </BannerImage>
      </ImageContainer>
      <VerticalLine
        height={{ desktop: 200, tablet: 120, mobile: 120 }}
        lineColor={theme.colors.black}
        marginTop={{ desktop: 70, tablet: 52, mobile: 40 }}
        marginBottom={{ desktop: 70, tablet: 52, mobile: 40 }}
      />
      <ChairmanMessageContainer>
        <MessageContainer>
          <Text color={theme.colors.black}>{t(`message`)}</Text>
        </MessageContainer>

        <IntroductionContainer>
          <NameContainer>
            <Text color={theme.colors.black}>
              {t(`introduction.${deviceType}`)}
            </Text>
          </NameContainer>
          <DateContainer>
            <Text color={theme.colors.black}>{t("date")}</Text>
          </DateContainer>
        </IntroductionContainer>
      </ChairmanMessageContainer>
    </BannerContainer>
  );
};

export default ChairmanMessage;
