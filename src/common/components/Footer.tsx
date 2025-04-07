'use client';

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '@krafton-soc/common/styles/theme';
import Image from 'next/image';
import Text from '@krafton-soc/common/components/Text';

const FooterContainer = styled.footer`
  height: 135px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    height: 210px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    height: 190px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 60px;
  margin-left: 109px;
  margin-top: 27px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-left: 24px;
    margin-top: 22px;
    gap: 36px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-left: 20px;
    margin-top: 22px;
    gap: 25px;
  }
`;

const CopyrightContainer = styled.div`
  margin-bottom: 22px;
  margin-left: 118px;
  font-size: 9px;
  line-height: 12px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-left: 24px;
    margin-bottom: 16px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-left: 20px;
    font-size: 8px;
    line-height: 10.4px;
  }
`;

const ContactContainer = styled.div`
  margin-top: 25px;
  margin-right: 109px;
  font-size: 12px;
  line-height: 18px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 0px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 10px;
    line-height: 15px;
  }
`;

const DividerLine = styled.div`
  margin: 24px 20px;
  height: 1px;
  background-color: ${theme.colors.dividerLine};

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: 13px;
  }
`;

export const Footer: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > parseInt(theme.breakpoints.tabletDesktop));
      setIsMobile(window.innerWidth <= parseInt(theme.breakpoints.mobileTablet));
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <FooterContainer>
      <ContentWrapper>
        <LogoContainer>
          <Image
            src="/images/common/soc-logo.svg"
            alt="KAIST School of Computing"
            width={127}
            height={21}
            priority
            objectFit="contain"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open('https://cs.kaist.ac.kr/', '_blank');
            }}
          />
          <Image
            src="/images/common/krafton-logo.svg"
            alt="KRAFTON"
            width={105}
            height={18}
            priority
            objectFit="contain"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open('https://www.krafton.com/', '_blank');
            }}
          />
        </LogoContainer>
        {!isDesktop && <DividerLine />}
        <ContactContainer>
          <Text fw={theme.fonts.weights.semibold}>
            수정이 필요하거나 개선할 내용이 있으면 {isMobile ? '\n' : ' '}언제든지 아래 이메일로
            문의해주시면 감사하겠습니다.
            <br />
            kraftonxsoc@kaist.ac.kr
          </Text>
        </ContactContainer>
      </ContentWrapper>
      <CopyrightContainer>
        <Text fw={theme.fonts.weights.regular} ff={theme.fonts.families.abeezee}>
          ⓒ KAIST School of Computing. All Rights Reserved.
        </Text>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
