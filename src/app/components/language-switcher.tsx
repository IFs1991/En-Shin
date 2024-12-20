'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

// 言語の型を定義して型安全性を向上
type Language = 'ja' | 'en';

const LanguageSwitcher: React.FC = () => {
  // Next.jsのルーティング関連のフック
  const router = useRouter();
  const pathname = usePathname();

  // i18nの初期化
  const { i18n } = useTranslation();

  // 現在の言語状態を管理
  const [currentLanguage, setCurrentLanguage] = useState<Language>(i18n.language as Language);

  // 言語変更を監視するエフェクト
  useEffect(() => {
    // 言語変更ハンドラーを定義
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng as Language);
    };

    // イベントリスナーを設定
    i18n.on('languageChanged', handleLanguageChange);

    // クリーンアップ関数でイベントリスナーを解除
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  // 言語切り替え関数
  const switchLanguage = (language: Language) => {
    // 現在の言語と異なる場合のみ処理を実行
    if (currentLanguage !== language) {
      // パスの変更ロジック
      const newPath = language === 'en'
        ? pathname.replace(/^\/ja/, '/en')
        : pathname.replace(/^\/en/, '/ja');

      // i18nの言語を変更
      i18n.changeLanguage(language);

      // 新しいパスへ遷移
      router.push(newPath);
    }
  };

  // 言語切り替えボタンのレンダリング
  return (
    <div className="language-switcher">
      <button
        onClick={() => switchLanguage('ja')}
        className={`language-btn ${currentLanguage === 'ja' ? 'active' : ''}`}
        aria-label="Switch to Japanese"
        aria-pressed={currentLanguage === 'ja'}
      >
        日本語
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`language-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        aria-label="Switch to English"
        aria-pressed={currentLanguage === 'en'}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;