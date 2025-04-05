'use client';

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { theme } from '@krafton-soc/styles/theme';
import { usePathname } from 'next/navigation';
import { Image } from '@krafton-soc/components/common/Image';

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
  background-color: #ffffff;
  border-bottom: 1px solid #f5f5f5;
  height: 72px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const KraftonXSoc = styled.div`
  position: relative;
  height: 19px;
  width: 192px;
`;

const KaistSoC = styled.div`
  position: relative;
  height: 21px;
  width: 127px;
  margin-left: 1rem;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled.a<{ isActive: boolean }>`
  font-family: 'Pretendard-Light', sans-serif;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  cursor: pointer;
  white-space: nowrap;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 2px;
    background-color: ${theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const LanguageToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 2rem;
`;

const LanguageText = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: #000000;
  cursor: pointer;
`;

const LanguageDivider = styled.div`
  width: 1px;
  height: 9px;
  background-color: #000000;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link href="/">
          <KraftonXSoc>
            <Image
              src="/images/common/krafton-soc-logo.svg"
              alt="KRAFTON X SoC"
              width={192}
              height={19}
              priority
              objectFit="contain"
              withContainer={false}
            />
          </KraftonXSoc>
        </Link>

        <Link href="/">
          <KaistSoC>
            <Image
              src="/images/common/soc-logo.svg"
              alt="KAIST School of Computing"
              width={127}
              height={21}
              priority
              objectFit="contain"
              withContainer={false}
            />
          </KaistSoC>
        </Link>
      </LogoContainer>

      <NavContainer>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <NavLink isActive={pathname === item.href}>{item.label}</NavLink>
          </Link>
        ))}

        <LanguageToggle>
          <LanguageText>KR</LanguageText>
          <LanguageDivider />
          <LanguageText>EN</LanguageText>
        </LanguageToggle>
      </NavContainer>

      <MobileMenuButton aria-label="메뉴 열기">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 18H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </MobileMenuButton>
    </HeaderContainer>
  );
};

export default Header;
