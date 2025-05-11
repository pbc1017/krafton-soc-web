import { create } from "zustand";

import { theme } from "@krafton-soc/common/styles/theme";

type DeviceType = "mobile" | "tablet" | "desktop";

// 두 방식을 혼합하여 사용
interface ResponsiveState {
  // enum으로 현재 디바이스 타입 관리
  deviceType: DeviceType;

  // 각 디바이스별 판단 boolean
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;

  // 기타 유용한 정보
  windowWidth: number; // 현재 윈도우 너비
  orientation: "portrait" | "landscape"; // 현재 화면 방향

  // 초기화 상태
  isInitialized: boolean;

  // 액션
  initialize: () => void;
  cleanup: () => void;
  setResponsive: (width: number) => void;
}

const getDeviceType = (width: number): DeviceType => {
  if (width <= parseInt(theme.breakpoints.mobileTablet)) return "mobile";
  if (width <= parseInt(theme.breakpoints.tabletDesktop)) return "tablet";
  return "desktop";
};

// 스토어 구현
export const useResponsiveStore = create<ResponsiveState>((set, get) => ({
  windowWidth: 0,
  deviceType: "desktop",
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  orientation: "landscape",
  isInitialized: false,

  initialize: () => {
    if (get().isInitialized || typeof window === "undefined") return;

    const handleResize = () => {
      const width = window.innerWidth;
      const deviceType = getDeviceType(width);

      set({
        windowWidth: width,
        deviceType,
        isMobile: deviceType === "mobile",
        isTablet: deviceType === "tablet",
        isDesktop: deviceType === "desktop",
        orientation:
          window.innerWidth > window.innerHeight ? "landscape" : "portrait",
      });
    };

    // 초기값 설정
    handleResize();

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);
    set({
      isInitialized: true,
      cleanup: () => {
        window.removeEventListener("resize", handleResize);
        set({ isInitialized: false });
      },
    });
  },

  setResponsive: (width: number) => {
    const deviceType = getDeviceType(width);
    set({
      windowWidth: width,
      deviceType,
      isMobile: deviceType === "mobile",
      isTablet: deviceType === "tablet",
      isDesktop: deviceType === "desktop",
      orientation:
        window.innerWidth > window.innerHeight ? "landscape" : "portrait",
    });
  },
  cleanup: () => {},
}));
