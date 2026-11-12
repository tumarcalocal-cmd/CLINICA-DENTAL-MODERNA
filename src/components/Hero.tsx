import React from 'react';
import { Calendar, ChevronRight, ShieldCheck, Microscope, Smile } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreTreatments }) => {
  return (
    <section className="relative bg-[#10283F] text-white overflow-hidden py-16 lg:py-24 border-b border-[#C5A46D]/20">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#10283F] via-[#10283F]/90 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content - Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A46D]/15 border border-[#C5A46D]/40 text-[#C5A46D] text-xs font-semibold tracking-wide uppercase">
              <span>CLÍNICA DENTAL DE DEMOSTRACIÓN · PANAMÁ</span>
            </div>

            {/* Title */}
            <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              TU SONRISA MERECE UNA ATENCIÓN EXCEPCIONAL.
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Descubre una nueva experiencia en cuidado dental, con tratamientos odontológicos, tecnología moderna y atención personalizada para cuidar la salud y la estética de tu sonrisa.
            </p>

            {/* Action Buttons & Indicator */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-4 bg-[#C5A46D] hover:bg-[#b38f56] text-[#10283F] text-sm font-bold uppercase tracking-wider rounded-md transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group cursor-pointer"
                >
                  <Calendar className="w-5 h-5 text-[#10283F]" />
                  <span>RESERVAR MI CITA</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onExploreTreatments}
                  className="px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white text-sm font-semibold tracking-wider rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>EXPLORAR TRATAMIENTOS</span>
                </button>
              </div>

              {/* Indicator of Availability */}
              <div className="flex items-center gap-2 text-xs text-[#C5A46D] font-medium pt-1">
                <span>CONSULTA LOS HORARIOS DISPONIBLES PARA TU CITA.</span>
              </div>
            </div>

            {/* Three Key Attributes */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white/5 border border-[#C5A46D]/30 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#C5A46D]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Atención personalizada</h4>
                  <p className="text-xs text-gray-400 mt-1">Tratamientos a la medida de tu salud bucal.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white/5 border border-[#C5A46D]/30 shrink-0">
                  <Microscope className="w-5 h-5 text-[#C5A46D]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Tecnología dental moderna</h4>
                  <p className="text-xs text-gray-400 mt-1">Equipamiento contemporáneo de precisión.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white/5 border border-[#C5A46D]/30 shrink-0">
                  <Smile className="w-5 h-5 text-[#C5A46D]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Cada sonrisa cuenta</h4>
                  <p className="text-xs text-gray-400 mt-1">Soluciones integrales de estética y salud.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Editorial Image - Right Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C5A46D]/40 shadow-2xl group">
              <img
                src="/src/assets/images/hero_dental_clinic_1793080046089.jpg"
                alt="Odontóloga latinoamericana atendiendo paciente en clínica dental moderna"
                className="w-full h-[450px] lg:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10283F] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#10283F]/90 backdrop-blur-md border border-[#C5A46D]/30">
                <p className="text-xs text-[#C5A46D] font-bold uppercase tracking-wider">Entorno odontológico luxury</p>
                <p className="text-xs text-gray-200 mt-1">Fotografía editorial de demostración con odontólogos latinoamericanos y tecnología de vanguardia.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
