import React, { useState } from 'react';
import { Calendar, Menu, X, Sparkles, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenLegal: (tab: 'privacy' | 'terms' | 'disclaimer') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#10283F]/95 backdrop-blur-md border-b border-[#C5A46D]/30 text-white shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single-element Brand Wordmark */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 shrink-0 group"
        >
          <div className="w-10 h-10 rounded-full border border-[#C5A46D] flex items-center justify-center bg-[#10283F] group-hover:border-white transition-colors">
            <Sparkles className="w-5 h-5 text-[#C5A46D]" />
          </div>
          <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap">
            CLÍNICA DENTAL MODERNA
          </span>
        </a>

        {/* Zone 2: 5 Navigation Links (Single Line) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide">
          <button 
            onClick={() => scrollToSection('tratamientos')}
            className="text-gray-200 hover:text-[#C5A46D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Tratamientos
          </button>
          <button 
            onClick={() => scrollToSection('cotizador')}
            className="text-gray-200 hover:text-[#C5A46D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Cotizador
          </button>
          <button 
            onClick={() => scrollToSection('reserva')}
            className="text-gray-200 hover:text-[#C5A46D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Reserva de Citas
          </button>
          <button 
            onClick={() => scrollToSection('equipo')}
            className="text-gray-200 hover:text-[#C5A46D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Equipo Odontológico
          </button>
          <button 
            onClick={() => scrollToSection('ubicacion')}
            className="text-gray-200 hover:text-[#C5A46D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Ubicación & Horarios
          </button>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button 
            onClick={onOpenBooking}
            className="px-5 py-2.5 bg-[#C5A46D] hover:bg-[#b38f56] text-[#10283F] text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>RESERVAR CITA</span>
          </button>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-200 hover:text-white rounded-md focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#10283F] border-b border-[#C5A46D]/20 px-6 py-6 space-y-4">
          <button 
            onClick={() => scrollToSection('tratamientos')}
            className="block w-full text-left py-2 text-base font-medium text-gray-200 hover:text-[#C5A46D]"
          >
            Tratamientos
          </button>
          <button 
            onClick={() => scrollToSection('cotizador')}
            className="block w-full text-left py-2 text-base font-medium text-gray-200 hover:text-[#C5A46D]"
          >
            Cotizador
          </button>
          <button 
            onClick={() => scrollToSection('reserva')}
            className="block w-full text-left py-2 text-base font-medium text-gray-200 hover:text-[#C5A46D]"
          >
            Reserva de Citas
          </button>
          <button 
            onClick={() => scrollToSection('equipo')}
            className="block w-full text-left py-2 text-base font-medium text-gray-200 hover:text-[#C5A46D]"
          >
            Equipo Odontológico
          </button>
          <button 
            onClick={() => scrollToSection('ubicacion')}
            className="block w-full text-left py-2 text-base font-medium text-gray-200 hover:text-[#C5A46D]"
          >
            Ubicación & Horarios
          </button>

          <div className="pt-4 border-t border-gray-700/50">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3 bg-[#C5A46D] hover:bg-[#b38f56] text-[#10283F] font-bold text-xs uppercase tracking-wider rounded-md flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>RESERVAR MI CITA</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
