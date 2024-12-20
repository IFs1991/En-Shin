import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <footer>
      <p>{t('footer.text')}</p>
    </footer>
  );
};

export default Footer;