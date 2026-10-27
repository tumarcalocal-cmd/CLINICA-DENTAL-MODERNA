import React from 'react';
import { PATIENT_REVIEWS } from '../data/dentalData';
import { Star, MessageSquareQuote, Info } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white text-[#41474D] border-t border-[#E8E9E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest flex items-center justify-center gap-1.5">
            <MessageSquareQuote className="w-4 h-4 text-[#C5A46D]" />
            EXPERIENCIAS DE PACIENTES
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F]">
            LA CONFIANZA COMIENZA CON UNA BUENA EXPERIENCIA.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Sección preparada para exhibir testimonios y valoraciones auténticas de pacientes satisfechos con su atención odontológica.
          </p>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATIENT_REVIEWS.map((rev) => (
            <div 
              key={rev.id}
              className="bg-[#FAF9F6] border border-[#E8E9E7] p-6 rounded-2xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#C5A46D]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A46D]" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E9E7] flex justify-between items-center text-xs">
                <div>
                  <span className="font-bold text-[#10283F] block">{rev.author}</span>
                  <span className="text-[10px] text-gray-400 block">{rev.treatment}</span>
                </div>
                <span className="text-[10px] text-gray-400">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Notice */}
        <div className="mt-10 p-3 rounded-lg bg-[#FAF9F6] border border-[#E8E9E7] text-[11px] text-gray-500 text-center max-w-xl mx-auto flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-[#C5A46D]" />
          <span>Muestras ilustrativas de testimonios preparadas para integración de reseñas reales.</span>
        </div>

      </div>
    </section>
  );
};
