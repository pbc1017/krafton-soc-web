import styled from "@emotion/styled";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

export interface DonnerDataType {
  name: string;
  isCompany?: boolean;
  twinBuilding?: boolean;
  isForeigner?: boolean;
}

const DonnerTableElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 176px;
  height: 63px;
`;

// 기본적인 한국인 기부자
const TableElementPerson = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 24px;
  line-height: 180%;
  font-weight: ${theme.fonts.weights.semibold};

  color: ${theme.colors.black};

  letter-spacing: 4.8px;
`;

// 외국인 기부자 (지글러 교수님)
const TableElementForeigner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 24px;
  line-height: 110%;
  font-weight: ${theme.fonts.weights.semibold};

  color: ${theme.colors.black};
`;

// 기업 기부자
const TableElementCompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
//// 기업명
const TableElementCompanyName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 24px;
  line-height: 120%;
  font-weight: ${theme.fonts.weights.semibold};

  color: ${theme.colors.black};
`;
//// (주)
const TableElementCompanyType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 15px;
  line-height: 180%;
  font-weight: ${theme.fonts.weights.semibold};

  color: ${theme.colors.black};
`;
// 트윈빌딩
const TableElementTwinBuildingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// 기부자명
const TableElementTwinBuildingName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 24px;
  line-height: 120%;
  font-weight: ${theme.fonts.weights.semibold};

  color: ${theme.colors.black};

  letter-spacing: 4.8px;
`;
// 트윈빌딩
const TableElementTwinBuildingText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 12px;
  line-height: 130%;
  font-weight: ${theme.fonts.weights.semibold};

  color: ${theme.colors.black};

  letter-spacing: 2.4px;
`;

type TableElementNameProps = {
  name: string;
};

const TableElementCompany: React.FC<TableElementNameProps> = ({ name }) => {
  return (
    <TableElementCompanyContainer>
      <TableElementCompanyType>{"(주)"}</TableElementCompanyType>
      <TableElementCompanyName>{name}</TableElementCompanyName>
    </TableElementCompanyContainer>
  );
};

const TableElementTwinBuilding: React.FC<TableElementNameProps> = ({
  name,
}) => {
  return (
    <TableElementTwinBuildingContainer>
      <TableElementTwinBuildingName>{name}</TableElementTwinBuildingName>
      <TableElementTwinBuildingText>{"트윈빌딩"}</TableElementTwinBuildingText>
    </TableElementTwinBuildingContainer>
  );
};

const DonnerTableElement: React.FC<DonnerDataType> = ({
  name,
  isCompany,
  twinBuilding,
  isForeigner,
}) => {
  const isPerson = !isCompany && !twinBuilding && !isForeigner;
  return (
    <DonnerTableElementContainer>
      {isPerson && (
        <TableElementPerson>
          <Text>{name}</Text>
        </TableElementPerson>
      )}
      {isForeigner && (
        <TableElementForeigner>
          <Text>{name}</Text>
        </TableElementForeigner>
      )}
      {isCompany && <TableElementCompany name={name} />}
      {twinBuilding && <TableElementTwinBuilding name={name} />}
    </DonnerTableElementContainer>
  );
};

export default DonnerTableElement;
