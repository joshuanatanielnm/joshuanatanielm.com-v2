/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  images: {
    domains: ["www.datocms-assets.com"],
  },
};

module.exports = nextConfig;
