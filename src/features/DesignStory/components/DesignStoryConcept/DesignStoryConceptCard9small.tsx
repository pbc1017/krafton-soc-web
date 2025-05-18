import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const CardContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 250px;
  gap: 80px;
  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    margin-top: 160px;
  }
`;

const CardLeftContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: flex-end;

  gap: 10px;
`;

const CardLeftImage = styled.div`
  width: 100%;
  aspect-ratio: 762 / 469;
  position: relative;
`;

const CardLeftImageCaption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  text-align: left;
  font-size: 14px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 120%;
  color: ${theme.colors.black};
`;

const CardTextContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 60px;
`;

const CardRightTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  text-align: left;
  font-size: 42px;
  font-weight: ${theme.fonts.weights.medium};
  line-height: 120%;
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 32px;
  }
`;

const CardRightText = styled.div`
  width: 392px;
  display: flex;
  flex-direction: column;

  text-align: left;
  font-size: 18px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 180%;
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    width: 353px;
    font-size: 16px;
  }
`;

const CardRightImage = styled.div`
  width: 232px;
  aspect-ratio: 232 / 258;
  position: relative;
`;

const DesignStoryConceptCard9small = () => {
  const { deviceType } = useResponsiveStore();
  const t = useTranslations("DesignStory.Concept.Card9");

  return (
    <CardContainer>
      <CardTextContainer>
        <CardRightTitle>
          <Text>{"Beyond Boundaries,\nConnecting Views"}</Text>
        </CardRightTitle>
        <CardRightText>
          <Text>{t(`text`)}</Text>
        </CardRightText>
      </CardTextContainer>
      <CardLeftContainer>
        <CardLeftImage>
          <Image
            src={`/images/DesignStory/Concept/디자인이야기_Con13_${deviceType}.png`}
            alt="design-story-concept-card-9"
            fill
          />
        </CardLeftImage>
        <CardLeftImageCaption>
          <Text>{"Along, A-long Table and Concrete Wall"}</Text>
        </CardLeftImageCaption>
      </CardLeftContainer>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <CardRightImage>
          <Image
            src={`/images/DesignStory/Concept/디자인이야기_Con14_${deviceType}.png`}
            alt="design-story-concept-card-9-2"
            fill
          />
        </CardRightImage>
      </div>
    </CardContainer>
  );
};

export default DesignStoryConceptCard9small;
