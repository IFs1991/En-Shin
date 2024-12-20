'use client';

import React from 'react';
import Hero from '../components/hero';
import ServiceDescription from '../components/service-description';
import NFTTicketDescription from '../components/nft-ticket-description';
import TherapistIntroduction from '../components/therapist-introduction';
import CTAButton from '../components/cta-button';
import { useTranslation } from 'next-i18next';

export default function HomePage() {
  const { t } = useTranslation('common');
  const { t: tServices } = useTranslation('serviceDescription');
  const { t: tNFT } = useTranslation('nftTicket');

  const benefits = tNFT('benefits.list', { returnObjects: true }) as string[];

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4">
        <Hero
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          description={t('hero.description')}
        />

        {Object.entries(tServices).map(([key, service], index) => (
          <ServiceDescription
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}

        <NFTTicketDescription
          title={tNFT('title')}
          description={tNFT('description')}
          benefits={benefits}
        />

        <TherapistIntroduction />

        <div className="text-center my-12">
          <CTAButton type="contact" />
        </div>
      </section>
    </main>
  );
}