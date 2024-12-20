import React from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import LanguageSwitcher from '@/app/components/language-switcher';
import '@/styles/global.css';

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="ja">
      <body>
        <div className="app-container">
          <Header />
          <LanguageSwitcher />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'えん鍼 - NFT鍼灸サービス',
  description: 'NFTと鍼灸の革新的な融合サービス',
  openGraph: {
    title: 'えん鍼',
    description: 'NFTと鍼灸の新しいアプローチ',
    images: ['/og-image.png']
  }
};