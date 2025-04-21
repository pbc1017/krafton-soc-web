import styled from "@emotion/styled";

const PreparingPartContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const PartHeader = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
`;

const PreparingPart = () => {
  return (
    <PreparingPartContainer>
      <PartHeader></PartHeader>
    </PreparingPartContainer>
  );
};

export default PreparingPart;
