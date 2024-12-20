'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const switchLanguage = (language: 'ja' | 'en') => {
    if (currentLanguage !== language) {
      // 言語に応じてパスを変更
      const newPath = language === 'en' 
        ? pathname.replace(/^\/ja/, '/en') 
        : pathname.replace(/^\/en/, '/ja');

      // 言語を変更
      i18n.changeLanguage(language);
      
      // ルーティング
      router.push(newPath);
    }
  };

  return (
    <div className="language-switcher">
      <button 
        onClick={() => switchLanguage('ja')}
        className={`language-btn ${currentLanguage === 'ja' ? 'active' : ''}`}
      >
        日本語
      </button>
      <button 
        onClick={() => switchLanguage('en')}
        className={`language-btn ${currentLanguage === 'en' ? 'active' : ''}`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;