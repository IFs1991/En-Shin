import React from 'react';
import AboutContent from '../components/about-content';
import ArtistProfile from '../components/artist-profile';
import PricePayment from '../components/price-payment';
import { useTranslation } from 'next-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <div className="about-page">
      <section className="about-header">
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>
      </section>

      <section className="about-content">
        <AboutContent />
      </section>

      <section className="artist-profile">
        <h2>{t('artist-profile.title')}</h2>
        <ArtistProfile />
      </section>

      <section className="price-payment">
        <h2>{t('price-payment.title')}</h2>
        <PricePayment />
      </section>

      <section className="cta">
        <button className="cta-button">
          {t('cta.contact')}
        </button>
      </section>
    </div>
  );
};

export default AboutPage;

{
  "about": {
    "title": "えん鍼について",
    "subtitle": "革新的な鍼灸サービスの詳細",
    "artist-profile": {
      "title": "鍼灸師の紹介"
    },
    "price-payment": {
      "title": "料金と支払い方法"
    },
    "cta": {
      "contact": "お問い合わせ"
    }
  }
}

{
  "about": {
    "title": "About En-Shin",
    "subtitle": "Details of our innovative acupuncture service",
    "artist-profile": {
      "title": "Acupuncturist Profile"
    },
    "price-payment": {
      "title": "Pricing and Payment Methods"
    },
    "cta": {
      "contact": "Contact Us"
    }
  }
};