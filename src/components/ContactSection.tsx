import React from 'react';
import { MapPin, Clock, Phone, MessageSquare } from 'lucide-react';
import { CLINIC_CONFIG, buildWhatsAppUrl } from '../config/clinicConfig';

export const ContactSection: React.FC = () => {
  const handleOpenWhatsApp = () => {
    const url = buildWhatsAppUrl(
      CLINIC_CONFIG.clinicWhatsappNumber,
      `Hola, me gustaría recibir información sobre ${CLINIC_CONFIG.clinicName}.`
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const hasConfiguredMap = Boolean(CLINIC_CONFIG.mapEmbedUrl.trim());

  return (
    <section id="contacto" className="py-16 sm:py-20 bg-white text-[#41474D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest block">
            Contacto y ubicación
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F]">
            Información de atención
          </h2>
          <p className="text-sm text-[#41474D] leading-relaxed">
            Datos configurables para la sede, horarios y canal directo de WhatsApp de la clínica.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 gap-8 items-stretch ${
            hasConfiguredMap ? 'lg:grid-cols-12' : 'max-w-3xl mx-auto'
          }`}
        >
          {/* Contact Details Card */}
          <div
            className={`${
              hasConfiguredMap ? 'lg:col-span-5' : ''
            } bg-[#FAF9F6] border border-[#E8E9E7] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8`}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-[#10283F] uppercase tracking-wider">
                    Dirección
                  </h3>
                  <p className="text-sm text-[#41474D]">
                    {CLINIC_CONFIG.clinicAddress || 'Dirección configurable según la ubicación real de la clínica.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-[#10283F] uppercase tracking-wider">
                    Horario de atención
                  </h3>
                  <div className="text-sm text-[#41474D] space-y-1">
                    {CLINIC_CONFIG.clinicHours.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-[#10283F] uppercase tracking-wider">
                    Teléfono
                  </h3>
                  <p className="text-sm text-[#41474D]">
                    {CLINIC_CONFIG.clinicPhoneDisplay || 'Número telefónico configurable de la clínica.'}
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleOpenWhatsApp}
              className="w-full py-3.5 px-5 bg-[#10283F] hover:bg-[#183a5a] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A46D]" />
              <span>Contactar por WhatsApp</span>
            </button>
          </div>

          {/* Conditional Map — rendered ONLY when a real location URL is configured */}
          {hasConfiguredMap && (
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E8E9E7] min-h-[340px]">
              <iframe
                title={`Mapa de ubicación de ${CLINIC_CONFIG.clinicName}`}
                src={CLINIC_CONFIG.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
