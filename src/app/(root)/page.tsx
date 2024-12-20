import React from 'react';
import Hero from '../components/hero';
import ServiceDescription from '../components/service-description';
import NFTTicketDescription from '../components/nft-ticket-description';
import TherapistIntroduction from '../components/therapist-introduction';
import CTAButton from '../components/cta-button';
import { useTranslation } from 'next-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="home-page">
      <Hero />
      <main>
        <section className="service-overview">
          <h1>{t('home.title')}</h1>
          <ServiceDescription />
          <NFTTicketDescription />
        </section>

        <section className="therapist-section">
          <h1>{t('home.therapist_title')}</h1>
          <TherapistIntroduction />
        </section>

        <section className="cta-section">
          <CTAButton type="contact" />
        </section>
      </main>
    </div>
  );
};

export default HomePage;