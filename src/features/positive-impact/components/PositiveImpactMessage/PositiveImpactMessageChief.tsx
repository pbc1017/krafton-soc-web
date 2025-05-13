import styled from "@emotion/styled";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const ChiefContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const MessageTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 48px;
  line-height: 52px;
  font-weight: ${theme.fonts.weights.medium};
  color: ${theme.colors.black};
`;

const MessageContent = styled.div`
  margin-top: 35px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 18px;
  line-height: 38px;
  font-weight: ${theme.fonts.weights.regular};
`;

const ChiefIntroduction = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 18px;
  line-height: 38px;
  font-weight: ${theme.fonts.weights.regular};
`;

const MessageDate = styled.div`
  margin-top: 2px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 14px;
  line-height: 32px;
  font-weight: ${theme.fonts.weights.regular};
`;

const PositiveImpactMessageChief = () => {
  return (
    <ChiefContainer>
      <MessageTitle>
        <Text>{"새로운 시작"}</Text>
      </MessageTitle>
      <MessageContent>
        <Text>{`“이 공간은 선한 영향력이 선순환하는 곳입니다. \nKRAFTON 임직원 동문들의 큰 기부를 시작으로, 점점 더 많은 졸업생과 교수, 재학생까지\n기부의 흐름이 이어지고 있습니다. 이 기부 물결의 동기는 훌륭한 교수님과 멋진 학생들의 자유롭고 개방적인\n소통, 다양한 구성원의 서로 다름이 편안하게 받아들여지는 공간, 거침없이 꿈을 꿀 수 있었던 시간에 대한 \n감사함입니다. 저희에게 그런 귀한 시간과 공간을 제공해 주신 선생님과 동료들에게 그 감사함을 갚을 수는 \n없지만, 그 대신 우리 후배들에게 감사함을 나누는, Pay It Forward, 연결의 공간입니다. \n이 공간에서 마음껏 자유로운 영혼을 펼쳐, 더 많은 사람이 행복한 세상을 위한 혁신을 만들어 가길 바랍니다.”`}</Text>
      </MessageContent>
      <ChiefIntroduction>
        <Text>{"KAIST 전산학부 동문 류석영 학부장"}</Text>
      </ChiefIntroduction>
      <MessageDate>
        <Text>{"2025. 03. 18."}</Text>
      </MessageDate>
    </ChiefContainer>
  );
};

export default PositiveImpactMessageChief;
