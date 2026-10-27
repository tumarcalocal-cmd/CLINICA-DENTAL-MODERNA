import React from 'react';
import { DOCTOR_PROFILES } from '../data/dentalData';
import { DoctorProfile } from '../types/dental';
import { Calendar, Info } from 'lucide-react';

interface DentalTeamProps {
  onSelectDoctorForBooking: (docId: string) => void;
}

export const DentalTeam: React.FC<DentalTeamProps> = ({ onSelectDoctorForBooking }) => {
  return (
    <section id="equipo" className="py-20 bg-[#FAF9F6] text-[#41474D] border-t border-[#E8E9E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest">
            EQUIPO ODONTOLÓGICO ILUSTRATIVO
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F]">
            PROFESIONALES DEDICADOS AL CUIDADO DE TU SONRISA.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Conoce los perfiles de demostración técnica preparados para exhibir la asignación de profesionales por especialidad.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTOR_PROFILES.map((doc: DoctorProfile) => (
            <div 
              key={doc.id}
              className="bg-white border border-[#E8E9E7] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#10283F]/90 text-white text-[10px] font-bold px-3 py-1 rounded-md border border-[#C5A46D]/30">
                    {doc.specialty}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#10283F]">{doc.name}</h3>
                  <p className="text-xs font-bold text-[#C5A46D] uppercase tracking-wider">{doc.title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{doc.description}</p>
                  
                  <div className="pt-2 text-[11px] text-gray-500 font-medium">
                    <span>Días de atención: {doc.scheduleDays}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectDoctorForBooking(doc.id)}
                  className="w-full py-2.5 bg-[#10283F] hover:bg-[#183a5a] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#C5A46D]" />
                  <span>SOLICITAR CITA CON {doc.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Notice */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-[#E8E9E7] flex items-center gap-3 text-xs text-gray-500 max-w-2xl mx-auto">
          <Info className="w-5 h-5 text-[#C5A46D] shrink-0" />
          <p>
            <strong>Aviso de Demostración:</strong> Los perfiles anteriores son ejemplos ficticios para la demostración comercial. Una clínica real incorporará aquí la información de sus odontólogos y certificaciones verificadas.
          </p>
        </div>

      </div>
    </section>
  );
};
