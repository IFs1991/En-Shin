"use client";

import React from 'react';
import AboutContent from '../../../app/components/about-content';
import ArtistProfile from '../../../app/components/artist-profile';
import PricePayment from '../../../app/components/price-payment';
import { useTranslation } from 'next-i18next';

export default function AboutPage() {
  const { t } = useTranslation('About');

  return (
    <div className="about-page">
      <section className="about-content">
        <h1>{t('title')}</h1>
        <AboutContent />
      </section>

      <section className="artist-profile">
        <ArtistProfile
          name="Placeholder Name"
          specialty="Placeholder Specialty"
          experience={0}
          profileImage="/images/placeholder.png"
          achievements={[]}
        />
      </section>

      <section className="price-payment">
        <PricePayment />
      </section>
    </div>
  );
}