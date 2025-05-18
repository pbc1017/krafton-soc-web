import styled from "@emotion/styled";
import { useTranslations } from "next-intl";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const ChiefContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
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

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 32px;
    font-weight: ${theme.fonts.weights.regular};
  }
`;

const MessageContent = styled.div`
  margin-top: 35px;
  width: 769px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 18px;
  line-height: 38px;
  font-weight: ${theme.fonts.weights.regular};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 37px;
    line-height: 35px;
    width: 642px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: 32px;
    font-size: 16px;
    line-height: 30px;
    width: 309px;
  }
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

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 40px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 14px;
    line-height: normal;
  }
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

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 0px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: 8px;
    font-size: 10px;
    line-height: normal;
  }
`;

const PositiveImpactMessageChief = () => {
  const t = useTranslations("PositiveImpact.Message.ChiefMessage");

  return (
    <ChiefContainer>
      <MessageTitle>
        <Text>{t("title")}</Text>
      </MessageTitle>
      <MessageContent>
        <Text>{t(`content`)}</Text>
      </MessageContent>
      <ChiefIntroduction>
        <Text>{t(`introduction`)}</Text>
      </ChiefIntroduction>
      <MessageDate>
        <Text>{t("date")}</Text>
      </MessageDate>
    </ChiefContainer>
  );
};

export default PositiveImpactMessageChief;
