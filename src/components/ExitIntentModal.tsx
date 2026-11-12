import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { DentalLogo } from './DentalLogo';

interface ExitIntentModalProps {
  onExploreTreatments: () => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ onExploreTreatments }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Trigger on 15 seconds dwell time
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    }, 15000);

    // Trigger on mouse leave top of window
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggered]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-[#10283F] border-2 border-[#C5A46D] rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 text-white relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-xl bg-[#C5A46D]/15 border border-[#C5A46D]/70 text-[#C5A46D] flex items-center justify-center mx-auto">
          <DentalLogo className="w-7 h-7" />
        </div>

        <div className="text-center space-y-3">
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
            TU SONRISA MERECE UN MOMENTO DE ATENCIÓN.
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Explora nuestras especialidades odontológicas y solicita tu cotización o agenda tu visita de valoración.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <button
            onClick={() => {
              setIsOpen(false);
              onExploreTreatments();
            }}
            className="w-full py-4 bg-[#C5A46D] hover:bg-[#b38f56] text-[#10283F] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>EXPLORAR TRATAMIENTOS</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-2 text-xs text-gray-400 hover:text-white transition-colors"
          >
            Quizás más tarde
          </button>
        </div>

      </div>
    </div>
  );
};
