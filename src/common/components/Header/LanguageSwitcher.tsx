'use client';

import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@krafton-soc/common/styles/theme';
import Text from '@krafton-soc/common/components/Text';

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

  font-weight: ${theme.fonts.weights.light};

  &:hover {
    font-weight: ${theme.fonts.weights.bold};
  }
`;

const LanguageSwitcher: React.FC = () => {
  return (
    <LanguageToggle>
      <LanguageText>KR</LanguageText>
      <LanguageDivider />
      <LanguageText>EN</LanguageText>
    </LanguageToggle>
  );
};

export default LanguageSwitcher;
