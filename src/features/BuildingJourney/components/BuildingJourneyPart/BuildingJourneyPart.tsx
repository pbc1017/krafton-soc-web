import styled from "@emotion/styled";

import { theme } from "@krafton-soc/common/styles/theme";

import HistoryCard from "../HistoryCard";
import { HistoryCardProps } from "../HistoryCard/HistoryCard";
import PartHeader from "./PartHeader";
import YearHeader from "./YearHeader";

const PartContainer = styled.section`
  display: flex;

  flex-direction: column;
  align-items: center;
  gap: 166px;

  width: 1067px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: max(696px, calc(696 / 744 * 100%));
    gap: 170px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: max(353px, calc(353 / 393 * 100%));
    gap: 170px;
  }
  // background-color: darkkhaki;
`;

const PartContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  gap: 80px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    gap: 120px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 100px;
  }

  // background-color: saddlebrown;
`;

const YearContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  // background-color: darkblue;
`;

const HistoryCardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  // background-color: magenta;
`;

export interface PartProps {
  part: number;
  title?: string;
  startTerm?: string;
  endTerm?: string;
  detailsByYear: {
    year: number;
    cardContents: HistoryCardProps[];
  }[];
}

const BuildingJourneyPart = ({
  part,
  title,
  startTerm,
  endTerm,
  detailsByYear,
}: PartProps) => {
  return (
    <PartContainer>
      <PartHeader
        part={part}
        title={title ?? ""}
        startTerm={startTerm ?? ""}
        endTerm={endTerm ?? ""}
      />
      <PartContentContainer>
        {detailsByYear.map(({ year, cardContents }) => (
          <YearContainer key={year}>
            <YearHeader year={year} />
            <HistoryCardContainer>
              {cardContents.map((cardContent, index) => (
                <HistoryCard key={index} {...cardContent} />
              ))}
            </HistoryCardContainer>
          </YearContainer>
        ))}
      </PartContentContainer>
    </PartContainer>
  );
};

export default BuildingJourneyPart;
