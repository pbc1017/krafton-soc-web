'use client';

import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@krafton-soc/styles/theme';
import { Image } from '@krafton-soc/components/common/Image';

const FooterContainer = styled.footer`
  background-color: #ffffff;
  height: 135px;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: auto;
    padding: 2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const VerticalLine = styled.div`
  height: 8px;
  width: 1px;
  background-color: #000000;
  position: absolute;
  left: 166px;
  top: 73px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const SecondLine = styled.div`
  height: 8px;
  width: 1px;
  background-color: #000000;
  position: absolute;
  left: 367px;
  top: 73px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const CopyrightText = styled.span`
  color: #000000;
  font-size: 9px;
  font-weight: 400;
  position: absolute;
  left: 118px;
  top: 100px;
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: static;
    margin-top: 1rem;
  }
`;

const KaistLogoContainer = styled.div`
  height: 21px;
  width: 127px;
  position: absolute;
  left: 109px;
  top: 27px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: static;
    margin-bottom: 1rem;
  }
`;

const KraftonLogoContainer = styled.div`
  height: 18px;
  width: 105px;
  position: absolute;
  left: 296px;
  top: 26px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: static;
    margin-bottom: 1rem;
  }
`;

const ContactContainer = styled.div`
  position: absolute;
  left: 712px;
  top: 26px;
  width: 474px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: static;
    width: 100%;
  }
`;

const ContactText = styled.p`
  color: #000000;
  font-size: 11px;
  font-weight: 600;
  line-height: 16.5px;
`;

const KaistText = styled.span`
  font-size: 10px;
  font-weight: bold;
  line-height: 16px;
  color: #000;
`;

const SocText = styled.span`
  font-size: 10px;
  font-weight: normal;
  color: #000;
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <VerticalLine />
      <SecondLine />

      <KaistLogoContainer>
        <Image
          src="/images/common/soc-logo.svg"
          alt="KAIST School of Computing"
          width={127}
          height={21}
          priority
          objectFit="contain"
          withContainer={false}
        />
      </KaistLogoContainer>

      <KraftonLogoContainer>
        <Image
          src="/images/common/krafton-logo.svg"
          alt="KRAFTON"
          width={105}
          height={18}
          priority
          objectFit="contain"
          withContainer={false}
        />
      </KraftonLogoContainer>

      <CopyrightText>ⓒ KAIST School of Computing. All Rights Reserved.</CopyrightText>

      <ContactContainer>
        <ContactText>
          수정이 필요하거나 개선할 내용이 있으면 언제든지 아래 이메일로 문의해주시면 감사하겠습니다.
          <br />
          kraftonxsoc@kaist.ac.kr
        </ContactText>
      </ContactContainer>
    </FooterContainer>
  );
};

export default Footer;
