以下に、`src/app/components/artist-profile.tsx`の実装例を示します：

```typescript
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
          width={300