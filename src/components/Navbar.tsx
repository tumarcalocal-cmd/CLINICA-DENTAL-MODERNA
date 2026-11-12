import React, { useState } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { DentalLogo } from './DentalLogo';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'tratamientos', label: 'Tratamientos' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'contacto', label: 'Contacto' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#10283F]/95 backdrop-blur-md border-b border-[#C5A46D]/25 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('inicio');
          }}
          className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded-lg"
        >
          <div className="w-10 h-10 rounded-lg border border-[#C5A46D]/70 flex items-center justify-center bg-[#10283F] group-hover:border-[#C5A46D] transition-colors">
            <DentalLogo className="w-6 h-6 text-[#C5A46D]" />
          </div>
          <span className="font-serif-luxury text-lg sm:text-xl font-semibold tracking-tight text-white whitespace-nowrap">
            Clínica Dental Moderna
          </span>
        </a>

        {/* Desktop Nav Zone: 5 concise options */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleLinkClick(item.id)}
              className="text-gray-200 hover:text-[#C5A46D] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] rounded"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop Primary Action */}
        <div className="hidden lg:flex items-center shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('citas')}
            className="px-5 py-2.5 bg-[#C5A46D] hover:bg-[#b38f56] text-[#10283F] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar cita</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden p-2.5 text-gray-200 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] cursor-pointer"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#10283F] border-t border-[#C5A46D]/20 px-4 sm:px-6 py-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleLinkClick(item.id)}
              className="block w-full text-left px-3 py-3 text-base font-medium text-gray-200 hover:text-[#C5A46D] hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 mt-2 border-t border-white/10">
            <button
              type="button"
              onClick={() => handleLinkClick('citas')}
              className="w-full py-3.5 px-4 bg-[#C5A46D] hover:bg-[#b38f56] text-[#10283F] font-bold text-sm uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar cita</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
