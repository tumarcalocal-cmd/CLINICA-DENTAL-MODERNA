import React from 'react';
import { MessageSquare } from 'lucide-react';
import { CLINIC_CONFIG, buildWhatsAppUrl } from '../config/clinicConfig';

export const WhatsAppFloatingButton: React.FC = () => {
  const handleClick = () => {
    const url = buildWhatsAppUrl(
      CLINIC_CONFIG.clinicWhatsappNumber,
      `Hola, quisiera consultar sobre una cita en ${CLINIC_CONFIG.clinicName}.`
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Solicitar información por WhatsApp"
      className="fixed bottom-5 right-5 z-30 w-13 h-13 rounded-full bg-[#10283F] hover:bg-[#183a5a] text-[#C5A46D] border-2 border-[#C5A46D] shadow-xl flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
    >
      <MessageSquare className="w-5 h-5" />
    </button>
  );
};
