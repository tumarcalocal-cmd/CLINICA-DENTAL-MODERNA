import React from 'react';

interface DentalLogoProps {
  className?: string;
}

export const DentalLogo: React.FC<DentalLogoProps> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Minimalist luxury architectural dental silhouette */}
      <path
        d="M12.2 6.5C8.9 6.5 6.8 9.1 6.8 12.6C6.8 16.5 8.5 19.3 9.7 23.4C10.5 26.2 11.2 29.8 13.1 29.8C14.7 29.8 15.2 25.4 16.5 22.8C17.1 21.7 18.9 21.7 19.5 22.8C20.8 25.4 21.3 29.8 22.9 29.8C24.8 29.8 25.5 26.2 26.3 23.4C27.5 19.3 29.2 16.5 29.2 12.6C29.2 9.1 27.1 6.5 23.8 6.5C21.4 6.5 19.8 7.8 18 7.8C16.2 7.8 14.6 6.5 12.2 6.5Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Subtle smile curve accent */}
      <path
        d="M13.2 14.2C14.6 15.8 16.2 16.5 18 16.5C19.8 16.5 21.4 15.8 22.8 14.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
};
