import React from 'react';
import { Clock, MapPin, Phone, Mail, Navigation } from 'lucide-react';

export const HoursAndLocation: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 bg-[#FAF9F6] text-[#41474D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#C5A46D]" />
            UBICACIÓN & ATENCIÓN
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F]">
            ESTAMOS PREPARADOS PARA RECIBIRTE.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Consulte nuestra ubicación geográfica de referencia y horarios de atención al paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info & Schedule Card - Left 5 Cols */}
          <div className="lg:col-span-5 bg-[#10283F] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-8 shadow-xl">
            
            <div className="space-y-6">
              <div>
                <span className="text-[10px] text-[#C5A46D] font-bold uppercase tracking-widest block">INFORMACIÓN Y HORARIOS</span>
                <h3 className="font-serif-luxury text-2xl font-bold text-white mt-1">Sede de Demostración</h3>
              </div>

              {/* Schedule List */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C5A46D] uppercase">
                  <Clock className="w-4 h-4" />
                  <span>Horarios de Atención:</span>
                </div>

                <div className="space-y-2 text-xs bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-300">Lunes a Viernes:</span>
                    <span className="font-bold text-white">8:00 a. m. – 6:00 p. m.</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-300">Sábados:</span>
                    <span className="font-bold text-white">8:00 a. m. – 2:00 p. m.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Domingos & Feriados:</span>
                    <span className="font-bold text-red-300">Cerrado</span>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 text-xs pt-2">
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Dirección de Referencia:</span>
                    <span>Ciudad de Panamá, Capital (Referencia geográfica para demostración comercial)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4 text-[#C5A46D] shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Teléfono de Consulta:</span>
                    <span>Línea configurable por clínica cliente</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4 text-[#C5A46D] shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Correo Electrónico:</span>
                    <span>contacto@clinicadentalmoderna.demo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="https://maps.google.com/?q=Ciudad+de+Panama,+Panama"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#C5A46D] hover:bg-[#b38f56] text-[#10283F] font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>VER EN GOOGLE MAPS</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Maps Embed - Right 7 Cols */}
          <div className="lg:col-span-7 bg-white border border-[#E8E9E7] rounded-2xl overflow-hidden shadow-xl min-h-[400px]">
            <iframe
              title="Google Maps Ciudad de Panamá, Capital"
              src="https://maps.google.com/maps?q=Ciudad%20de%20Panam%C3%A1,%20Panam%C3%A1&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
