'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

interface NFTTicketDescriptionProps {
  title: string;
  description: string;
  benefits: string[] | undefined;
}

const NFTTicketDescription: React.FC<NFTTicketDescriptionProps> = ({ title, description, benefits }) => {
  const { t } = useTranslation('common');

  return (
    <section className="nft-ticket-description">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* NFTチケットの画像 */}
          <div className="flex justify-center">
            <Image
              src="/images/nft-ticket.png"
              alt="NFT施術券"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* NFTチケットの詳細説明 */}
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {t('nftTicket.purchaseMethod.title')}
                </h3>
                <p className="text-gray-600">
                  {t('nftTicket.purchaseMethod.description')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Benefits
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {Array.isArray(benefits) && benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {t('nftTicket.exclusiveBenefits.title')}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {(t('nftTicket.exclusiveBenefits.list', { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
                  <li key={index}>{benefit}</li>
                ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTTicketDescription;