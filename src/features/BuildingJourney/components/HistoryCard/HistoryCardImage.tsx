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

const thumbnailSize = {
  desktop: {
    width: 320,
    height: 170,
  },
  tablet: {
    width: 320,
    height: 170,
  },
  mobile: {
    width: 353,
    height: 188,
  },
};

const modalSize = {
  desktop: {
    width: 960,
    height: 510,
  },
  tablet: {
    width: 640,
    height: 340,
  },
  mobile: {
    width: 352,
    height: 187,
  },
};

const HistoryCardImage = ({ part, srcNumber, alt }: HistoryCardImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deviceType, isMobile } = useResponsiveStore();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const thumbnailImageSize = useMemo(
    () => thumbnailSize[deviceType],
    [deviceType],
  );
  const modalImageSize = useMemo(() => modalSize[deviceType], [deviceType]);

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
