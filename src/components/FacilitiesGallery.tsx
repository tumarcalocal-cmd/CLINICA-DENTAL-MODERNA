import React from 'react';
import { Sparkles } from 'lucide-react';

export const FacilitiesGallery: React.FC = () => {
  const facilities = [
    {
      title: 'Consultorio Dental Moderno',
      category: 'Atención Clínica',
      image: '/src/assets/images/facility_operatory_1793080046191.jpg',
      description: 'Gabinete diseñado para máxima comodidad, iluminación regulada e higiene estricta.'
    },
    {
      title: 'Área de Recepción Elegante',
      category: 'Entorno Luxury',
      image: '/src/assets/images/facility_reception_1793080046298.jpg',
      description: 'Ambiente acogedor y sofisticado pensado para una espera tranquila e higiénica.'
    },
    {
      title: 'Sillón Odontológico Ergonómico',
      category: 'Tecnología Contemporánea',
      image: '/src/assets/images/hero_dental_clinic_1793080046089.jpg',
      description: 'Equipamiento automatizado con soporte anatómico de última generación.'
    },
    {
      title: 'Diagnóstico Digital Intraoral',
      category: 'Diagnóstico 3D',
      image: '/src/assets/images/treatment_aesthetics_1793080046514.jpg',
      description: 'Pantallas de alta resolución para visualizar el plan de tratamiento en tiempo real.'
    }
  ];

  return (
    <section className="py-20 bg-white text-[#41474D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#C5A46D]" />
            INSTALACIONES & EQUIPAMIENTO
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F]">
            UN ENTORNO DISEÑADO PARA TU COMODIDAD.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Espacios concebidos para ofrecer tranquilidad, estándares de bioseguridad rigurosos e instrumental odontológico contemporáneo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => (
            <div 
              key={idx}
              className="bg-[#FAF9F6] border border-[#E8E9E7] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#10283F]/90 text-[#C5A46D] text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                  {fac.category}
                </div>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-serif-luxury text-base font-bold text-[#10283F]">{fac.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{fac.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
