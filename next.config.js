const { default: next } = require("next");

/* eslint-env node */
const isProd = process.env.NODE_ENV === 'production';

// https://github.com/vercel/next.js/blob/master/packages/next/next-server/server/config.ts
let nextConfig = {
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Next 12 has multiple TS loaders, and we need to update all of them.
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));

    tsRules.forEach(rule => {
      // eslint-disable-next-line no-param-reassign
      rule.include = undefined;
    });

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  svgo: {
    multipass: true,
    plugins: ['removeDimensions'],
  },
  strictMode: true,
  swcMinify: true,
  trailingSlash: false,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    unoptimized: true,
  },
};

module.exports = (phase, defaultConfig) => {
  if (process.env.GITHUB_REPOSITORY && ['phase-production-build', 'phase-export'].includes(phase)) {

    const repositoryName = process.env.GITHUB_REPOSITORY.split('/')[1];

    defaultConfig = {
      ...nextConfig,
      assetPrefix: `/${repositoryName}/`,
      basePath: `/${repositoryName}`,
    }
  }

  return defaultConfig;
}
