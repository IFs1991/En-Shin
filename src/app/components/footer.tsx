'use client';  // この行を追加してクライアントコンポーネントとして指定

import React from 'react';
import Link from 'next/link';
// next-i18nextからuseTranslationをインポート
import { useTranslation } from 'next-i18next';

// Footerコンポーネントの型定義
const Footer: React.FC = () => {
  // useTranslationフックを使用して翻訳機能を初期化
  const { t } = useTranslation('common');

  // フッターのレンダリング
  return (
    <footer>
      <p>{t('footer.text')}</p>
    </footer>
  );
};

// Footerコンポーネントをエクスポート
export default Footer;