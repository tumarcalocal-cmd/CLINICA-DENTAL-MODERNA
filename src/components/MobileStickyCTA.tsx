import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface MobileStickyCTAProps {
  onOpenBooking: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenBooking }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-4 left-4 right-4 z-30 animate-bounce-subtle">
      <button
        onClick={onOpenBooking}
        className="w-full py-3.5 px-6 bg-[#10283F] border-2 border-[#C5A46D] text-[#C5A46D] font-bold text-xs uppercase tracking-wider rounded-2xl shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-md"
      >
        <Calendar className="w-4 h-4 text-[#C5A46D]" />
        <span>RESERVAR MI CITA</span>
      </button>
    </div>
  );
};
