"use client";

import Image from "next/image";

interface HistoryCardImageProps {
  src: string;
  alt: string;
}

const HistoryCardImage = ({ src, alt }: HistoryCardImageProps) => {
  return <Image src={src} alt={alt} width={320} height={170} />;
};

export default HistoryCardImage;

// backlog:
// 이미지 누르면 모달 뜨는 기능
