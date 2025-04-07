"use server";

import { cookies } from "next/headers";

import { defaultLocale, Locale, localeCookieName, locales } from "./config"; // config 파일 임포트
// import { redirect } from 'next/navigation'; // 필요시 주석 해제

export async function getUserLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(localeCookieName)?.value;
  if (cookieValue && locales.includes(cookieValue as Locale)) {
    return cookieValue as Locale;
  }
  return defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  const cookieStore = await cookies();
  cookieStore.set(localeCookieName, locale, {
    path: "/", // 쿠키가 모든 경로에서 유효하도록 설정
    maxAge: 365 * 24 * 60 * 60, // 1년 유지 (선택 사항)
    sameSite: "lax", // CSRF 방지 (권장)
  });

  // 언어 변경 후 처리 (예: 페이지 새로고침)는 LanguageSwitcher 컴포넌트에서 수행합니다.
  // 예: redirect('/'); // 필요시 사용
}
