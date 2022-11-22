// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTranspileModules = require("next-transpile-modules")([
  "designsystem",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTranspileModules(nextConfig);
