import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/dentalData';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#FAF9F6] text-[#41474D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-[#C5A46D]" />
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F]">
            PREGUNTAS FRECUENTES SOBRE ATENCIÓN DENTAL.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Respuestas oportunas para brindarte total tranquilidad en la solicitud de tus citas y la consulta de presupuestos.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={item.id}
                className="bg-white border border-[#E8E9E7] rounded-xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left font-serif-luxury font-bold text-[#10283F] text-base flex justify-between items-center gap-4 hover:bg-[#FAF9F6] transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#C5A46D] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-[#E8E9E7]/60">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Clinical Disclaimer Box */}
        <div className="mt-10 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
          <p>
            <strong>Aviso de Diagnóstico:</strong> La información contenida en esta web no reemplaza el diagnóstico presencial realizado por un cirujano dentista o especialista habilitado.
          </p>
        </div>

      </div>
    </section>
  );
};
