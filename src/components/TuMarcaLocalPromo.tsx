import React from 'react';
import { MessageSquare, Sparkles, ExternalLink } from 'lucide-react';

export const TuMarcaLocalPromo: React.FC = () => {
  const whatsappUrl = "https://wa.me/50765278910?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20p%C3%A1gina%20web";

  return (
    <section className="bg-gradient-to-r from-[#10283F] via-[#183a5a] to-[#10283F] text-white py-16 border-t-2 border-[#C5A46D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        
        {/* Discrete Top Strip */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A46D]/20 border border-[#C5A46D]/40 text-[#C5A46D] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-4 h-4 text-[#C5A46D]" />
          <span>DEMOSTRACIÓN WEB CREADA POR TU MARCA LOCAL</span>
        </div>

        {/* Section Heading & Text */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            ¿QUIERES UNA PÁGINA ASÍ PARA TU CLÍNICA DENTAL?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Presenta tus tratamientos, muestra tarifas orientativas, facilita solicitudes de presupuesto y permite que tus pacientes soliciten citas desde una página web profesional.
          </p>
          <p className="text-xs text-gray-400 italic leading-relaxed max-w-2xl mx-auto pt-2">
            Comunícate por WhatsApp únicamente si tienes alguna duda sobre cómo obtener una página web similar para tu clínica que no esté explicada en esta demostración.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C5A46D] hover:bg-[#b38f56] text-[#10283F] font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-2xl hover:scale-105"
          >
            <MessageSquare className="w-5 h-5 text-[#10283F]" />
            <span>ESCRIBIR POR WHATSAPP</span>
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>
        </div>

      </div>
    </section>
  );
};
