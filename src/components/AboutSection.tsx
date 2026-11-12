import React from 'react';
import { ABOUT_IMAGE } from '../data/dentalData';
import { SafeImage } from './SafeImage';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 sm:py-20 bg-[#FAF9F6] text-[#41474D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Clinic Photo */}
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#E8E9E7] shadow-lg bg-[#E8E9E7]">
              <SafeImage
                src={ABOUT_IMAGE.src}
                alt={ABOUT_IMAGE.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Concise About Copy */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest block">
              Sobre la clínica
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F] leading-snug [text-wrap:balance]">
              Cuidamos tu sonrisa con dedicación y tecnología.
            </h2>
            <p className="text-base text-[#41474D] leading-relaxed">
              En Clínica Dental Moderna combinamos odontología preventiva, tratamientos restauradores y estética dental en un espacio tranquilo, higienizado y diseñado para brindarte información clara desde tu primera consulta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
