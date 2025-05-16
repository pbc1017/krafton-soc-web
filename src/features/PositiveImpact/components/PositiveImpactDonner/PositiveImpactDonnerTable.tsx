"use client";

import styled from "@emotion/styled";

import { theme } from "@krafton-soc/common/styles/theme";

import DonnerTableElement, {
  DonnerDataType,
} from "./PositiveImpactDonnerElement";

const donnerData: DonnerDataType[] = [
  {
    name: "강병훈",
  },
  {
    name: "강성원",
  },
  {
    name: "강우석",
  },
  {
    name: "강지훈",
  },
  {
    name: "권승완",
  },
  {
    name: "김건우",
  },
  {
    name: "김명호",
  },
  {
    name: "김민수",
  },
  {
    name: "김범준",
  },
  {
    name: "김상균",
  },
  {
    name: "김상현",
  },
  {
    name: "김성민",
  },
  {
    name: "김성실",
  },
  {
    name: "김성용",
  },
  {
    name: "김시환",
  },
  {
    name: "김연재",
  },
  {
    name: "김정헌",
  },
  {
    name: "김찬수",
  },
  {
    name: "김창한",
  },
  {
    name: "류석영",
  },
  {
    name: "류성중",
  },
  {
    name: "마재의",
  },
  {
    name: "명노준",
  },
  {
    name: "박경도",
  },
  {
    name: "박문형",
  },
  {
    name: "박병찬",
  },
  {
    name: "박수찬",
  },
  {
    name: "박종철",
  },
  {
    name: "박준정",
  },
  {
    name: "박준하",
  },
  {
    name: "박진석",
  },
  {
    name: "변현찬",
  },
  {
    name: "서기원",
  },
  {
    name: "서하연",
  },
  {
    name: "손수엘",
  },
  {
    name: "신승우",
    twinBuilding: true,
  },
  {
    name: "심재한",
  },
  {
    name: "양재헌",
  },
  {
    name: "양홍석",
  },
  {
    name: "엘리스",
    isCompany: true,
  },
  {
    name: "오진석",
  },
  {
    name: "오혜연",
  },
  {
    name: "원대영",
  },
  {
    name: "유  신",
  },
  {
    name: "윤성의",
  },
  {
    name: "이상헌",
  },
  {
    name: "이성민",
  },
  {
    name: "이성원",
  },
  {
    name: "이승민",
  },
  {
    name: "이의진",
  },
  {
    name: "이재길",
  },
  {
    name: "이준성",
  },
  {
    name: "이준수",
  },
  {
    name: "이창원",
  },
  {
    name: "이창호",
  },
  {
    name: "이해찬",
  },
  {
    name: "장병규",
  },
  {
    name: "정기량",
  },
  {
    name: "정문규",
  },
  {
    name: "정성윤",
  },
  {
    name: "정우재",
  },
  {
    name: "조웅희",
  },
  {
    name: "조준희",
  },
  {
    name: "채정훈",
  },
  {
    name: "최기선",
  },
  {
    name: "최낙현",
  },
  {
    name: "최윤묵",
  },
  {
    name: "최호진",
  },
  {
    name: "코어다트랩",
    isCompany: true,
  },
  {
    name: "크래프톤",
    isCompany: true,
  },
  {
    name: "한동훈",
  },
  {
    name: "허기홍",
  },
  {
    name: "허재석",
  },
  {
    name: "홍성진",
  },
  {
    name: "황재영",
  },
  {
    name: "황태현",
  },
  {
    name: "Martin Ziegler",
    isForeigner: true,
  },
];

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
