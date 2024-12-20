以下に、`src/app/components/footer.tsx`の実装例を示します：

```tsx
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white py