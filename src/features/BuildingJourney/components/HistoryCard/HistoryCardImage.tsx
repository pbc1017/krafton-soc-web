"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

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

const getThumnailImageSize = (deviceType: DeviceType) => {
  if (deviceType === "desktop") {
    return { width: 320, height: 170 };
  }
  if (deviceType === "tablet") {
    return { width: 320, height: 170 };
  }
  return { width: 353, height: 188 };
};

const getModalImageSize = (deviceType: DeviceType) => {
  if (deviceType === "desktop") {
    return { width: 907, height: 535 };
  }
  if (deviceType === "tablet") {
    return { width: 670, height: 356 };
  }
  return { width: 353, height: 188 };
};

const HistoryCardImage = ({ part, srcNumber, alt }: HistoryCardImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deviceType, isMobile } = useResponsiveStore();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const thumbnailImageSize = useMemo(
    () => getThumnailImageSize(deviceType),
    [deviceType],
  );
  const modalImageSize = useMemo(
    () => getModalImageSize(deviceType),
    [deviceType],
  );

  console.log(modalImageSize);
  return (
    <>
      <Image
        src={getImageThumbnailSrc(part, srcNumber, deviceType)}
        alt={alt}
        width={thumbnailImageSize.width}
        height={thumbnailImageSize.height}
        onClick={openModal}
        style={{ objectFit: "cover" }}
        quality={100}
      />
      {isModalOpen && (
        <HistoryModal onClose={closeModal} scrollable={false}>
          <Image
            src={getImageModalSrc(part, srcNumber, deviceType)}
            alt={alt}
            objectFit="cover"
            width={modalImageSize.width}
            height={
              part === 1 && srcNumber === 2 && isMobile
                ? 394
                : modalImageSize.height
            }
            quality={100}
          />
        </HistoryModal>
      )}
    </>
  );
};

export default HistoryCardImage;

// backlog:
// 이미지 누르면 모달 뜨는 기능
