"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";

import HistoryModal from "./HistoryModal";
const HistoryCardModalButtonStyle = styled.div`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  background-color: white;
`;

interface HistoryCardModalButtonProps {
  src: string;
  alt: string;
}

const HistoryCardModalButton = ({ src, alt }: HistoryCardModalButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <HistoryCardModalButtonStyle onClick={openModal}>
        <Image
          src="/icons/modal-button.svg"
          alt="history-card-modal-button"
          width={22}
          height={22}
        />
      </HistoryCardModalButtonStyle>
      {isModalOpen && (
        <HistoryModal onClose={closeModal}>
          <Image src={src} alt={alt} width={739} height={1032} />
        </HistoryModal>
      )}
    </>
  );
};

export default HistoryCardModalButton;
