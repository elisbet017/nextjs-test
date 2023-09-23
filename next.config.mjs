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