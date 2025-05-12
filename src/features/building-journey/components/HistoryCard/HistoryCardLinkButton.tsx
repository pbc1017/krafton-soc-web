"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

import { theme } from "@krafton-soc/common/styles/theme";

const HistoryCardLinkButtonImage = styled.button`
  width: 25px;
  height: 25px;
  aspect-ratio: 1/1;
  background-color: ${theme.colors.white};
`;

interface HistoryCardLinkButtonProps {
  link: string;
}

const HistoryCardLinkButton = ({ link }: HistoryCardLinkButtonProps) => {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <HistoryCardLinkButtonImage onClick={handleClick}>
      <Image src="/icons/link.svg" alt="link-button" width={25} height={25} />
    </HistoryCardLinkButtonImage>
  );
};

export default HistoryCardLinkButton;
