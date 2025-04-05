'use client';

import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

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

const BannerTitle = styled.p`
  color: #ffffff;
  font-family: 'Pretendard-Medium', Helvetica;
  font-size: 32px;
  font-weight: 500;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  letter-spacing: 0;
  line-height: normal;
  text-align: center;
  top: 402px;
  white-space: nowrap;
  width: 890px;
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
      <BannerTitle>Positive Influence, Memories of the Journey</BannerTitle>
      <Arrow>
        <ArrowLine />
        <ArrowHead />
      </Arrow>
    </BannerContainer>
  );
};

export default MainBanner;
