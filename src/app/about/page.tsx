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
        <ArtistProfile
          name="山田 太郎"
          specialty="鍼灸治療"
          experience={10}
          profileImage="/images/taro.jpg"
          achievements={["〇〇学会 優秀賞", "△△クリニック 院長"]}
        />
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