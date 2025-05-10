"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
const HistoryCardLinkButtonImage = styled.button`
  width: 25px;
  height: 25px;
  aspect-ratio: 1/1;
  background-color: white;
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
      <Image
        src="/images/BuildingJourney/history-card-link.svg"
        alt="link-button"
        width={25}
        height={25}
      />
    </HistoryCardLinkButtonImage>
  );
};

export default HistoryCardLinkButton;
