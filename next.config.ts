import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  // This is the default locale you want to use in your app.
  // The middleware will redirect users navigating to `/` to `/en`
  "./src/i18n/request.ts",
);

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    emotion: true,
  },
};

export default withNextIntl(nextConfig);
