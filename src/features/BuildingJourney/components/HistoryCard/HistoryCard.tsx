"use client";

import styled from "@emotion/styled";
import React from "react";

import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

import HistoryCardImage from "./HistoryCardImage";
import HistoryCardLinkButton from "./HistoryCardLinkButton";
import HistoryCardModalButton from "./HistoryCardModalButton";

const HistoryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  gap: 20px;
  // background-color: darkcyan;
`;

const HistoryCardBorderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.historyCardLine};
  transform: scaleY(1); // 선을 균일하게 만들기 위해 추가
`;

const HistoryCardContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  // background-color: aqua;
`;

const HistoryCardTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  overflow: visible;

  width: 653px;

  font-family: ${theme.fonts.families.pretendard};
  // background-color: red;
`;

const HistoryCardDuration = styled.div`
  width: 56px;

  font-size: 18px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 25px;
  color: ${theme.colors.black};
  // background-color: blue;
`;

const HistoryCardDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 562px;

  overflow: visible;
  // background-color: orange;
`;

const HistoryCardTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  width: 100%;

  gap: 5px;
  overflow: visible;
  // background-color: purple;
`;

const HistoryCardTitle = styled.div`
  color: ${theme.colors.black};
  font-size: 20px;
  font-weight: ${theme.fonts.weights.bold};
  line-height: 25px;
  overflow: visible;
  // background-color: pink;
`;

const HistoryCardDetail = styled.div`
  color: ${theme.colors.black};
  font-size: 15px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 25px;
  // background-color: brown;
`;

export interface HistoryCardProps {
  duration: {
    startTerm: string;
    endTerm?: string;
  };
  title: string;
  detail?: string;
  image?: {
    part: number;
    srcNumber: number;
    alt: string;
  };
  modalImage?: {
    part: number;
    filename: string;
    alt: string;
  };
  link?: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  duration,
  title,
  detail,
  image,
  modalImage,
  link,
}) => {
  const { isMobile } = useResponsiveStore();

  return (
    <HistoryCardContainer>
      <HistoryCardBorderLine />
      <HistoryCardContentContainer>
        <HistoryCardTextContainer>
          <HistoryCardDuration>
            {duration.endTerm
              ? isMobile
                ? `${duration.startTerm}\n-${duration.endTerm}`
                : `${duration.startTerm}-${duration.endTerm}`
              : duration.startTerm}
          </HistoryCardDuration>
          <HistoryCardDescriptionContainer>
            <HistoryCardTitleContainer>
              <HistoryCardTitle>
                <Text whiteSpace={isMobile ? undefined : "nowrap"}>
                  {title}
                </Text>
              </HistoryCardTitle>
              {link && <HistoryCardLinkButton link={link} />}
              {modalImage && (
                <HistoryCardModalButton
                  part={modalImage.part}
                  filename={modalImage.filename}
                  alt={modalImage.alt}
                />
              )}
            </HistoryCardTitleContainer>
            {detail && (
              <HistoryCardDetail>
                <Text>{detail}</Text>
              </HistoryCardDetail>
            )}
          </HistoryCardDescriptionContainer>
        </HistoryCardTextContainer>

        {image ? (
          <HistoryCardImage
            part={image.part}
            srcNumber={image.srcNumber}
            alt={image.alt}
          />
        ) : undefined}
      </HistoryCardContentContainer>
    </HistoryCardContainer>
  );
};

export default HistoryCard;
