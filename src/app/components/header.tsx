'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './language-switcher';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-apple-gray">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="えん鍼 Logo"
            width={30}
            height={30}
            priority
          />
        </Link>

        {/* ナビゲーション */}
        <nav className="flex items-center space-x-8 font-sf-pro-display">
          <Link
            href="/mac"
            className="text-gray-800 hover:text-apple-blue transition-colors"
          >
            Mac
          </Link>
          <Link
            href="/ipad"
            className="text-gray-800 hover:text-apple-blue transition-colors"
          >
            iPad
          </Link>
          <Link
            href="/iphone"
            className="text-gray-800 hover:text-apple-blue transition-colors"
          >
            iPhone
          </Link>
          <Link
            href="/watch"
            className="text-gray-800 hover:text-apple-blue transition-colors"
          >
            Watch
          </Link>
          <Link
            href="/tv"
            className="text-gray-800 hover:text-apple-blue transition-colors"
          >
            TV
          </Link>
          <Link
            href="/music"
            className="text-gray-800 hover:text-apple-blue transition-colors"
          >
            Music
          </Link>
          <Link
            href="/support"
            className="text-gray-800 hover:text-apple-blue transition-colors"
          >
            Support
          </Link>

          {/* 言語切り替え */}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
};

export default Header;