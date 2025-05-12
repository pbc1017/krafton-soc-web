"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const BannerContainer = styled.section`
  width: 100%;
  margin-top: 72px;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  gap: 330px;
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
`;

const MessageContainer = styled.div`
  font-size: 18px;

  width: 642px;
  height: 256px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 14px;
  }
`;

const IntroductionContainer = styled.div`
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 8px;
  }
`;

const NameContainer = styled.div`
  line-height: 32px;
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    line-height: 17px;
  }
`;

const DateContainer = styled.div`
  font-size: 14px;

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 10px;
    line-height: 12px;
  }
`;

const ChairmanMessage: React.FC = () => {
  const t = useTranslations("BuildingJourney");
  return (
    <BannerContainer>
      <ImageContainer>
        <BannerImage>
          <Image
            src="/images/building-journey/building-journey.jpg"
            alt="Building Journey Page Banner Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </BannerImage>
      </ImageContainer>
      <ChairmanMessageContainer>
        <MessageContainer>
          <Text color={theme.colors.black}>{t("chairmanMessage.message")}</Text>
        </MessageContainer>

        <IntroductionContainer>
          <NameContainer>
            <Text color={theme.colors.black}>
              {t("chairmanMessage.introduction")}
            </Text>
          </NameContainer>
          <DateContainer>
            <Text color={theme.colors.black}>{t("chairmanMessage.date")}</Text>
          </DateContainer>
        </IntroductionContainer>
      </ChairmanMessageContainer>
    </BannerContainer>
  );
};

export default ChairmanMessage;
