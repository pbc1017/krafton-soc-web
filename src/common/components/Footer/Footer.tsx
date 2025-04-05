'use client';

import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@krafton-soc/common/styles/theme';
import Image from 'next/image';
import Text from '@krafton-soc/common/components/Text';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.white};
  height: 135px;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    height: auto;
    padding: 2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const CopyrightContainer = styled.div`
  position: absolute;
  left: 118px;
  top: 100px;
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
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

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
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

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    position: static;
    margin-bottom: 1rem;
  }
`;

const ContactContainer = styled.div`
  position: absolute;
  left: 712px;
  top: 26px;
  width: 474px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    position: static;
    width: 100%;
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <KaistLogoContainer>
        <Image
          src="/images/common/soc-logo.svg"
          alt="KAIST School of Computing"
          width={127}
          height={21}
          priority
          objectFit="contain"
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
        />
      </KraftonLogoContainer>

      <CopyrightContainer>
        <Text color={theme.colors.black} fs="9px" fw={theme.fonts.weights.regular} lh="11.7px">
          ⓒ KAIST School of Computing. All Rights Reserved.
        </Text>
      </CopyrightContainer>

      <ContactContainer>
        <Text color={theme.colors.black} fs="11px" fw={theme.fonts.weights.semibold} lh="16.5px">
          수정이 필요하거나 개선할 내용이 있으면 언제든지 아래 이메일로 문의해주시면 감사하겠습니다.
          <br />
          kraftonxsoc@kaist.ac.kr
        </Text>
      </ContactContainer>
    </FooterContainer>
  );
};

export default Footer;
