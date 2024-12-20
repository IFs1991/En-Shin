以下に、src/app/en/about/page.tsxの実装例を示します：

```tsx
import React from 'react';
import AboutContent from '@/app/components/about-content';
import ArtistProfile from '@/app/components/artist-profile';
import PricePayment from '@/app/components/price-payment';
import { useTranslation } from 'next-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <div className="about-page">
      <section className="about-content">
        <h1>{t('title')}</h1>
        <AboutContent />
      </section>

      <section className="