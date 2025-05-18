"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

import { getNavItems } from "@krafton-soc/common/components/Header/navItems";
import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

import FoldableNavMenu from "./FoldableNavMenu";
import LanguageSwitcher from "./LanguageSwitcher";

const HeaderContainer = styled.header`
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.headerBorder};
  width: 100%;
  height: 72px;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  margin-left: 80px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-left: 24px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 80px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
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
  font-weight: ${({ isActive }) =>
    isActive ? theme.fonts.weights.bold : theme.fonts.weights.light};

  &:hover {
    font-weight: ${theme.fonts.weights.bold};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${({ isActive }) => (isActive ? "100%" : "0")};
    height: 2px;
    background-color: ${theme.colors.black};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const Header: React.FC = () => {
  const t = useTranslations("Header.nav");
  const pathname = usePathname();
  const router = useRouter();
  const isDesktop = useResponsiveStore(state => state.isDesktop);
  const isMobile = useResponsiveStore(state => state.isMobile);
  const [isFoldableNavMenuOpen, setIsFoldableNavMenuOpen] = useState(false);

  const navItems = getNavItems(t);

  return (
    <>
      {isDesktop || !isFoldableNavMenuOpen ? (
        <HeaderContainer>
          <LogoContainer>
            <Image
              src="/images/common/krafton-soc-logo.svg"
              alt="KRAFTON X SoC"
              width={isMobile ? 140 : 192}
              height={isMobile ? 13 : 19}
              objectFit="contain"
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/")}
            />
            <Image
              src="/images/common/soc-logo.svg"
              alt="KAIST School of Computing"
              width={isMobile ? 98 : 127}
              height={isMobile ? 15 : 21}
              objectFit="contain"
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://cs.kaist.ac.kr/", "_blank")}
            />
          </LogoContainer>

          {isDesktop ? (
            <NavContainer>
              {navItems.map(item => (
                <NavLink
                  key={item.href}
                  isActive={pathname === item.href}
                  onClick={() => router.push(item.href)}
                >
                  <Text
                    color={theme.colors.black}
                    fs="16px"
                    lh="24px"
                    style={{ letterSpacing: "0.5px" }}
                  >
                    {item.label}
                  </Text>
                </NavLink>
              ))}
              <LanguageSwitcher />
            </NavContainer>
          ) : (
            <Image
              src="/icons/Hamburger.svg"
              alt="Hamburger"
              width={24}
              height={24}
              style={{ cursor: "pointer", marginRight: "24px" }}
              onClick={() => setIsFoldableNavMenuOpen(!isFoldableNavMenuOpen)}
            />
          )}
        </HeaderContainer>
      ) : (
        <FoldableNavMenu setIsFoldableNavMenuOpen={setIsFoldableNavMenuOpen} />
      )}
    </>
  );
};

export default Header;
