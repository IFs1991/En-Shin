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

  // i18nの初期化と現在の言語の取得
  const { i18n } = useTranslation();

  // 現在の言語状態を管理（デフォルトは日本語）
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // 初期値として有効な言語のみを設定
    const initialLang = i18n.language as string;
    return initialLang === 'en' ? 'en' : 'ja';
  });

  // 現在の言語を監視して状態を更新
  useEffect(() => {
    if (i18n.language) {
      const newLang = i18n.language === 'en' ? 'en' : 'ja';
      setCurrentLanguage(newLang);
      document.documentElement.lang = newLang;
    }
  }, [i18n.language]);

  // 言語切り替え関数（エラーハンドリングを追加）
  const switchLanguage = async (language: Language) => {
    try {
      // 現在の言語と異なる場合のみ処理を実行
      if (currentLanguage !== language) {
        // パスの変更ロジック（正規表現を使用して安全に置換）
        const newPath = language === 'en'
          ? pathname.replace(/^\/ja(?=\/|$)/, '/en')
          : pathname.replace(/^\/en(?=\/|$)/, '/ja');

        // i18nの言語を変更（非同期処理を適切に待機）
        await i18n.changeLanguage(language);

        // 新しいパスへ遷移
        router.push(newPath);
      }
    } catch (error) {
      console.error('言語切り替え中にエラーが発生しました:', error);
    }
  };

  return (
    <div className="language-switcher flex space-x-2" role="group" aria-label="Language selection">
      <button
        onClick={() => switchLanguage('ja')}
        className={`language-btn px-4 py-2 rounded transition-colors
          ${currentLanguage === 'ja'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
        aria-label="Switch to Japanese"
        aria-pressed={currentLanguage === 'ja'}
      >
        日本語
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`language-btn px-4 py-2 rounded transition-colors
          ${currentLanguage === 'en'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
        aria-label="Switch to English"
        aria-pressed={currentLanguage === 'en'}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;