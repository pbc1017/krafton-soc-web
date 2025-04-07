"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import React, { useTransition } from "react";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";
import { setUserLocale } from "@krafton-soc/i18n/actions";
import { Locale } from "@krafton-soc/i18n/config";

const LanguageToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 40px;
`;

const LanguageDivider = styled.div`
  width: 1px;
  height: 9px;
  background-color: ${theme.colors.black};
`;

const LanguageText = styled(Text)`
  color: ${theme.colors.black};
  font-size: 12px;
  line-height: 24px;
  cursor: pointer;
  min-width: 20px;
  text-align: center;

  font-weight: ${theme.fonts.weights.light};

  &:hover {
    font-weight: ${theme.fonts.weights.bold};
  }
`;

interface LanguageSwitcherProps {
  onLocaleChange?: () => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  onLocaleChange,
}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentLocale = useLocale() as Locale;

  const changeLocale = (nextLocale: Locale) => {
    if (onLocaleChange) {
      onLocaleChange();
    }

    if (currentLocale === nextLocale || isPending) {
      return;
    }

    startTransition(async () => {
      await setUserLocale(nextLocale);
      router.refresh();
    });
  };

  return (
    <LanguageToggle>
      <LanguageText onClick={() => changeLocale("ko")}>KR</LanguageText>
      <LanguageDivider />
      <LanguageText onClick={() => changeLocale("en")}>EN</LanguageText>
    </LanguageToggle>
  );
};

export default LanguageSwitcher;
