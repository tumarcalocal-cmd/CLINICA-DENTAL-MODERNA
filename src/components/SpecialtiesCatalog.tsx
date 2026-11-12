import React, { useState } from 'react';
import { SPECIALTY_CAROUSEL_ITEMS } from '../data/dentalData';
import { SpecialtyCategory } from '../types/dental';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle2, Info } from 'lucide-react';

interface SpecialtiesCatalogProps {
  onRequestQuote: (specialty: SpecialtyCategory, treatmentName?: string) => void;
}

export const SpecialtiesCatalog: React.FC<SpecialtiesCatalogProps> = ({ onRequestQuote }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = SPECIALTY_CAROUSEL_ITEMS.length;
  const currentSlide = SPECIALTY_CAROUSEL_ITEMS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section id="tratamientos" className="py-20 bg-white text-[#41474D] border-y border-[#E8E9E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest">
            ESPECIALIDADES ODONTOLÓGICAS
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F]">
            DESCUBRE LOS TRATAMIENTOS PARA TU SONRISA.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Recorre nuestras especialidades en el carrusel para conocer en detalle cada tratamiento y solicita tu cotización personalizada en un clic.
          </p>
        </div>

        {/* Specialty Tabs Bar */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8 border-b border-[#E8E9E7]">
          {SPECIALTY_CAROUSEL_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeIndex === idx
                  ? 'bg-[#10283F] text-[#C5A46D] shadow-md'
                  : 'bg-[#FAF9F6] text-[#41474D] hover:bg-[#E8E9E7] border border-[#E8E9E7]'
              }`}
            >
              {item.specialty}
            </button>
          ))}
        </div>

        {/* Carousel Showcase Card */}
        <div className="relative bg-[#FAF9F6] border border-[#E8E9E7] rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* Left Column: Unique Specialty Photo (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[480px] bg-[#10283F]">
              <img
                src={currentSlide.image}
                alt={currentSlide.imageAlt}
                className="w-full h-full object-cover lg:absolute lg:inset-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10283F]/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Left Caption inside image */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold text-[#C5A46D] uppercase tracking-widest block">
                    0{activeIndex + 1} / 0{totalSlides}
                  </span>
                  <p className="text-white text-sm font-semibold mt-0.5">
                    {currentSlide.subtitle}
                  </p>
                </div>

                {/* Prev/Next Navigation Arrows */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Especialidad anterior"
                    className="w-10 h-10 rounded-full bg-[#10283F]/90 hover:bg-[#C5A46D] text-white hover:text-[#10283F] border border-[#C5A46D]/40 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Siguiente especialidad"
                    className="w-10 h-10 rounded-full bg-[#10283F]/90 hover:bg-[#C5A46D] text-white hover:text-[#10283F] border border-[#C5A46D]/40 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Explanation + Single CTA (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="space-y-2 border-b border-[#E8E9E7] pb-5">
                  <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest block">
                    ESPECIALIDAD ODONTOLÓGICA
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#10283F]">
                    {currentSlide.specialty}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed pt-1">
                    {currentSlide.overview}
                  </p>
                </div>

                {/* Clean Treatments Explanation List (No prices, no durations) */}
                <div className="space-y-4">
                  <span className="text-xs font-bold text-[#10283F] uppercase tracking-wider block">
                    Tratamientos incluidos en esta especialidad:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentSlide.treatments.map((treatment) => (
                      <div
                        key={treatment.id}
                        className="p-4 rounded-xl bg-white border border-[#E8E9E7] space-y-1.5"
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                          <h4 className="font-bold text-sm text-[#10283F] leading-snug">
                            {treatment.name}
                          </h4>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed pl-6">
                          {treatment.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Single Action Button & Carousel Dots */}
              <div className="pt-4 border-t border-[#E8E9E7] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onRequestQuote(currentSlide.specialty, currentSlide.treatments[0]?.name)}
                  className="w-full sm:w-auto px-8 py-4 bg-[#10283F] hover:bg-[#183a5a] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap"
                >
                  <span>SOLICITAR COTIZACIÓN</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A46D]" />
                </button>

                {/* Slide Dot Indicators */}
                <div className="flex items-center gap-2">
                  {SPECIALTY_CAROUSEL_ITEMS.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Ver ${item.specialty}`}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeIndex === idx
                          ? 'w-8 bg-[#C5A46D]'
                          : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Clinical indication note */}
        <div className="mt-8 p-4 rounded-xl bg-[#FAF9F6] border border-[#E8E9E7] flex items-center gap-3 text-xs text-gray-600 max-w-3xl mx-auto">
          <Info className="w-5 h-5 text-[#C5A46D] shrink-0" />
          <p>
            <strong>Nota clínica:</strong> Cada tratamiento se indica únicamente tras una evaluación odontológica personalizada. Solicita tu cotización o valoración para recibir orientación adaptada a tu caso.
          </p>
        </div>

      </div>
    </section>
  );
};
