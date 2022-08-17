/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "gdb.voanews.com",
      "www.americaeconomia.com",
      "www.radioflorida.icrt.cu",
      "www.prensa-latina.cu",
      "www.cubahora.cu",
      "ichef.bbci.co.uk",
      "placeimg.com",
      "www.radiohc.cu",
      "cdn1.celebritax.com",
      "www.radiorebelde.cu",
      "www.tvcubana.icrt.cu",
      "www.periodico26.cu",
      "www.escambray.cu",
      "img.asmedia.epimg.net",
      "www.acn.cu",
    ],
  },

  env: {
    customKey: "fff7f3d2b9054cf6ba44bcfac086b121",
  },
};

module.exports = nextConfig;
