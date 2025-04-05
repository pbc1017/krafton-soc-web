'use client';

import React from 'react';
import styled from '@emotion/styled';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { theme } from '@krafton-soc/styles/theme';
import Text from '@krafton-soc/components/Text';
import LanguageSwitcher from './LanguageSwitcher';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: '건립의 여정', href: '/building-journey' },
  { label: '디자인 이야기', href: '/design-story' },
  { label: '선한 영향력의 길', href: '/positive-impact' },
];

const HeaderContainer = styled.header`
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.headerBorder};
  width: 100%;
  height: 72px;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  margin-left: 80px;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  margin-right: 80px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  width: 160px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.fonts.weights.light};

  &:hover {
    font-weight: ${theme.fonts.weights.bold};
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 2px;
    background-color: ${theme.colors.black};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <HeaderContainer>
      <LogoContainer onClick={() => router.push('/')}>
        <Image
          src="/images/common/krafton-soc-logo.svg"
          alt="KRAFTON X SoC"
          width={192}
          height={19}
          priority
          objectFit="contain"
        />
        <Image
          src="/images/common/soc-logo.svg"
          alt="KAIST School of Computing"
          width={127}
          height={21}
          priority
          objectFit="contain"
        />
      </LogoContainer>

      <NavContainer>
        {navItems.map((item) => (
          <NavLink key={item.href} isActive={pathname === item.href}>
            <Text
              color={theme.colors.black}
              fs="16px"
              lh="24px"
              style={{
                letterSpacing: '0.5px',
                textAlign: 'center',
              }}
            >
              {item.label}
            </Text>
          </NavLink>
        ))}
        <LanguageSwitcher />
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
