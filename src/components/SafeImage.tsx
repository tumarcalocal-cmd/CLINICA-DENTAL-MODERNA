import React, { useState } from 'react';
import { DentalLogo } from './DentalLogo';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className="w-full h-full bg-gradient-to-br from-[#10283F] to-[#1a3a57] flex flex-col items-center justify-center p-6 text-center text-[#C5A46D]"
        role="img"
        aria-label={alt}
      >
        <DentalLogo className="w-10 h-10 mb-2 opacity-80" />
        <span className="text-xs font-medium text-white/80 max-w-[200px] leading-snug">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
