import React from 'react';
import Hero from '@/app/components/hero';
import ServiceDescription from '@/app/components/service-description';
import NFTTicketDescription from '@/app/components/nft-ticket-description';
import TherapistIntroduction from '@/app/components/therapist-introduction';
import CTAButton from '@/app/components/cta-button';
import { useTranslation } from 'next-i18next';

export default function EnglishHomePage() {
  const { t } = useTranslation('en');

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4">
        <Hero 
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          description={t('hero.description')}
        />

        <ServiceDescription 
          title={t('service.title')}
          description={t('service.description')}
          features={t('service.features', { returnObjects: true })}
        />

        <NFTTicketDescription 
          title={t('nft.title')}
          description={t('nft.description')}
          benefits={t('nft.benefits', { returnObjects: true })}
        />

        <TherapistIntroduction 
          title={t('therapist.title')}
          profiles={t('therapist.profiles', { returnObjects: true })}
        />

        <div className="text-center my-12">
          <CTAButton 
            primaryText={t('cta.primary')}
            secondaryText={t('cta.secondary')}
          />
        </div>
      </section>
    </main>
  );
};