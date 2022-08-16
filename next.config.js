/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "image.cnbcfm.com",
      "cdn.mobilesyrup.com",
      "s1.eestatic.com",
      "images0.persgroep.net",
      "static.independent.co.uk",
      "www.handelsblatt.com",
      "akm-img-a-in.tosshub.com",
      "responsive.fxempire.com",
      "img.technews.tw",
      "images.moneycontrol.com",
      "cdn.iz.ru",
      "i.dailymail.co.uk",
    ],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
