"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const BannerContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  position: relative;

  height: 626px;
  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    height: 380px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    height: 500px;
  }
`;

const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const BannerTextContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const BannerTitleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 32px;
  font-weight: ${theme.fonts.weights.medium};
  line-height: 110%;
  color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 28px;
  }
`;

const BannerSubText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 24px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 110%;
  color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 20px;
  }
`;
const PositiveImpactBanner: React.FC = () => {
  const { deviceType } = useResponsiveStore();
  const t = useTranslations("PositiveImpact.Banner");
  const locale = useLocale();
  return (
    <BannerContainer>
      <BannerImage>
        <Image
          src={`/images/PositiveImpact/선한영향력의길_hero_${deviceType}.png`}
          alt="Positive Impact Banner"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </BannerImage>
      <BannerTextContainer>
        <BannerTitleText>
          <Text>{t(`title`)}</Text>
        </BannerTitleText>
        {locale === "ko" && (
          <>
            <BannerTitleText>
              <Text>{"\n"}</Text>
            </BannerTitleText>
            <BannerSubText>
              <Text>{t(`subTitle`)}</Text>
            </BannerSubText>
          </>
        )}
      </BannerTextContainer>
    </BannerContainer>
  );
};
export default PositiveImpactBanner;
