import styled from "@emotion/styled";

import PartHeader from "../PartHeader";

const PreparingPartContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const PreparingPart = () => {
  return (
    <PreparingPartContainer>
      <PartHeader
        part={1}
        title="증축 준비"
        startTerm="2020.08"
        endTerm="2021.05"
      />
    </PreparingPartContainer>
  );
};

export default PreparingPart;
