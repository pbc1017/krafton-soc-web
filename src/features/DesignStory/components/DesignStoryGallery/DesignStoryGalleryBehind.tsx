import styled from "@emotion/styled";

import Text from "@krafton-soc/common/components/Text";
import { theme } from "@krafton-soc/common/styles/theme";

const BehindContainer = styled.div`
  margin-top: 130px;
  width: 173px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 23px;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
  }
`;

const BehindTitle = styled.div`
  width: 100%;

  text-align: left;
  font-size: 20px;
  line-height: 100%;
  font-weight: ${theme.fonts.weights.semibold};
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    font-size: 20px;
  }
`;

const BehindMemberCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 17px;
`;

const BehindMemberCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BehindMemberCardTitle = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: ${theme.fonts.weights.bold};
  line-height: 130%;
  color: ${theme.colors.black};
`;

const BehindMemberCardName = styled.div`
  width: 100%;
  font-size: 13px;
  font-weight: ${theme.fonts.weights.regular};
  line-height: 130%;
  color: ${theme.colors.black};
`;

type BehindMemberData = {
  title: string;
  members: string[];
};

const behindMemberData: BehindMemberData[] = [
  {
    title: "Head",
    members: ["Sukyoung Ryu"],
  },
  {
    title: "Administration",
    members: ["Myounghwan Lim", "Philsoo Shin"],
  },
  {
    title: "Creative Director",
    members: ["Kyungwoo Kim"],
  },
  {
    title: "Brand Design",
    members: ["Miyoung Kim"],
  },
  {
    title: "Interior Design",
    members: ["Jisoo Yim", "Jongseok Seo"],
  },
  {
    title: "Website Build",
    members: ["Byeongchan Park", "Hyukwon Kwon", "Yena Kim"],
  },
];

const BehindMemberComponent: React.FC<BehindMemberData> = ({
  title,
  members,
}) => {
  return (
    <BehindMemberCard>
      <BehindMemberCardTitle>
        <Text>{title}</Text>
      </BehindMemberCardTitle>
      {members.map((member, index) => (
        <BehindMemberCardName key={index}>
          <Text>{member}</Text>
        </BehindMemberCardName>
      ))}
    </BehindMemberCard>
  );
};

const DesignStoryGalleryBehind = () => {
  return (
    <BehindContainer>
      <BehindTitle>
        <Text>{"1F Lounge Space"}</Text>
      </BehindTitle>
      <BehindMemberCardContainer>
        {behindMemberData.map((data, index) => (
          <BehindMemberComponent {...data} key={index} />
        ))}
      </BehindMemberCardContainer>
    </BehindContainer>
  );
};

export default DesignStoryGalleryBehind;
