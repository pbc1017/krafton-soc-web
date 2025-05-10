"use client";

import styled from "@emotion/styled";
import Image from "next/image";
const HistoryCardModalButtonStyle = styled.div`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  background-color: yellow;
`;

interface HistoryCardModalButtonProps {
  src: string;
  alt: string;
}

const HistoryCardModalButton = ({ src, alt }: HistoryCardModalButtonProps) => {
  return (
    <HistoryCardModalButtonStyle>
      <Image src={src} alt={alt} width={739} height={1032} />
    </HistoryCardModalButtonStyle>
  );
};

export default HistoryCardModalButton;
