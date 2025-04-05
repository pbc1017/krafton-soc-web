'use client';

import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Text from '@krafton-soc/components/common/Text';
import { theme } from '@krafton-soc/styles/theme';

const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  height: 837px;
  overflow: hidden;
`;

const BannerImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 402px;
  width: 890px;
  text-align: center;
`;

const Arrow = styled.div`
  position: absolute;
  width: 7px;
  height: 196px;
  left: 50%;
  transform: translateX(-50%);
  top: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArrowLine = styled.div`
  width: 1px;
  height: 180px;
  background-color: #ffffff;
`;

const ArrowHead = styled.div`
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 14px solid #ffffff;
  margin-top: 2px;
`;

const MainBanner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerImage>
        <Image
          src="/images/Main/banner.jpg"
          alt="Krafton SoC Banner"
          fill
          priority
          objectFit="cover"
        />
      </BannerImage>
      <TitleContainer>
        <Text
          color={theme.colors.white}
          fs="32px"
          fw={theme.fonts.weights.medium}
          lh="normal"
          ff={theme.fonts.families.pretendard}
          style={{ whiteSpace: 'nowrap' }}
        >
          Positive Influence, Memories of the Journey
        </Text>
      </TitleContainer>
      <Arrow>
        <ArrowLine />
        <ArrowHead />
      </Arrow>
    </BannerContainer>
  );
};

export default MainBanner;
