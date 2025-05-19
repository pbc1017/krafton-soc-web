import { DeviceType } from "@krafton-soc/common/stores/useResponsiveStore";
import { PartProps } from "@krafton-soc/features/BuildingJourney/components/BuildingJourneyPart/BuildingJourneyPart";

const getPartHeaderTitle = (
  part: number,
  t: (key: string) => string,
  deviceType: DeviceType,
) => t(`Part${part}.PartHeader.title.${deviceType}`);

const safeTranslate = (t: (key: string) => string, key: string) => {
  return t(key) === "UNDEFINED" ? undefined : t(key);
};

const getPartContent = (
  part: number,
  cardNumber: number,
  t: (key: string) => string,
  deviceType: DeviceType,
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

export const generatePartContents = (
  t: (key: string) => string,
  deviceType: DeviceType,
): PartProps[] => [
  {
    part: 1,
    title: getPartHeaderTitle(1, t, deviceType),
    startTerm: t("Part1.startTerm"),
    endTerm: safeTranslate(t, "Part1.endTerm"),
    detailsByYear: [
      {
        year: 2020,
        cardContents: [
          {
            ...getPartContent(1, 1, t, deviceType),
            image: {
              part: 1,
              srcNumber: 1,
              alt: "SW사관학교 정글 업무협약식에서 전산학부 건물 증축의 필요성 논의 사진",
            },
          },
          {
            ...getPartContent(1, 2, t, deviceType),
          },
        ],
      },
      {
        year: 2021,
        cardContents: [
          {
            ...getPartContent(1, 3, t, deviceType),
            link: "https://cs.kaist.ac.kr/content?menu=134",
            image: {
              part: 1,
              srcNumber: 2,
              alt: "류석영 교수 학부장 취임 사진",
            },
          },
          {
            ...getPartContent(1, 4, t, deviceType),
          },
          {
            ...getPartContent(1, 5, t, deviceType),
          },
        ],
      },
    ],
  },
  {
    part: 2,
    title: getPartHeaderTitle(2, t, deviceType),
    startTerm: t("Part2.startTerm"),
    endTerm: safeTranslate(t, "Part2.endTerm"),
    detailsByYear: [
      {
        year: 2021,
        cardContents: [
          {
            ...getPartContent(2, 1, t, deviceType),
            image: {
              part: 2,
              srcNumber: 1,
              alt: "데브시스터즈의 전산학부 동문 11인 기부 사진",
            },
            link: "https://cs.kaist.ac.kr/board/view?bbs_id=news&bbs_sn=9697&menu=83",
          },
          {
            ...getPartContent(2, 2, t, deviceType),
            image: {
              part: 2,
              srcNumber: 2,
              alt: "학부 93학번 김범준 동문 1억 원 기부 사진",
            },
            link: "https://news.kaist.ac.kr/news/html/news/?mode=V&mng_no=13590",
          },
          {
            ...getPartContent(2, 3, t, deviceType),
            image: {
              part: 2,
              srcNumber: 3,
              alt: "장병규, 김창한 등 11인, 기부 입장 표명 및 기부금 약정식 준비 사진",
            },
          },
          {
            ...getPartContent(2, 4, t, deviceType),
            image: {
              part: 2,
              srcNumber: 4,
              alt: "KAIST 건설팀과 증축 실행 구체화 및 예산 논의 사진",
            },
          },
          {
            ...getPartContent(2, 5, t, deviceType),
            image: {
              part: 2,
              srcNumber: 5,
              alt: "학부 95학번 서하연, 96학번 한동훈 동문 부부 2,000만 원 기부 사진",
            },
            link: "https://cs.kaist.ac.kr/board/view?bbs_id=news&bbs_sn=9680&menu=83",
          },
          {
            ...getPartContent(2, 6, t, deviceType),
          },
          {
            ...getPartContent(2, 7, t, deviceType),
          },
          {
            ...getPartContent(2, 8, t, deviceType),
          },
          {
            ...getPartContent(2, 9, t, deviceType),
            link: "https://www.kaist.ac.kr/Upload/kr/download/KAISTian_Newsletter_2021Summer_20210827.pdf",
            image: {
              part: 2,
              srcNumber: 6,
              alt: "크래프톤 & 전산학부 동문, KAIST 전산학부 기부 약정식 및 인터뷰 개최 사진",
            },
          },
          {
            ...getPartContent(2, 10, t, deviceType),
            link: "https://www.mk.co.kr/news/society/9900467",
            image: {
              part: 2,
              srcNumber: 7,
              alt: "크래프톤, KAIST에 110억 원 기부 공식 발표 사진",
            },
          },
          {
            ...getPartContent(2, 11, t, deviceType),
          },
          {
            ...getPartContent(2, 12, t, deviceType),
            modalImage: {
              part: 2,
              modalNumber: 1,
              filename: "0626",
              alt: "전산학부 구성원 대상 증축기금 조성 사진",
            },
          },
          {
            ...getPartContent(2, 13, t, deviceType),
          },
          {
            ...getPartContent(2, 14, t, deviceType),
          },
          {
            ...getPartContent(2, 15, t, deviceType),
          },
          {
            ...getPartContent(2, 16, t, deviceType),
          },
          {
            ...getPartContent(2, 17, t, deviceType),
            link: "https://news.kaist.ac.kr/news/html/news/?mode=V&mng_no=17031",
            image: {
              part: 2,
              srcNumber: 8,
              alt: "학부 99학번 박준하 동문 1억 원 기부 사진",
            },
          },
          {
            ...getPartContent(2, 18, t, deviceType),
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
            ...getPartContent(2, 19, t, deviceType),
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
    title: getPartHeaderTitle(3, t, deviceType),
    startTerm: t("Part3.startTerm"),
    endTerm: safeTranslate(t, "Part3.endTerm"),
    detailsByYear: [
      {
        year: 2021,
        cardContents: [
          {
            ...getPartContent(3, 1, t, deviceType),
          },
        ],
      },
      {
        year: 2022,
        cardContents: [
          {
            ...getPartContent(3, 2, t, deviceType),
            modalImage: {
              part: 3,
              modalNumber: 2,
              filename: "0316",
              alt: "전산학부 증축 공사 실행을 위한 설계 공모 개최 및 확정 사진",
            },
          },
          {
            ...getPartContent(3, 3, t, deviceType),
            image: {
              part: 3,
              srcNumber: 1,
              alt: "전산학부 증축 외부 빌딩 공사 착공 및 시공 진행 사진",
            },
          },
          {
            ...getPartContent(3, 4, t, deviceType),
          },
        ],
      },
      {
        year: 2023,
        cardContents: [
          {
            ...getPartContent(3, 5, t, deviceType),
          },
        ],
      },
    ],
  },
  {
    part: 4,
    title: getPartHeaderTitle(4, t, deviceType),
    startTerm: t("Part4.startTerm"),
    endTerm: safeTranslate(t, "Part4.endTerm"),
    detailsByYear: [
      {
        year: 2022,
        cardContents: [
          {
            ...getPartContent(4, 1, t, deviceType),
          },
        ],
      },
      {
        year: 2023,
        cardContents: [
          {
            ...getPartContent(4, 2, t, deviceType),
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
            ...getPartContent(4, 3, t, deviceType),
          },
          {
            ...getPartContent(4, 4, t, deviceType),
            image: {
              part: 4,
              srcNumber: 2,
              alt: "인테리어 디자인 설계 및 공사 진행 사진",
            },
          },
          {
            ...getPartContent(4, 5, t, deviceType),
            image: {
              part: 4,
              srcNumber: 3,
              alt: "기부자 공간 인테리어 시공 진행 사진",
            },
          },
          {
            ...getPartContent(4, 6, t, deviceType),
            modalImage: {
              part: 4,
              modalNumber: 3,
              filename: "0910",
              alt: "기부의 의미 전달을 위한 메시지 & 건물 네이밍 공모 사진",
            },
          },
          {
            ...getPartContent(4, 7, t, deviceType),
          },
          {
            ...getPartContent(4, 8, t, deviceType),
            image: {
              part: 4,
              srcNumber: 4,
              alt: "KRAFTON X SoC 건물명 확정 및 공표 사진",
            },
            modalImage: {
              part: 4,
              modalNumber: 4,
              filename: "1100",
              alt: "KRAFTON X SoC 건물명 확정 및 공표 사진",
            },
          },
        ],
      },
    ],
  },
];
