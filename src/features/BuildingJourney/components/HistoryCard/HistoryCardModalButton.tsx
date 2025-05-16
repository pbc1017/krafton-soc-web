"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { Locale, useLocale } from "next-intl";
import { useMemo, useState } from "react";

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

type ModalNumber = 1 | 2 | 3 | 4;

export interface HistoryCardModalButtonProps {
  part: number;
  modalNumber: ModalNumber;
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

type ModalImageSize = {
  width: number;
  height: number;
};

const modalImageSize: Record<
  ModalNumber,
  Record<Locale, Record<DeviceType, ModalImageSize>>
> = {
  1: {
    ko: {
      desktop: {
        width: 740,
        height: 1033,
      },
      tablet: {
        width: 740,
        height: 1033,
      },
      mobile: {
        width: 350,
        height: 1277,
      },
    },
    en: {
      desktop: {
        width: 740,
        height: 1033,
      },
      tablet: {
        width: 740,
        height: 1033,
      },
      mobile: {
        width: 350,
        height: 1438,
      },
    },
  },
  2: {
    ko: {
      desktop: {
        width: 740,
        height: 1033,
      },
      tablet: {
        width: 740,
        height: 1033,
      },
      mobile: {
        width: 350,
        height: 1501,
      },
    },
    en: {
      desktop: {
        width: 740,
        height: 1033,
      },
      tablet: {
        width: 740,
        height: 1033,
      },
      mobile: {
        width: 350,
        height: 1943,
      },
    },
  },
  3: {
    ko: {
      desktop: {
        width: 740,
        height: 1033,
      },
      tablet: {
        width: 740,
        height: 1033,
      },
      mobile: {
        width: 350,
        height: 814,
      },
    },
    en: {
      desktop: {
        width: 740,
        height: 1033,
      },
      tablet: {
        width: 740,
        height: 1033,
      },
      mobile: {
        width: 350,
        height: 1064,
      },
    },
  },
  4: {
    ko: {
      desktop: {
        width: 740,
        height: 1033,
      },
      tablet: {
        width: 740,
        height: 1033,
      },
      mobile: {
        width: 350,
        height: 1164,
      },
    },
    en: {
      desktop: {
        width: 740,
        height: 1033,
      },
      tablet: {
        width: 740,
        height: 1033,
      },
      mobile: {
        width: 350,
        height: 1455,
      },
    },
  },
};

const getModalImageSize = (
  modalNumber: ModalNumber,
  locale: Locale,
  deviceType: DeviceType,
  windowWidth: number,
) => {
  const size = modalImageSize[modalNumber][locale][deviceType];
  return {
    width: windowWidth * 0.85,
    height: ((windowWidth * 0.85) / size.width) * size.height,
  };
};
const HistoryCardModalButton = ({
  part,
  modalNumber,
  filename,
  alt,
}: HistoryCardModalButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const locale = useLocale() as Locale;
  const { deviceType, windowWidth } = useResponsiveStore();

  const { width, height } = useMemo(
    () => getModalImageSize(modalNumber, locale, deviceType, windowWidth),
    [modalNumber, locale, deviceType, windowWidth],
  );

  console.log(width, height);

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
            width={width}
            height={height}
          />
        </HistoryModal>
      )}
    </>
  );
};

export default HistoryCardModalButton;
