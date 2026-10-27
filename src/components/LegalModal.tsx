import React from 'react';
import { X, Shield, FileText, AlertTriangle } from 'lucide-react';

interface LegalModalProps {
  activeTab: 'privacy' | 'terms' | 'disclaimer' | null;
  onClose: () => void;
  onSelectTab: (tab: 'privacy' | 'terms' | 'disclaimer') => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ activeTab, onClose, onSelectTab }) => {
  if (!activeTab) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-[#E8E9E7] rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-[#10283F] text-white p-6 flex justify-between items-center border-b border-[#C5A46D]/30">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#C5A46D]" />
            <h3 className="font-serif-luxury text-xl font-bold">Información Legal & Transparencia</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-300 hover:text-white rounded-full hover:bg-white/10"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="bg-[#FAF9F6] border-b border-[#E8E9E7] flex px-6 pt-3 gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => onSelectTab('disclaimer')}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-t-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'disclaimer'
                ? 'bg-white text-[#10283F] border-t-2 border-x border-[#10283F]'
                : 'text-gray-500 hover:text-[#10283F]'
            }`}
          >
            Descargo de Responsabilidad
          </button>

          <button
            onClick={() => onSelectTab('privacy')}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-t-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-white text-[#10283F] border-t-2 border-x border-[#10283F]'
                : 'text-gray-500 hover:text-[#10283F]'
            }`}
          >
            Política de Privacidad
          </button>

          <button
            onClick={() => onSelectTab('terms')}
            className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-t-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-white text-[#10283F] border-t-2 border-x border-[#10283F]'
                : 'text-gray-500 hover:text-[#10283F]'
            }`}
          >
            Términos y Condiciones
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-[#41474D] leading-relaxed">
          
          {activeTab === 'disclaimer' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-sm uppercase">DESCARGO DE RESPONSABILIDAD MANDATORIO</h4>
                  <p className="text-xs leading-relaxed font-medium">
                    Clínica Dental Moderna es una clínica ficticia utilizada como demostración comercial de páginas web desarrolladas por Tu Marca Local.
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <p>
                  Los tratamientos, precios, fotografías, profesionales, horarios y citas son ejemplos ilustrativos.
                </p>
                <p>
                  Este sitio no presta servicios odontológicos, no realiza diagnósticos, no procesa pagos ni confirma citas reales.
                </p>
                <p>
                  La información de esta demostración no sustituye una evaluación realizada por un profesional de la odontología.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h4 className="font-serif-luxury text-lg font-bold text-[#10283F] flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#C5A46D]" />
                POLÍTICA DE PRIVACIDAD (DEMOSTRACIÓN)
              </h4>

              <p>
                Esta página web opera exclusivamente como una demostración técnica e ilustrativa creada por <strong>Tu Marca Local</strong>.
              </p>

              <h5 className="font-bold text-xs uppercase text-[#10283F] pt-2">1. Recopilación de Datos</h5>
              <p>
                Los formularios de cotización y reserva de cita en este sitio web únicamente procesan datos de manera local y preparan mensajes interactivos para WhatsApp. No se almacenan historiales médicos ni datos sensibles en bases de datos permanentes sin consentimiento expreso en despliegues finales de clientes.
              </p>

              <h5 className="font-bold text-xs uppercase text-[#10283F] pt-2">2. Finalidad del Tratamiento</h5>
              <p>
                Los datos introducidos por los visitantes en el cotizador o formulario de citas sirven para simular la experiencia de usuario final que tendría una clínica odontológica cliente de Tu Marca Local.
              </p>

              <h5 className="font-bold text-xs uppercase text-[#10283F] pt-2">3. Derechos del Usuario</h5>
              <p>
                Los usuarios pueden abstenerse de ingresar datos personales reales en esta demostración o solicitar información sobre desarrollo web contactando a Tu Marca Local.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h4 className="font-serif-luxury text-lg font-bold text-[#10283F] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#C5A46D]" />
                TÉRMINOS Y CONDICIONES DE USO (DEMOSTRACIÓN)
              </h4>

              <p>
                Al utilizar esta página web de demostración para <strong>Clínica Dental Moderna</strong>, el usuario acepta las siguientes condiciones:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Carácter Ilustrativo:</strong> Todos los servicios, tarifas en dólares estadounidenses, especialidades y disponibilidades son ejemplos para presentación comercial.
                </li>
                <li>
                  <strong>Ausencia de Vínculo Médico:</strong> Este sitio no constituye una oferta vinculante de servicios de salud bucal ni genera relación profesional médico-paciente.
                </li>
                <li>
                  <strong>Confirmación de Citas:</strong> Las solicitudes enviadas mediante el sistema de reserva requieren validación previa si esta plantilla es adaptada para una clínica en producción.
                </li>
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF9F6] border-t border-[#E8E9E7] p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#10283F] hover:bg-[#183a5a] text-white font-bold text-xs uppercase tracking-wider rounded-lg"
          >
            Entendido & Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
