"use client";

import styled from "@emotion/styled";

import { theme } from "@krafton-soc/common/styles/theme";
import { donnerData } from "@krafton-soc/features/PositiveImpact/consts/donnerItems";

import DonnerTableElement from "./PositiveImpactDonnerElement";

const DonnerTableContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 0px;
  column-gap: 15px;

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    column-gap: 0;
  }
`;

const DonnerTable: React.FC = () => {
  return (
    <DonnerTableContainer>
      {donnerData.map(item => (
        <DonnerTableElement key={item.name} {...item} />
      ))}
    </DonnerTableContainer>
  );
};

export default DonnerTable;
