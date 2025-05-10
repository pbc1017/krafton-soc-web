"use client";

import styled from "@emotion/styled";

import BuildingJourneyBanner from "../components/BuildingJourneyBanner";
import BuildingJourneyPart from "../components/BuildingJourneyPart/BuildingJourneyPart";

const BuildingJourneyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 333px;
  margin-bottom: 74px;
`;

const PartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 170px;
`;

const BuildingJourney: React.FC = () => {
  return (
    <BuildingJourneyContainer>
      <BuildingJourneyBanner />
      <PartContainer>
        <BuildingJourneyPart
          part={1}
          title="증축 준비"
          startTerm="2020.08"
          endTerm="2021.05"
          detailsByYear={[
            {
              year: 2020,
              cardContents: [
                {
                  duration: {
                    startTerm: "08.07",
                  },
                  title:
                    "SW사관학교 정글 업무 협약식에서 전산학부 건물 증축의 필요성 논의",
                  image: {
                    src: "/images/BuildingJourney/part1/20200807.png",
                    alt: "SW사관학교 정글 업무 협약식 사진",
                  },
                },
                {
                  duration: {
                    startTerm: "09.21",
                    endTerm: "10.05",
                  },
                  title: "크래프톤 KAIST 기부 및 전산학부 증축 지원 논의",
                },
              ],
            },
            {
              year: 2021,
              cardContents: [
                {
                  duration: {
                    startTerm: "3월",
                  },
                  title: "류석영 교수 학부장 취임",
                  link: "https://cs.kaist.ac.kr/content?menu=134",
                  image: {
                    src: "/images/BuildingJourney/part1/20210300.png",
                    alt: "류석영 교수 학부장 취임 사진",
                  },
                },
                {
                  duration: {
                    startTerm: "01.20",
                    endTerm: "03.16",
                  },
                  title: "전산학부 증축 준비 논의",
                  detail:
                    "01.20 KAIST-KRAFTON 연계 활동 및 프로그램 추진 협의\n03.09-16 KAIST-KRAFTON 연계 활동 및 프로그램 구체화",
                },
                {
                  duration: {
                    startTerm: "04.21",
                    endTerm: "5월",
                  },
                  title: "크래프톤 KAIST 기부 관련 협의체 구성 및 논의",
                  detail:
                    "04.21 증축 기부 협의 및 약정식(MOU) 체결 추진을 위한 논의\n04.28 증축 개발 구체화, 200억 규모 1개 동 건립 계획, 약정식(MOU)을 통한 실행\n4월 증축 기부 계획 및 Matching Grant 추진 방향 논의\n5월 증축 기부 방향 확정 및 개인/매칭 구체적인 기부 규모 조율",
                },
              ],
            },
          ]}
        />
      </PartContainer>
    </BuildingJourneyContainer>
  );
};

export default BuildingJourney;
