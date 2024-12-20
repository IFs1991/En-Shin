'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';

interface PricePaymentProps {
  // 必要に応じてプロパティを追加
}

const PricePayment: React.FC<PricePaymentProps> = () => {
  const { t } = useTranslation('common');

  const pricingTiers = [
    {
      name: t('basic_plan'),
      price: t('basic_price'),
      features: [
        t('basic_feature_1'),
        t('basic_feature_2'),
        t('basic_feature_3')
      ]
    },
    {
      name: t('premium_plan'),
      price: t('premium_price'),
      features: [
        t('premium_feature_1'),
        t('premium_feature_2'),
        t('premium_feature_3')
      ]
    }
  ];

  const paymentMethods = [
    t('payment_method_1'),
    t('payment_method_2'),
    t('payment_method_3')
  ];

  return (
    <section className="price-payment-section">
      <div className="container">
        <h2 className="section-title">{t('pricing_title')}</h2>
        
        <div className="pricing-tiers">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="pricing-tier">
              <h3>{tier.name}</h3>
              <p className="price">{tier.price}</p>
              <ul className="features">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="payment-methods">
          <h3>{t('payment_methods_title')}</h3>
          <ul>
            {paymentMethods.map((method, index) => (
              <li key={index}>{method}</li>
            ))}
          </ul>
        </div>

        <div className="payment-notes">
          <p>{t('payment_additional_notes')}</p>
        </div>
      </div>
    </section>
  );
};

export default PricePayment;