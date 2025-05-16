"use client";

import styled from "@emotion/styled";
import Image from "next/image";

import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const BannerContainer = styled.section`
  margin-top: 72px;
  width: 100%;
  height: 626px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -1;
  position: relative;
`;

const BannerImage = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const BannerTextContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 93px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

const BannerTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 32px;
  line-height: 110%;
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.white};
`;

const BannerText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 18px;
  line-height: 110%;
  font-weight: ${theme.fonts.weights.regular};
  color: ${theme.colors.white};
`;

const PositiveImpactBanner: React.FC = () => {
  const { deviceType } = useResponsiveStore();
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
        <BannerTitle>
          <Text>{"Where Positive Influence Comes Full Circle"}</Text>
        </BannerTitle>
        <BannerText>
          <Text>{"선한 영향력이 선순환하는 공간"}</Text>
        </BannerText>
      </BannerTextContainer>
    </BannerContainer>
  );
};
export default PositiveImpactBanner;
