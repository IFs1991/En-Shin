'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-apple-gray">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/relaxation-unsplash.jpg"
          alt="Serene relaxation scene"
          fill
          objectFit="cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/10 z-10"></div>
      </div>

      <div className="relative z-20 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-black mb-4 font-sf-pro-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-8 font-sf-pro-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t('hero.subtitle')}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;