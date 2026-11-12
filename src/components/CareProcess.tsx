import React from 'react';
import { Search, FileText, Calendar, Send } from 'lucide-react';

export const CareProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Explora Tratamientos',
      description: 'Recorre nuestras especialidades odontológicas y conoce cada procedimiento.',
      icon: Search
    },
    {
      number: '02',
      title: 'Solicita tu Cotización',
      description: 'Indica el tratamiento de tu interés para recibir orientación personalizada.',
      icon: FileText
    },
    {
      number: '03',
      title: 'Selecciona Fecha & Hora',
      description: 'Elige en el calendario interactivo el horario que mejor se adapte a ti.',
      icon: Calendar
    },
    {
      number: '04',
      title: 'Confirma tu Solicitud',
      description: 'Envía tus datos y nuestro equipo verificará la disponibilidad para tu cita.',
      icon: Send
    }
  ];

  return (
    <section className="py-20 bg-[#10283F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest">
            PASO A PASO SIMPLE
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white">
            TU PRÓXIMA CITA, EN POCOS PASOS.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Una experiencia digital fluida para planificar tu cuidado dental sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const IconComp = step.icon;
            return (
              <div 
                key={step.number}
                className="bg-[#183a5a]/70 border border-[#C5A46D]/30 p-6 rounded-2xl relative space-y-4 hover:border-[#C5A46D] transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-serif-luxury text-3xl font-extrabold text-[#C5A46D]">
                    {step.number}
                  </span>
                  <div className="p-3 rounded-xl bg-[#10283F] border border-[#C5A46D]/40 text-[#C5A46D]">
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif-luxury text-lg font-bold text-white">{step.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
