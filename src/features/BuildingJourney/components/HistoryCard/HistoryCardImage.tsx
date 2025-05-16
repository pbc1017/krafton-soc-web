"use client";

import Image from "next/image";
import { useState } from "react";

import {
  DeviceType,
  useResponsiveStore,
} from "@krafton-soc/common/stores/useResponsiveStore";

import HistoryModal from "./HistoryModal";

interface HistoryCardImageProps {
  part: number;
  srcNumber: number;
  alt: string;
}

const getImageThumbnailSrc = (
  part: number,
  imageNumber: number,
  deviceType: DeviceType,
) =>
  `/images/BuildingJourney/part${part}/Par${part}_섬네일${String(imageNumber).padStart(2, "0")}_${deviceType}.png`;

const getImageModalSrc = (
  part: number,
  imageNumber: number,
  deviceType: DeviceType,
) =>
  `/images/BuildingJourney/part${part}/Par${part}_${String(imageNumber).padStart(2, "0")}_${deviceType}.png`;

const HistoryCardImage = ({ part, srcNumber, alt }: HistoryCardImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deviceType } = useResponsiveStore();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Image
        src={getImageThumbnailSrc(part, srcNumber, deviceType)}
        alt={alt}
        width={320}
        height={170}
        onClick={openModal}
      />
      {isModalOpen && (
        <HistoryModal onClose={closeModal} scrollable={false}>
          <Image
            src={getImageModalSrc(part, srcNumber, deviceType)}
            alt={alt}
            width={907}
            height={534}
          />
        </HistoryModal>
      )}
    </>
  );
};

export default HistoryCardImage;

// backlog:
// 이미지 누르면 모달 뜨는 기능
