import React, { useState } from 'react';
import { SPECIALTY_CATEGORIES, DENTAL_TREATMENTS } from '../data/dentalData';
import { SpecialtyCategory, DentalTreatment } from '../types/dental';
import { Clock, PlusCircle, CalendarCheck, Info, Check } from 'lucide-react';

interface SpecialtiesCatalogProps {
  onAddTreatmentToCotizador: (treatment: DentalTreatment) => void;
  onBookTreatment: (treatment: DentalTreatment) => void;
  addedTreatmentIds: string[];
}

export const SpecialtiesCatalog: React.FC<SpecialtiesCatalogProps> = ({
  onAddTreatmentToCotizador,
  onBookTreatment,
  addedTreatmentIds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<SpecialtyCategory>('TODAS');

  const filteredTreatments = selectedCategory === 'TODAS'
    ? DENTAL_TREATMENTS
    : DENTAL_TREATMENTS.filter(t => t.specialty === selectedCategory);

  return (
    <section id="tratamientos" className="py-20 bg-white text-[#41474D] border-y border-[#E8E9E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest">
            CATÁLOGO ODONTOLÓGICO COMPLETO
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F]">
            DESCUBRE LOS TRATAMIENTOS PARA TU SONRISA.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Explora las especialidades odontológicas disponibles. Puedes consultar los detalles, revisar precios orientativos e incorporar los tratamientos al cotizador o agendar tu cita directamente.
          </p>
        </div>

        {/* Category Tabs (Segmented controls / buttons) */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-10 border-b border-[#E8E9E7]">
          {SPECIALTY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#10283F] text-[#C5A46D] shadow-md'
                  : 'bg-[#FAF9F6] text-[#41474D] hover:bg-[#E8E9E7] border border-[#E8E9E7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTreatments.map((treatment) => {
            const isAdded = addedTreatmentIds.includes(treatment.id);

            return (
              <div 
                key={treatment.id}
                className="bg-[#FAF9F6] border border-[#E8E9E7] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={treatment.image} 
                      alt={treatment.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#10283F]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider border border-[#C5A46D]/30">
                      {treatment.specialty}
                    </div>
                    {treatment.recommended && (
                      <div className="absolute top-3 right-3 bg-[#C5A46D] text-[#10283F] text-[10px] font-extrabold px-2 py-1 rounded uppercase tracking-wider shadow">
                        Destacado
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-serif-luxury text-lg font-bold text-[#10283F] leading-snug">
                        {treatment.name}
                      </h3>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed min-h-[3rem]">
                      {treatment.description}
                    </p>

                    <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E8E9E7]">
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <Clock className="w-4 h-4 text-[#C5A46D]" />
                        <span>Duración: {treatment.indicativeDuration}</span>
                      </div>
                      
                      {/* Price tag */}
                      <div className="text-right">
                        <span className="text-[10px] text-gray-400 uppercase block">Precio ilustrativo</span>
                        <span className="font-bold text-base text-[#10283F]">
                          ${treatment.priceUSD} USD
                          {treatment.allowsQuantity && <span className="text-[10px] font-normal text-gray-500"> /{treatment.unitLabel || 'unidad'}</span>}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => onAddTreatmentToCotizador(treatment)}
                    className={`w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'bg-[#10283F] hover:bg-[#183a5a] text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>AGREGADO AL COTIZADOR</span>
                      </>
                    ) : (
                      <>
                        <PlusCircle className="w-4 h-4 text-[#C5A46D]" />
                        <span>AGREGAR AL COTIZADOR</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onBookTreatment(treatment)}
                    className="w-full py-2 px-4 bg-transparent hover:bg-[#C5A46D]/10 text-[#10283F] border border-[#10283F]/30 hover:border-[#10283F] text-xs font-semibold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CalendarCheck className="w-4 h-4 text-[#C5A46D]" />
                    <span>SOLICITAR CITA</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Clinical indication note */}
        <div className="mt-12 p-4 rounded-xl bg-[#FAF9F6] border border-[#E8E9E7] flex items-center gap-3 text-xs text-gray-600 max-w-2xl mx-auto">
          <Info className="w-5 h-5 text-[#C5A46D] shrink-0" />
          <p>
            <strong>Nota clínica:</strong> Los tratamientos mostrados no son apropiados para todos los pacientes de forma indistinta. La indicación definitiva depende de la valoración clínica odontológica.
          </p>
        </div>

      </div>
    </section>
  );
};
