"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React from "react";

import {
  getNavItems,
  NavItem,
} from "@krafton-soc/common/components/Header/navItems";
import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

import LanguageSwitcher from "./LanguageSwitcher";

const NavMenuWrapper = styled.div`
  width: 100%;
  background-color: ${theme.colors.white};
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 24px;

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 20px;
  }
`;

const NavText = styled(Text)`
  font-size: 24px;
  line-height: 24px;
  font-weight: ${theme.fonts.weights.bold};
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 20px;
  }
`;

const LanguageSwitcherWrapper = styled.div`
  margin-left: -40px;
  margin-bottom: 28px;
`;

const FoldableNavMenu: React.FC<{
  setIsFoldableNavMenuOpen: (isOpen: boolean) => void;
}> = ({ setIsFoldableNavMenuOpen }) => {
  const router = useRouter();
  const t = useTranslations("Header.nav");

  const navItems = getNavItems(t);

  return (
    <NavMenuWrapper>
      <Image
        src="/icons/Cancel.svg"
        alt="Cancel"
        width={24}
        height={24}
        onClick={() => setIsFoldableNavMenuOpen(false)}
        style={{ cursor: "pointer", alignSelf: "flex-end", marginTop: "24px" }}
      />
      {navItems.map((item: NavItem) => (
        <NavText key={item.href} onClick={() => router.push(item.href)}>
          {item.label}
        </NavText>
      ))}
      <LanguageSwitcherWrapper>
        <LanguageSwitcher />
      </LanguageSwitcherWrapper>
    </NavMenuWrapper>
  );
};

export default FoldableNavMenu;
