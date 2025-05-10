"use client";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom";

import { theme } from "@krafton-soc/common/styles/theme";

// 백그라운드 그레이 스타일
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4); // 그레이 배경 색 확인 필요
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 모달 콘텐츠 스타일
const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow: scroll;
`;

// 닫기 버튼 스타일
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  color: black;
  cursor: pointer;
  transition: color 0.3s;
  flex-shrink: 0;

  &:hover {
    color: ${theme.colors.white};
  }

  img {
    filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%)
      hue-rotate(0deg) brightness(100%) contrast(100%);
  }

  &:hover img {
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
      hue-rotate(0deg) brightness(100%) contrast(100%);
  }
`;

interface HistoryModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

// 모달 컴포넌트
const HistoryModal = ({ onClose, children }: HistoryModalProps) => {
  return ReactDOM.createPortal(
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {children}
        <CloseButton onClick={onClose}>
          <Image
            src="/images/BuildingJourney/history-card-modal-close.svg"
            alt="history-card-modal-close"
            width={16}
            height={16}
          />
        </CloseButton>
      </ModalContent>
    </ModalBackground>,
    document.body, // 모달을 최상위 DOM에 렌더링
  );
};

export default HistoryModal;
