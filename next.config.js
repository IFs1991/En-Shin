/** @type {import('next').NextConfig} */

const { i18n: i18nConfig } = require('./next-i18next.config');

const nextConfig = {
  // Reactの厳格モードを有効化
  reactStrictMode: true,

  // 国際化（i18n）の設定
  i18n: {
    defaultLocale: 'ja',
    locales: ['en', 'ja'],
    localeDetection: false
  },

  // 画像最適化の設定
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },

  // 実験的機能の設定
  experimental: {
    // サーバーアクションの設定
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },

  // ビルド最適化の設定
  swcMinify: true,
  poweredByHeader: false
};

module.exports = nextConfig;