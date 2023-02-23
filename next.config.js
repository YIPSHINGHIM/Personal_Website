/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      loader: "file-loader",
      options: {
        outputPath: "static",
        name: "[name].[ext]",
      },
    });

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
