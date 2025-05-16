"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { Locale, useLocale } from "next-intl";
import { useState } from "react";

import {
  DeviceType,
  useResponsiveStore,
} from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

import HistoryModal from "./HistoryModal";

const HistoryCardModalButtonStyle = styled.div`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  background-color: ${theme.colors.white};
`;

interface HistoryCardModalButtonProps {
  part: number;
  filename: string;
  alt: string;
}

const getImageSrc = (
  part: number,
  filename: string,
  locale: Locale,
  deviceType: DeviceType,
) =>
  `/images/BuildingJourney/modal/Part${part}_${filename}_${locale === "ko" ? "KR" : "EN"}_${deviceType}.png`;

const HistoryCardModalButton = ({
  part,
  filename,
  alt,
}: HistoryCardModalButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const locale = useLocale() as Locale;
  const { deviceType } = useResponsiveStore();

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
          <Image
            src={getImageSrc(part, filename, locale, deviceType)}
            alt={alt}
            width={739}
            height={1032}
          />
        </HistoryModal>
      )}
    </>
  );
};

export default HistoryCardModalButton;
