function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
});

// export const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ["placehold.co"],
//   },
// };