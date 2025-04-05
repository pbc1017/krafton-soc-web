'use client';

import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@krafton-soc/common/styles/theme';
import Image from 'next/image';
import Text from '@krafton-soc/common/components/Text';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.white};
  height: 135px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 27px;
  margin-left: 109px;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 60px;
  cursor: pointer;
`;

const CopyrightContainer = styled.div`
  margin-top: 53px;
  margin-left: 9px;
`;

const ContactContainer = styled.div`
  margin-top: 25px;
  margin-right: 109px;
`;

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LeftSection>
        <LogoContainer>
          <Image
            src="/images/common/soc-logo.svg"
            alt="KAIST School of Computing"
            width={127}
            height={21}
            priority
            objectFit="contain"
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
            onClick={() => {
              window.open('https://www.krafton.com/', '_blank');
            }}
          />
        </LogoContainer>
        <CopyrightContainer>
          <Text fs="9px" fw={theme.fonts.weights.regular} lh="11.7px">
            ⓒ KAIST School of Computing. All Rights Reserved.
          </Text>
        </CopyrightContainer>
      </LeftSection>

      <ContactContainer>
        <Text fs="11px" fw={theme.fonts.weights.semibold} lh="16.5px">
          보다 나은 서비스를 제공하기 위해 여러분의 의견을 소중히 생각합니다.
          <br />
          사이트 이용 중 불편한 점이나 수정이 필요한 내용이 있다면 언제든지 아래 이메일로 문의해
          주세요.
          <br />
          CS@kraftonxsoc.com
        </Text>
      </ContactContainer>
    </FooterContainer>
  );
};

export default Footer;
