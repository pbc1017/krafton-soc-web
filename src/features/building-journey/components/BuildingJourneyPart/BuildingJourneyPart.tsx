import styled from "@emotion/styled";

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
  background-color: darkkhaki;
`;

const PartContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  width: 100%;

  background-color: saddlebrown;
`;

const YearContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  background-color: darkblue;
`;

const HistoryCardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  background-color: magenta;
`;

interface PartProps {
  part: number;
  title: string;
  startTerm: string;
  endTerm: string;
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
        title={title}
        startTerm={startTerm}
        endTerm={endTerm}
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
