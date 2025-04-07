import { getRequestConfig } from "next-intl/server";

import { getUserLocale } from "./actions"; // 쿠키 읽기 함수 임포트

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
