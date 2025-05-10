"use client";

import Image from "next/image";
import { useState } from "react";

import HistoryModal from "./HistoryModal";

interface HistoryCardImageProps {
  src: string;
  alt: string;
}

const HistoryCardImage = ({ src, alt }: HistoryCardImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Image src={src} alt={alt} width={320} height={170} onClick={openModal} />
      {isModalOpen && (
        <HistoryModal onClose={closeModal} scrollable={false}>
          <Image src={src} alt={alt} width={907} height={534} />
        </HistoryModal>
      )}
    </>
  );
};

export default HistoryCardImage;

// backlog:
// 이미지 누르면 모달 뜨는 기능
