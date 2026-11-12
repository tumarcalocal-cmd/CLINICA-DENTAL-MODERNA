import React from 'react';
import { Calendar, ArrowDown } from 'lucide-react';
import { HERO_IMAGE } from '../data/dentalData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreTreatments }) => {
  return (
    <section
      id="inicio"
      className="bg-[#10283F] text-white py-12 sm:py-16 lg:py-24 border-b border-[#C5A46D]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.12] [text-wrap:balance]">
              Tu sonrisa merece una atención excepcional.
            </h1>

            <p className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
              Odontología moderna, atención personalizada y tecnología avanzada para cuidar tu sonrisa.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-4 bg-[#C5A46D] hover:bg-[#b38f56] text-[#10283F] text-sm font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar mi cita</span>
              </button>

              <button
                type="button"
                onClick={onExploreTreatments}
                className="px-7 py-4 bg-transparent hover:bg-white/10 text-white border border-white/35 hover:border-white text-sm font-semibold tracking-wide rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Ver tratamientos</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] lg:aspect-[16/11] rounded-2xl overflow-hidden border border-[#C5A46D]/35 shadow-2xl bg-[#183a5a]">
              <SafeImage
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                loading="eager"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
