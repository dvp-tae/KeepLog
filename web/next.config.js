/** @type {import('next').NextConfig} */
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  output: isGithubPagesBuild ? "export" : undefined,
  images: {
    unoptimized: isGithubPagesBuild,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

module.exports = nextConfig;
