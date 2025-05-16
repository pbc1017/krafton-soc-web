import "@krafton-soc/common/styles/globals.css";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Footer from "@krafton-soc/common/components/Footer";
import Header from "@krafton-soc/common/components/Header";
import { StoreProvider } from "@krafton-soc/common/components/StoreProvider";
import StyledComponentsRegistry from "@krafton-soc/common/libs/RootStyleRegistry";
import { fontVariables } from "@krafton-soc/common/styles/fonts";
import { getUserLocale } from "@krafton-soc/i18n/actions"; // 경로 별칭 사용

export const metadata: Metadata = {
  title: "KRAFTON X SoC",
  description: "Positive Influence, Memories of the Journey",
};

// eslint-disable-next-line react/function-component-definition
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getUserLocale();
  const messages = await getMessages();

  return (
    <StyledComponentsRegistry>
      <html lang={locale} className={fontVariables}>
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
          <StoreProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <Header />
              {children}
              <Footer />
            </NextIntlClientProvider>
          </StoreProvider>
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
