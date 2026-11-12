import React from 'react';
import { ExternalLink } from 'lucide-react';
import { DentalLogo } from './DentalLogo';
import { CLINIC_CONFIG } from '../config/clinicConfig';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#10283F] text-gray-300 border-t border-[#C5A46D]/25 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg border border-[#C5A46D]/70 flex items-center justify-center bg-[#10283F]">
                <DentalLogo className="w-5 h-5 text-[#C5A46D]" />
              </div>
              <span className="font-serif-luxury text-lg font-semibold text-white">
                {CLINIC_CONFIG.clinicName}
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              {CLINIC_CONFIG.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-[#C5A46D] uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('tratamientos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tratamientos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('nosotros')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('citas')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Agendar cita
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Demo Identification & Tu Marca Local CTA */}
          <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
            <p className="text-xs text-gray-200 font-medium leading-relaxed">
              Sitio web demostrativo desarrollado por <strong>Tu Marca Local</strong>.
            </p>
            <a
              href={CLINIC_CONFIG.agencyContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 bg-[#C5A46D] hover:bg-[#b38f56] text-[#10283F] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
            >
              <span>Quiero una página como esta</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {CLINIC_CONFIG.clinicName}. Modelo demostrativo.</span>
          <span>Sitio web demostrativo desarrollado por Tu Marca Local.</span>
        </div>
      </div>
    </footer>
  );
};
