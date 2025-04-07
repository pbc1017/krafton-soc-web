import styled from "@emotion/styled";
import React from "react";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

interface ExploreButtonProps {
  onClick: () => void;
}

const ButtonLine = styled.div`
  height: 2px;
  background-color: ${theme.colors.black};
  transition: background-color 0.2s ease;
`;

const StyledText = styled(Text)`
  font-size: 24px;
  font-weight: ${theme.fonts.weights.bold};
  line-height: 28px;
  white-space: nowrap;
  transition: color 0.2s ease;
`;

const ArrowSvg = styled.svg`
  width: 23px;
  height: 23px;

  path {
    fill: ${theme.colors.black};
    transition: fill 0.2s ease;
  }
`;

const ArrowRightIcon = () => (
  <ArrowSvg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 0L9.4125 2.0875L17.5375 10.25H0V13.25H17.5375L9.4125 21.4125L11.5 23.5L23 12L11.5 0Z" />
  </ArrowSvg>
);

const TextArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 10px;

  &:hover {
    ${StyledText} {
      color: ${theme.colors.hoverGray};
    }

    ${ButtonLine} {
      background-color: ${theme.colors.hoverGray};
    }

    ${ArrowSvg} path {
      fill: ${theme.colors.hoverGray};
    }
  }
`;

const ExploreButton: React.FC<ExploreButtonProps> = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <TextArrowContainer>
        <StyledText>Explore this story</StyledText>
        <ArrowRightIcon />
      </TextArrowContainer>
      <ButtonLine />
    </ButtonContainer>
  );
};

export default ExploreButton;
