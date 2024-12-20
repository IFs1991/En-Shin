'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

interface TherapistProfile {
  name: string;
  specialty: string;
  experience: number;
  description: string;
  imageUrl: string;
}

const TherapistIntroduction: React.FC = () => {
  const { t } = useTranslation('common');

  const therapists: TherapistProfile[] = [
    {
      name: t('therapist.name'),
      specialty: t('therapist.specialty'),
      experience: 10,
      description: t('therapist.description'),
      imageUrl: '/images/therapist.jpg'
    }
  ];

  return (
    <section className="therapist-introduction">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('therapist.title')}
        </h2>

        {therapists.map((therapist, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg">
              <Image
                src={therapist.imageUrl}
                alt={therapist.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">
                {therapist.name}
              </h3>

              <div className="mb-4">
                <span className="font-medium">
                  {t('therapist.specialty')}:
                </span>
                {therapist.specialty}
              </div>

              <div className="mb-4">
                <span className="font-medium">
                  {t('therapist.experience')}:
                </span>
                {t('therapist.yearsOfExperience', { years: therapist.experience })}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {therapist.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TherapistIntroduction;