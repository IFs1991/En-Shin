// 国際化の設定をインポート
// next-i18next.config.js からi18nの基本設定を読み込みます
const { i18n } = require('./next-i18next.config');

/**
 * Next.jsの設定ファイル
 * このファイルでは以下の設定を行います：
 * - 多言語対応（i18n）の設定
 * - その他のNext.js固有の設定
 */
module.exports = {
  // i18nの設定を拡張
  i18n: {
    // next-i18next.config.jsの基本設定を継承
    ...i18n,
    // デフォルトのロケールを日本語に設定
    defaultLocale: 'ja',
    // サポートする言語を定義
    locales: ['en', 'ja'],
    // 翻訳ファイルのパスを指定
    localePath: './i18n/locales',
    // ロケールの自動検出を有効化
    localeDetection: true
  },

  // 将来的な拡張のためのその他の設定をここに追加可能
  reactStrictMode: true,

  // 画像の最適化設定
  images: {
    domains: [],  // 必要に応じて外部画像ドメインを追加
    formats: ['image/webp']
  }
}