'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const NFTTicketDescription: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <section className="nft-ticket-description">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t('nftTicket.title')}
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
                  {t('nftTicket.benefits.title')}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {t('nftTicket.benefits.list', { returnObjects: true }).map((benefit: string, index: number) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {t('nftTicket.exclusiveBenefits.title')}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {t('nftTicket.exclusiveBenefits.list', { returnObjects: true }).map((benefit: string, index: number) => (
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

{
  "nftTicket": {
    "title": "NFT施術券について",
    "purchaseMethod": {
      "title": "購入方法",
      "description": "OpenSeaなどのNFTマーケットプレイスで簡単に購入できます。"
    },
    "benefits": {
      "title": "施術後の変化",
      "list": [
        "身体のバランス改善",
        "ストレス軽減",
        "自然治癒力の向上"
      ]
    },
    "exclusiveBenefits": {
      "title": "NFT保有者限定特典",
      "list": [
        "優先予約",
        "追加施術の割引",
        "専門家との無料相談"
      ]
    }
  }
};