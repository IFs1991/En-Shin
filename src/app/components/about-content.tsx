import React from 'react';
import { useTranslation } from 'next-i18next';

interface AboutContentProps {
  className?: string;
}

const AboutContent: React.FC<AboutContentProps> = ({ className = '' }) => {
  const { t } = useTranslation('about');

  return (
    <div className={`about-content ${className}`}>
      <section className="service-background">
        <h2>{t('serviceBackground.title')}</h2>
        <p>{t('serviceBackground.description')}</p>
      </section>

      <section className="service-details">
        <h2>{t('serviceDetails.title')}</h2>
        <div className="service-details-content">
          <div className="service-philosophy">
            <h3>{t('serviceDetails.philosophy.title')}</h3>
            <p>{t('serviceDetails.philosophy.description')}</p>
          </div>

          <div className="service-approach">
            <h3>{t('serviceDetails.approach.title')}</h3>
            <p>{t('serviceDetails.approach.description')}</p>
            <ul>
              {t('serviceDetails.approach.keyPoints', { returnObjects: true }).map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="unique-value-proposition">
            <h3>{t('serviceDetails.uniqueValueProposition.title')}</h3>
            <p>{t('serviceDetails.uniqueValueProposition.description')}</p>
          </div>
        </div>
      </section>

      <section className="mission-and-vision">
        <h2>{t('missionAndVision.title')}</h2>
        <div className="mission">
          <h3>{t('missionAndVision.mission.title')}</h3>
          <p>{t('missionAndVision.mission.description')}</p>
        </div>
        <div className="vision">
          <h3>{t('missionAndVision.vision.title')}</h3>
          <p>{t('missionAndVision.vision.description')}</p>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;

{
  "about": {
    "serviceBackground": {
      "title": "サービスの背景",
      "description": "えん鍼のサービスは..."
    },
    "serviceDetails": {
      "title": "サービス詳細",
      "philosophy": {
        "title": "私たちの理念",
        "description": "..."
      },
      "approach": {
        "title": "アプローチ",
        "description": "...",
        "keyPoints": [
          "ポイント1",
          "ポイント2",
          "ポイント3"
        ]
      },
      "uniqueValueProposition": {
        "title": "私たちの独自の価値提案",
        "description": "..."
      }
    },
    "missionAndVision": {
      "title": "ミッションとビジョン",
      "mission": {
        "title": "ミッション",
        "description": "..."
      },
      "vision": {
        "title": "ビジョン",
        "description": "..."
      }
    }
  }
};