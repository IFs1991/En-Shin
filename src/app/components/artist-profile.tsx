'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

interface ArtistProfileProps {
  name: string;
  specialty: string;
  experience: number;
  profileImage: string;
  achievements: string[];
}

const ArtistProfile: React.FC<ArtistProfileProps> = ({
  name,
  specialty,
  experience,
  profileImage,
  achievements
}) => {
  const { t } = useTranslation('about');

  return (
    <div className="artist-profile">
      <div className="profile-header">
        <Image
          src={profileImage}
          alt={`${name} プロフィール`}
          width={300}
          height={300}
          className="profile-image"
        />
        <h3>{name}</h3>
        <p className="specialty">{specialty}</p>
      </div>
      <div className="profile-details">
        <h4>{t('artist-profile.experience')}</h4>
        <p>{experience} {t('artist-profile.years')}</p>
        <h4>{t('artist-profile.achievements')}</h4>
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArtistProfile;