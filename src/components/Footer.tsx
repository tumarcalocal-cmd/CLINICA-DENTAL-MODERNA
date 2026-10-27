import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (tab: 'privacy' | 'terms' | 'disclaimer') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#10283F] text-gray-300 border-t border-[#C5A46D]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#C5A46D] flex items-center justify-center bg-[#10283F]">
                <Sparkles className="w-4 h-4 text-[#C5A46D]" />
              </div>
              <span className="font-serif-luxury text-xl font-bold text-white">
                CLÍNICA DENTAL MODERNA
              </span>
            </div>

            <p className="text-xs text-gray-400 italic leading-relaxed">
              "Una sonrisa saludable. Una experiencia excepcional."
            </p>

            <p className="text-xs text-gray-400 leading-relaxed">
              Plataforma web de demostración especializada en odontología, cotizaciones de tratamientos y solicitud de citas.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#C5A46D] uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToSection('tratamientos')} className="hover:text-white transition-colors">
                  Tratamientos Odontológicos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('cotizador')} className="hover:text-white transition-colors">
                  Cotizador Interactivo
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('reserva')} className="hover:text-white transition-colors">
                  Reserva de Citas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('equipo')} className="hover:text-white transition-colors">
                  Equipo Odontológico
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('ubicacion')} className="hover:text-white transition-colors">
                  Ubicación & Horarios
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#C5A46D] uppercase tracking-wider">Páginas Legales</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onOpenLegal('disclaimer')} className="hover:text-white transition-colors">
                  Descargo de Responsabilidad
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors">
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegal('terms')} className="hover:text-white transition-colors">
                  Términos y Condiciones
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Demo Notice */}
          <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10 text-xs">
            <h4 className="font-bold text-white uppercase text-[11px] text-[#C5A46D]">Aviso de Demostración</h4>
            <p className="text-gray-400 leading-relaxed text-[11px]">
              Este sitio no presta servicios odontológicos reales, no realiza diagnósticos ni confirma citas efectivas. Es un modelo comercial creado para exhibir las soluciones web desarrolladas por <strong>Tu Marca Local</strong>.
            </p>
          </div>

        </div>

        {/* Bottom Bar Credit */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} Clínica Dental Moderna. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-1 text-[#C5A46D] font-semibold">
            <span>Demostración comercial creada por</span>
            <a 
              href="https://wa.me/50765278910?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20una%20p%C3%A1gina%20web" 
              target="_blank" 
              rel="noreferrer"
              className="underline hover:text-white"
            >
              Tu Marca Local
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
