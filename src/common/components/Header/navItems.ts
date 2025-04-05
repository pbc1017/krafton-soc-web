interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: '건립의 여정', href: '/building-journey' },
  { label: '디자인 이야기', href: '/design-story' },
  { label: '선한 영향력의 길', href: '/positive-impact' },
];

export { navItems };
