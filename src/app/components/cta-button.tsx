'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

interface CTAButtonProps {
  type: 'contact' | 'purchase';
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ type, className = '' }) => {
  const { t } = useTranslation('common');

  const buttonConfig = {
    contact: {
      text: t('cta.contact'),
      href: '/contact',
      style: 'bg-blue-500 hover:bg-blue-600 text-white'
    },
    purchase: {
      text: t('cta.purchase'),
      href: '/purchase',
      style: 'bg-green-500 hover:bg-green-600 text-white'
    }
  };

  const { text, href, style } = buttonConfig[type];

  return (
    <Link
      href={href}
      className={`
        px-6 py-3
        rounded-full
        transition-all
        duration-300
        ease-in-out
        text-center
        font-bold
        ${style}
        ${className}
      `}
    >
      {text}
    </Link>
  );
};

export default CTAButton;