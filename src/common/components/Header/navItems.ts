import type { useTranslations } from "next-intl";

interface NavItem {
  label: string;
  href: string;
}

const getNavItems = (
  t: ReturnType<typeof useTranslations<"Header.nav">>,
): NavItem[] => [
  { label: t("buildingJourney"), href: "/building-journey" },
  { label: t("designStory"), href: "/design-story" },
  { label: t("positiveImpact"), href: "/positive-impact" },
];

export { getNavItems }; // 함수를 export
export type { NavItem }; // 타입도 export (필요시)
