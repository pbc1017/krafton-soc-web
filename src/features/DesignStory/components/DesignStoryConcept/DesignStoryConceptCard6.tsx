import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Spacer from "@krafton-soc/common/components/Spacer";
import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const CardContainer = styled.div`
  max-width: 1285px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 250px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 100px;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    padding-left: 239px;
    box-sizing: border-box;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    margin-top: 80px;
    align-items: flex-start;
    width: 100%;
    padding-left: 0px;
    // padding-left: 239px; 는 tabletDesktop에서 상속됩니다.
    // 모바일용 패딩 조정이 필요하면 여기에 추가합니다. 예: padding-left: 20px; padding-right: 20px;
  }
`;

const CardImage = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 435px;
  aspect-ratio: 871 / 618;
  position: relative;
  max-width: 871px;

  //background-color: magenta;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 100%;
    max-width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: calc(100% - 93px);
    margin-left: 93px;
    align-self: flex-end;
  }
`;

const CardText = styled.div`
  width: 335px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: left;
  font-size: 18px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 180%;
  color: ${theme.colors.black};
  font-family: ${theme.fonts.families.pretendard};

  //background-color: green;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    width: 457px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    align-self: flex-start;
    width: 353px !important;
  }
`;

const DesignStoryConceptCard6 = () => {
  const { deviceType } = useResponsiveStore();
  const t = useTranslations("DesignStory.Concept.Card6");

  return (
    <CardContainer>
      <CardImage>
        <Image
          src={`/images/DesignStory/Concept/디자인이야기_Con9_${deviceType}.png`}
          alt="design-story-concept-card-6"
          fill
        />
      </CardImage>
      {deviceType === "desktop" && <Spacer width={24} />}
      <CardText>
        <Text>{t(`text.${deviceType}`)}</Text>
      </CardText>
    </CardContainer>
  );
};

export default DesignStoryConceptCard6;
