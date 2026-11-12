import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CORE_TREATMENTS } from '../data/dentalData';
import { SafeImage } from './SafeImage';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onSelectTreatment }) => {
  return (
    <section id="tratamientos" className="py-16 sm:py-20 bg-white text-[#41474D] border-b border-[#E8E9E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-14">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest block">
            Tratamientos odontológicos
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F] [text-wrap:balance]">
            Soluciones pensadas para el cuidado de tu sonrisa.
          </h2>
        </div>

        {/* 6 Treatments Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CORE_TREATMENTS.map((treatment) => (
            <article
              key={treatment.id}
              className="bg-[#FAF9F6] border border-[#E8E9E7] rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-200"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#E8E9E7]">
                  <SafeImage
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-6 space-y-2.5">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#10283F]">
                    {treatment.name}
                  </h3>
                  <p className="text-sm text-[#41474D] leading-relaxed line-clamp-2">
                    {treatment.shortDescription}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-1">
                <button
                  type="button"
                  onClick={() => onSelectTreatment(treatment.name)}
                  className="w-full py-3 px-4 bg-[#10283F] hover:bg-[#183a5a] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Consultar tratamiento</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A46D]" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
