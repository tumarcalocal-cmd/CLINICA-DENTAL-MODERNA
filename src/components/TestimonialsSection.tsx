import React from 'react';
import { MessageSquareQuote } from 'lucide-react';
import { DEMO_TESTIMONIALS } from '../data/dentalData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 sm:py-20 bg-[#FAF9F6] text-[#41474D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest block">
            Reseñas y experiencias
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F]">
            Espacio preparado para testimonios
          </h2>
          <p className="text-sm text-[#41474D] leading-relaxed">
            Muestras demostrativas destinadas a presentar reseñas reales y autorizadas de pacientes de la clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEMO_TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E8E9E7] rounded-2xl p-6 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <MessageSquareQuote className="w-5 h-5 text-[#C5A46D]" />
                <p className="text-sm text-[#41474D] leading-relaxed">
                  {item.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E9E7] text-xs space-y-0.5">
                <span className="font-bold text-[#10283F] block">{item.label}</span>
                <span className="text-gray-500 block">{item.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
