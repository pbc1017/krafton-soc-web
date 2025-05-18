"use client";

import styled from "@emotion/styled";
import { useTranslations } from "next-intl";
import { useCallback } from "react";

import {
  DeviceType,
  useResponsiveStore,
} from "@krafton-soc/common/stores/useResponsiveStore";
import { theme } from "@krafton-soc/common/styles/theme";

import BuildingJourneyBanner from "../components/BuildingJourneyBanner";
import BuildingJourneyPart, {
  PartProps,
} from "../components/BuildingJourneyPart/BuildingJourneyPart";

const BuildingJourneyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 333px;

  margin-bottom: 130px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.tabletDesktop}) {
    gap: 223px;
  }

  @media (max-width: ${theme.breakpoints.mobileTablet}) {
    gap: 200px;
  }

  // background-color: pink;
`;

const PartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  gap: 170px;

  //background-color: orange;
`;

const getPartHeaderTitle = (
  part: number,
  deviceType: DeviceType,
  t: (key: string) => string,
) => t(`Part${part}.PartHeader.title.${deviceType}`);

const safeTranslate = (t: (key: string) => string, key: string) => {
  return t(key) === "UNDEFINED" ? undefined : t(key);
};

const getPartContent = (
  part: number,
  cardNumber: number,
  deviceType: DeviceType,
  t: (key: string) => string,
) => {
  return {
    duration: {
      startTerm: t(`Part${part}.Card${cardNumber}.duration.startTerm`),
      endTerm: safeTranslate(
        t,
        `Part${part}.Card${cardNumber}.duration.endTerm`,
      ),
    },
    title: t(`Part${part}.Card${cardNumber}.title.${deviceType}`),
    detail: safeTranslate(
      t,
      `Part${part}.Card${cardNumber}.detail.${deviceType}`,
    ),
  };
};

const BuildingJourney: React.FC = () => {
  const t = useTranslations("BuildingJourney.Parts");
  const { deviceType } = useResponsiveStore();

  const partHeaderTitle = useCallback(
    (part: number) => getPartHeaderTitle(part, deviceType, t),
    [t, deviceType],
  );

  const partContent = useCallback(
    (part: number, cardNumber: number) =>
      getPartContent(part, cardNumber, deviceType, t),
    [t, deviceType],
  );

  const partContents: PartProps[] = [
    {
      part: 1,
      title: partHeaderTitle(1),
      startTerm: "2020.08",
      endTerm: "2021.05",
      detailsByYear: [
        {
          year: 2020,
          cardContents: [
            {
              ...partContent(1, 1),
              image: {
                part: 1,
                srcNumber: 1,
                alt: "SW사관학교 정글 업무협약식에서 전산학부 건물 증축의 필요성 논의 사진",
              },
            },
            {
              ...partContent(1, 2),
            },
          ],
        },
        {
          year: 2021,
          cardContents: [
            {
              ...partContent(1, 3),
              link: "https://cs.kaist.ac.kr/content?menu=134",
              image: {
                part: 1,
                srcNumber: 2,
                alt: "류석영 교수 학부장 취임 사진",
              },
            },
            {
              ...partContent(1, 4),
            },
            {
              ...partContent(1, 5),
            },
          ],
        },
      ],
    },
    {
      part: 2,
      title: partHeaderTitle(2),
      startTerm: "2021.03",
      endTerm: "2022.04",
      detailsByYear: [
        {
          year: 2021,
          cardContents: [
            {
              ...partContent(2, 1),
              image: {
                part: 2,
                srcNumber: 1,
                alt: "데브시스터즈의 전산학부 동문 11인 기부 사진",
              },
              link: "https://cs.kaist.ac.kr/board/view?bbs_id=news&bbs_sn=9697&menu=83",
            },
            {
              ...partContent(2, 2),
              image: {
                part: 2,
                srcNumber: 2,
                alt: "학부 93학번 김범준 동문 1억 원 기부 사진",
              },
              link: "https://news.kaist.ac.kr/news/html/news/?mode=V&mng_no=13590",
            },
            {
              ...partContent(2, 3),
              image: {
                part: 2,
                srcNumber: 3,
                alt: "장병규, 김창한 등 11인, 기부 입장 표명 및 기부금 약정식 준비 사진",
              },
            },
            {
              ...partContent(2, 4),
              image: {
                part: 2,
                srcNumber: 4,
                alt: "KAIST 건설팀과 증축 실행 구체화 및 예산 논의 사진",
              },
            },
            {
              ...partContent(2, 5),
              image: {
                part: 2,
                srcNumber: 5,
                alt: "학부 95학번 서하연, 96학번 한동훈 동문 부부 2,000만 원 기부 사진",
              },
              link: "https://cs.kaist.ac.kr/board/view?bbs_id=news&bbs_sn=9680&menu=83",
            },
            {
              ...partContent(2, 6),
            },
            {
              ...partContent(2, 7),
            },
            {
              ...partContent(2, 8),
            },
            {
              ...partContent(2, 9),
              link: "https://www.kaist.ac.kr/Upload/kr/download/KAISTian_Newsletter_2021Summer_20210827.pdf",
              image: {
                part: 2,
                srcNumber: 6,
                alt: "크래프톤 & 전산학부 동문, KAIST 전산학부 기부 약정식 및 인터뷰 개최 사진",
              },
            },
            {
              ...partContent(2, 10),
              link: "https://www.mk.co.kr/news/society/9900467",
              image: {
                part: 2,
                srcNumber: 7,
                alt: "크래프톤, KAIST에 110억 원 기부 공식 발표 사진",
              },
            },
            {
              ...partContent(2, 11),
            },
            {
              ...partContent(2, 12),
              modalImage: {
                part: 2,
                modalNumber: 1,
                filename: "0626_전산학부 구성원 대상 증축기금 조성",
                alt: "전산학부 구성원 대상 증축기금 조성 사진",
              },
            },
            {
              ...partContent(2, 13),
            },
            {
              ...partContent(2, 14),
            },
            {
              ...partContent(2, 15),
            },
            {
              ...partContent(2, 16),
            },
            {
              ...partContent(2, 17),
              image: {
                part: 2,
                srcNumber: 8,
                alt: "학부 99학번 박준하 동문 1억 원 기부 사진",
              },
            },
            {
              ...partContent(2, 18),
              link: "https://news.kaist.ac.kr/news/html/news/?mode=V&mng_no=17251&skey=college&sval=%EA%B3%B5%EA%B3%BC%EB%8C%80%ED%95%99&list_s_date=&list_e_date=&GotoPage=52",
              image: {
                part: 2,
                srcNumber: 9,
                alt: "엘리스 임직원(김재원 외 3인) 3억 원 기부 사진",
              },
            },
          ],
        },
        {
          year: 2022,
          cardContents: [
            {
              ...partContent(2, 19),
              link: "https://www.yna.co.kr/view/AKR20220429053800063?input=1195m",
              image: {
                part: 2,
                srcNumber: 10,
                alt: "크래프톤 재직 동문 17인 1억 원 기부 사진",
              },
            },
          ],
        },
      ],
    },
    {
      part: 3,
      title: partHeaderTitle(3),
      startTerm: "2021.12",
      endTerm: "2023.04",
      detailsByYear: [
        {
          year: 2021,
          cardContents: [
            {
              ...partContent(3, 1),
            },
          ],
        },
        {
          year: 2022,
          cardContents: [
            {
              ...partContent(3, 2),
              modalImage: {
                part: 3,
                modalNumber: 2,
                filename:
                  "0316_전산학부 증축 공사 실행을 위한 설계 공모 개최 및 확정",
                alt: "전산학부 증축 공사 실행을 위한 설계 공모 개최 및 확정 사진",
              },
            },
            {
              ...partContent(3, 3),
              image: {
                part: 3,
                srcNumber: 1,
                alt: "전산학부 증축 외부 빌딩 공사 착공 및 시공 진행 사진",
              },
            },
            {
              duration: {
                startTerm: "05.02",
                endTerm: "08.11",
              },
              title: "전산학부 증축 건축 설계 실시",
              detail:
                "05.02 전산학부 증축 중간 설계 보고 회의 개최\n08.11 전산학부 증축 중간 설계 협의 사항 논의\n08.11 전산학부 증축 중간 설계 경제성(VE) 검토",
            },
          ],
        },
        {
          year: 2023,
          cardContents: [
            {
              duration: {
                startTerm: "02.09",
                endTerm: "04.13",
              },
              title: "전산학부 증축 건축 실행",
              detail:
                "02.09 전산학부 증축 실시 설계 최종 보고\n04.13 전산학부 증축 인테리어 계획안 발표",
            },
          ],
        },
      ],
    },
    {
      part: 4,
      title: "KRAFTON X SoC 공간 경험 디자인",
      startTerm: "2022.03",
      endTerm: "2024.12",
      detailsByYear: [
        {
          year: 2022,
          cardContents: [
            {
              duration: {
                startTerm: "03.24",
                endTerm: "04.04",
              },
              title: "KRAFTON X SoC 공간 경험 디자인 조성 협의체 구성",
              detail:
                "03.24 증축 건물의 KRAFTON X SoC 공간 경험 디자인 구성 논의 착수\n04.04 증축 건물의 KRAFTON X SoC 공간 경험 디자인 구성 실무진 논의",
            },
          ],
        },
        {
          year: 2023,
          cardContents: [
            {
              duration: {
                startTerm: "04.13",
                endTerm: "12.18",
              },
              title: "KRAFTON X SoC 공간 경험 디자인 방향 설정",
              detail:
                "04.13 증축 건물 네이밍 및 공간 경험 디자인 방향성 논의 회의 개최\n08.29 KAIST 현장 답사 및 외부 환경 조사\n09.04-11.27 공간 경험 디자인 방향성 논의 회의 개최 및 피드백 수렴\n12.18 인테리어 업체 선정 진행",
              image: {
                part: 4,
                srcNumber: 1,
                alt: "KRAFTON X SoC 공간 경험 디자인 방향 설정 사진",
              },
            },
          ],
        },
        {
          year: 2024,
          cardContents: [
            {
              duration: {
                startTerm: "01.31",
                endTerm: "06.13",
              },
              title: "인테리어 디자인 설계를 위한 업체 선정",
              detail:
                "01.31 1차 인테리어 디자인 설계\n02.21 인테리어 디자인 업체와 KAIST 실무진 1차 미팅 진행\n04.02 KRAFTON HR, 공간 활용 방안 제안 및 논의 \n06.11-13 2차 인테리어 디자인 설계 및 KAIST 실무진 2차 미팅 진행",
            },
            {
              duration: {
                startTerm: "06.15",
                endTerm: "12.11",
              },
              title: "인테리어 디자인 설계 및 공사 진행",
              detail:
                "06.15-07.04 인테리어 업체와 상세 디자인 설계 관련 논의 진행\n07.18-08.15 인테리어 설계 격주 정기 회의 진행\n09.10-09.27 기부자 공간 구성을 위한 디자인 시안 제작 \n10.01-12.10 마이크로 사이트 제작, 재학생 협업 진행 및 제작 방향성 논의\n12.11 외부 창호 보강을 위한 자재 변경",
              image: {
                part: 4,
                srcNumber: 2,
                alt: "인테리어 디자인 설계 및 공사 진행 사진",
              },
            },
            {
              duration: {
                startTerm: "11.04",
              },
              title: "기부자 공간 인테리어 시공 진행",
              image: {
                part: 4,
                srcNumber: 3,
                alt: "기부자 공간 인테리어 시공 진행 사진",
              },
            },
            {
              duration: {
                startTerm: "09.10",
                endTerm: "10.30",
              },
              title: "기부의 의미 전달을 위한 메시지 & 건물 네이밍 공모",
              detail:
                "09.10~10.30 기부자 대상, 건물명 & 기부자 메시지 공모 및 리스트 취합",
              modalImage: {
                part: 4,
                modalNumber: 3,
                filename:
                  "0910_기부의 의미 전달을 위한 메시지 & 건물 네이밍 공모",
                alt: "기부의 의미 전달을 위한 메시지 & 건물 네이밍 공모 사진",
              },
            },
            {
              duration: {
                startTerm: "10.29",
                endTerm: "10.31",
              },
              title: "KRAFTON X SoC 대표글 확정 및 건물명 논의",
              detail: "10.29-10.31 대표글 확정 및 건물명 선정을 위한 논의",
            },
            {
              duration: {
                startTerm: "11월",
                endTerm: "12.03",
              },
              title: "KRAFTON X SoC 건물명 확정 및 공표",
              detail:
                "11월 기부자 2인 메시지 선정\n11.17 채택된 기부 메시지 & 건물명 공지\n12.03 KRAFTON SoC 건물명 및 추가 기부, KRAFTON-KAIST 간 부가 합의서 작성 진행",
              image: {
                part: 4,
                srcNumber: 4,
                alt: "KRAFTON X SoC 건물명 확정 및 공표 사진",
              },
              modalImage: {
                part: 4,
                modalNumber: 4,
                filename: "11월_KRAFTON X SoC 건물명 확정 및 공표",
                alt: "KRAFTON X SoC 건물명 확정 및 공표 사진",
              },
            },
          ],
        },
      ],
    },
  ];

  return (
    <BuildingJourneyContainer>
      <BuildingJourneyBanner />

      <PartContainer>
        {partContents.map(part => (
          <BuildingJourneyPart key={part.part} {...part} />
        ))}
      </PartContainer>
    </BuildingJourneyContainer>
  );
};

export default BuildingJourney;
