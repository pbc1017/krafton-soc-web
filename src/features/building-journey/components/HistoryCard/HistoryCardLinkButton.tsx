"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
const HistoryCardLinkButtonImage = styled.button`
  width: 25px;
  height: 25px;
  aspect-ratio: 1/1;
  background-color: green;
`;

interface HistoryCardLinkButtonProps {
  link: string;
}

const HistoryCardLinkButton = ({ link }: HistoryCardLinkButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    // 페이지 이동
    console.log(link);
    router.push(link);
  };

  return (
    <HistoryCardLinkButtonImage onClick={handleClick}>
      <Image
        src="/images/building-journey/history-card-link.svg"
        alt="link-button"
        width={25}
        height={25}
      />
    </HistoryCardLinkButtonImage>
  );
};

export default HistoryCardLinkButton;
