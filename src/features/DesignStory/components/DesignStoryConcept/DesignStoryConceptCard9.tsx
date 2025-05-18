import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Spacer from "@krafton-soc/common/components/Spacer";
import Text from "@krafton-soc/common/components/Text";
import { useResponsiveStore } from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

const CardContainer = styled.section`
  max-width: 1285px;
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  margin-top: 250px;
`;

const CardLeftContainer = styled.section`
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 762px;
  min-width: 300px;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const CardLeftImage = styled.div`
  width: 100%;
  height: auto;
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

const CardRightContainer = styled.section`
  width: 432px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const CardRightTextContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
  padding-bottom: 70px;
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
`;

const CardRightText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  text-align: left;
  font-size: 18px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 180%;
  color: ${theme.colors.black};
`;

const CardRightImage = styled.div`
  width: 232px;
  height: 230px;
  position: relative;
  align-self: flex-end;
`;

const DesignStoryConceptCard9 = () => {
  const { deviceType, isDesktop } = useResponsiveStore();
  const t = useTranslations("DesignStory.Concept.Card9");

  return (
    <CardContainer>
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
      {isDesktop && <Spacer width={24} />}
      <CardRightContainer>
        <CardRightTextContainer>
          <CardRightTitle>
            <Text>{"Beyond Boundaries,\nConnecting Views"}</Text>
          </CardRightTitle>
          <CardRightText>
            <Text>{t(`text`)}</Text>
          </CardRightText>
        </CardRightTextContainer>
        <CardRightImage>
          <Image
            src={`/images/DesignStory/Concept/디자인이야기_Con14_${deviceType}.png`}
            alt="design-story-concept-card-9-2"
            fill
          />
        </CardRightImage>
      </CardRightContainer>
    </CardContainer>
  );
};

export default DesignStoryConceptCard9;
