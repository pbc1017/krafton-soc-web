"use client";

import styled from "@emotion/styled";
import React from "react";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChairmanMessage: React.FC = () => {
  return (
    <ChairmanMessageContainer>
      <MessageContainer>
        <Text color={theme.colors.black} fw={theme.fonts.weights.medium}>
          Positive Influence,
          {isMobile ? "\n" : " "}
          Memories of the Journey
        </Text>
      </MessageContainer>

      <IntroductionContainer>
        <Text color={theme.colors.white} fw={theme.fonts.weights.medium}>
          Chairman Message
        </Text>
      </IntroductionContainer>
    </ChairmanMessageContainer>
  );
};

export default ChairmanMessage;
