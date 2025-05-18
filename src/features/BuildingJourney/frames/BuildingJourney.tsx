"use client";

import styled from "@emotion/styled";
import { useTranslations } from "next-intl";

// import { useCallback } from "react"; // useCallback은 더 이상 사용되지 않습니다.
import { theme } from "@krafton-soc/common/styles/theme";
import BuildingJourneyBanner from "@krafton-soc/features/BuildingJourney/components/BuildingJourneyBanner";
import BuildingJourneyPart, {
  PartProps,
} from "@krafton-soc/features/BuildingJourney/components/BuildingJourneyPart/BuildingJourneyPart";
import { generatePartContents } from "@krafton-soc/features/BuildingJourney/consts/partItems"; // 경로 재확인

const BuildingJourneyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 333px;

  margin-bottom: 130px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    gap: 223px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 200px;
  }
`;

const PartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  gap: 170px;
`;

const BuildingJourney: React.FC = () => {
  const t = useTranslations("BuildingJourney.Parts");

  const partContents = generatePartContents(t);

  return (
    <BuildingJourneyContainer>
      <BuildingJourneyBanner />

      <PartContainer>
        {partContents.map((part: PartProps) => (
          <BuildingJourneyPart key={part.part} {...part} />
        ))}
      </PartContainer>
    </BuildingJourneyContainer>
  );
};

export default BuildingJourney;
