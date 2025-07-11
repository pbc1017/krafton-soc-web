import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslations } from "next-intl";

import DividerLine from "@krafton-soc/common/components/DividerLine";
import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

import PositiveImpactMessageChief from "./PositiveImpactMessageChief";

const MessageContainer = styled.section`
  width: 1066px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: calc(100% * 690 / 744);
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: calc(100% * 353 / 393);
  }
`;

const MessageCardListContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 135px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    gap: 70px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 60px;
  }
`;

interface MessageCardDirectionContainerProps {
  isReversed: boolean;
}

const MessageCardDirectionContainer = styled.div<MessageCardDirectionContainerProps>`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: ${({ isReversed }) =>
    isReversed ? "flex-end" : "flex-start"};
`;

const MessageCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
    width: 312px;
  }
`;

const MessageCardImage = styled.div`
  width: 412px;
  height: 350px;
  position: relative;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: max(312px, 50%);
    aspect-ratio: 312 / 265;
    height: auto;
  }
`;

const MessageCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 35px;
`;

const MessageCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  text-align: left;
  font-size: 40px;
  line-height: 56px;
  font-weight: ${theme.fonts.weights.semibold};
  letter-spacing: 0.47px;

  width: 569px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 26px;
    line-height: 34px;
    width: 309px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 24px;
    line-height: 32px;
    width: 285px;
  }
`;

const MessageCardIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  text-align: left;
  font-size: 18px;
  line-height: 36px;
  font-weight: ${theme.fonts.weights.regular};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    font-size: 14px;
    line-height: 35.71px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 10px;
    line-height: 14px;
  }
`;

const MessageIntroduction = styled.div`
  margin-top: 73px;
  width: 366px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  text-align: left;
  font-size: 14px;
  line-height: 130%;
  font-weight: ${theme.fonts.weights.regular};
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 82px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: 72px;
    font-size: 10px;
  }
`;

const PositiveImpactMessage = () => {
  const { deviceType, isMobile } = useResponsiveStore();
  const t = useTranslations("PositiveImpact.Message");
  return (
    <MessageContainer>
      <PositiveImpactMessageChief />
      <DividerLine
        marginTop={{
          desktop: 100,
          tablet: 40,
          mobile: 60,
        }}
        marginBottom={{
          desktop: 145,
          tablet: 120,
          mobile: 100,
        }}
      />
      <MessageCardListContainer>
        <MessageCardDirectionContainer isReversed={false}>
          <MessageCardContainer>
            <MessageCardImage>
              <Image
                src={`/images/PositiveImpact/선한영향력의길_Con01_${deviceType}.png`}
                alt="card1"
                fill
                objectFit="cover"
              />
            </MessageCardImage>
            <MessageCardTextContainer>
              <MessageCardContent>
                <Text>{t("Card1.content")}</Text>
              </MessageCardContent>
              <MessageCardIntroduction>
                <Text>{t("Card1.introduction")}</Text>
              </MessageCardIntroduction>
            </MessageCardTextContainer>
          </MessageCardContainer>
        </MessageCardDirectionContainer>
        <MessageCardDirectionContainer isReversed={true}>
          <MessageCardContainer>
            {!isMobile && (
              <MessageCardTextContainer>
                <MessageCardContent>
                  <Text>{t("Card2.content")}</Text>
                </MessageCardContent>
                <MessageCardIntroduction>
                  <Text>{t("Card2.introduction")}</Text>
                </MessageCardIntroduction>
              </MessageCardTextContainer>
            )}
            <MessageCardImage>
              <Image
                src={`/images/PositiveImpact/선한영향력의길_Con02_${deviceType}.png`}
                alt="card2"
                fill
                objectFit="cover"
              />
            </MessageCardImage>
            {isMobile && (
              <MessageCardTextContainer>
                <MessageCardContent>
                  <Text>{t("Card2.content")}</Text>
                </MessageCardContent>
                <MessageCardIntroduction>
                  <Text>{t("Card2.introduction")}</Text>
                </MessageCardIntroduction>
              </MessageCardTextContainer>
            )}
          </MessageCardContainer>
        </MessageCardDirectionContainer>
      </MessageCardListContainer>
      <MessageIntroduction>
        <Text>{t("Introduction")}</Text>
      </MessageIntroduction>
      <DividerLine
        marginTop={{
          desktop: 44,
          tablet: 21,
          mobile: 10,
        }}
        marginBottom={{
          desktop: 145,
          tablet: 120,
          mobile: 100,
        }}
      />
    </MessageContainer>
  );
};

export default PositiveImpactMessage;
