import React from 'react';
import { HeartPulse, UserCheck, Stethoscope, FileText, Info } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-[#FAF9F6] text-[#41474D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Gallery Image & Demo Card - 5 Cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E9E7] shadow-xl">
              <img
                src="/src/assets/images/facility_reception_1793080046298.jpg"
                alt="Recepción de Clínica Dental Moderna"
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#10283F]/90 text-[#C5A46D] px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider border border-[#C5A46D]/30">
                Instalaciones Luxury
              </div>
            </div>

            {/* Fictitious Notice */}
            <div className="p-4 rounded-xl bg-[#E8E9E7]/60 border border-gray-300 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#10283F] shrink-0 mt-0.5" />
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong className="text-[#10283F]">Demostración Comercial:</strong> Clínica Dental Moderna es una entidad ficticia diseñada para exhibir las capacidades web, cotizador y motor de reservas desarrollados por <strong>Tu Marca Local</strong>.
              </p>
            </div>
          </div>

          {/* Content & 4 Attributes - 7 Cols */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest">
                SOBRE LA CLÍNICA
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F] mt-2 leading-snug">
                ODONTOLOGÍA MODERNA CON ATENCIÓN A CADA DETALLE.
              </h2>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              En Clínica Dental Moderna presentamos una propuesta de atención odontológica que combina prevención, tratamientos dentales y procedimientos de estética dental en un entorno profesional y acogedor.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              Nuestro objetivo es facilitar el acceso a información clara sobre los tratamientos, sus presupuestos orientativos y la solicitud de citas.
            </p>

            {/* 4 Attributes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              <div className="p-5 rounded-xl bg-white border border-[#E8E9E7] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#10283F]/5 border border-[#10283F]/10 flex items-center justify-center text-[#10283F] mb-3">
                  <HeartPulse className="w-5 h-5 text-[#C5A46D]" />
                </div>
                <h3 className="font-bold text-sm text-[#10283F] uppercase">Prevención y cuidado dental</h3>
                <p className="text-xs text-gray-500 mt-1">Enfoque preventivo para mantener la salud oral a largo plazo.</p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E8E9E7] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#10283F]/5 border border-[#10283F]/10 flex items-center justify-center text-[#10283F] mb-3">
                  <UserCheck className="w-5 h-5 text-[#C5A46D]" />
                </div>
                <h3 className="font-bold text-sm text-[#10283F] uppercase">Atención personalizada</h3>
                <p className="text-xs text-gray-500 mt-1">Planes adaptados a las necesidades y expectativas de cada paciente.</p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E8E9E7] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#10283F]/5 border border-[#10283F]/10 flex items-center justify-center text-[#10283F] mb-3">
                  <Stethoscope className="w-5 h-5 text-[#C5A46D]" />
                </div>
                <h3 className="font-bold text-sm text-[#10283F] uppercase">Tecnología odontológica</h3>
                <p className="text-xs text-gray-500 mt-1">Sistemas de exploración digital e instrumental contemporáneo.</p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E8E9E7] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#10283F]/5 border border-[#10283F]/10 flex items-center justify-center text-[#10283F] mb-3">
                  <FileText className="w-5 h-5 text-[#C5A46D]" />
                </div>
                <h3 className="font-bold text-sm text-[#10283F] uppercase">Información clara sobre tratamientos</h3>
                <p className="text-xs text-gray-500 mt-1">Transparencia en presupuestos estimativos e indicaciones.</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
