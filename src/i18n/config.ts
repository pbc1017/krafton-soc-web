export const locales = ["en", "ko"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ko";
export const localeCookieName = "NEXT_LOCALE"; // 쿠키 이름 정의
