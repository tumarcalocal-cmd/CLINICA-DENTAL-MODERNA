import React, { useState, useEffect } from 'react';
import { Calendar, MessageSquare, User, Phone, FileText, Info, AlertCircle } from 'lucide-react';
import { CORE_TREATMENTS } from '../data/dentalData';
import { CLINIC_CONFIG, buildWhatsAppUrl } from '../config/clinicConfig';

interface AppointmentSectionProps {
  selectedTreatment: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ selectedTreatment }) => {
  const todayIso = new Date().toISOString().split('T')[0];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [requestPrepared, setRequestPrepared] = useState(false);

  useEffect(() => {
    if (selectedTreatment) {
      setTreatment(selectedTreatment);
      setFormError('');
    }
  }, [selectedTreatment]);

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim() || !phone.trim() || !treatment.trim() || !preferredDate.trim()) {
      setFormError(
        'Por favor completa tu nombre, teléfono, tratamiento de interés y fecha preferida antes de enviar la solicitud.'
      );
      return;
    }

    const message =
      `Hola, me gustaría solicitar una cita en ${CLINIC_CONFIG.clinicName}.\n\n` +
      `• Nombre: ${name.trim()}\n` +
      `• Teléfono: ${phone.trim()}\n` +
      `• Tratamiento de interés: ${treatment}\n` +
      `• Fecha preferida: ${preferredDate}\n` +
      (notes.trim() ? `• Mensaje: ${notes.trim()}\n` : '') +
      `\nQuedo pendiente de confirmación de disponibilidad por parte de la clínica.`;

    const url = buildWhatsAppUrl(CLINIC_CONFIG.clinicWhatsappNumber, message);
    setRequestPrepared(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="citas" className="py-16 sm:py-20 bg-[#10283F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest block">
            Solicitud de cita
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white [text-wrap:balance]">
            Agenda tu próxima visita dental.
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Completa tus datos para preparar tu solicitud de cita por WhatsApp. La clínica confirmará la fecha y el horario según disponibilidad.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleAppointmentSubmit}
            noValidate
            className="bg-white text-[#41474D] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="appt-name" className="text-xs font-bold text-[#10283F] uppercase tracking-wide block">
                  Nombre *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    id="appt-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (formError) setFormError('');
                    }}
                    placeholder="Tu nombre completo"
                    className="w-full pl-10 pr-3 py-3 bg-[#FAF9F6] border border-[#E8E9E7] rounded-lg text-sm text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="appt-phone" className="text-xs font-bold text-[#10283F] uppercase tracking-wide block">
                  Teléfono *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    id="appt-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (formError) setFormError('');
                    }}
                    placeholder="Tu número de teléfono"
                    className="w-full pl-10 pr-3 py-3 bg-[#FAF9F6] border border-[#E8E9E7] rounded-lg text-sm text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="appt-treatment" className="text-xs font-bold text-[#10283F] uppercase tracking-wide block">
                  Tratamiento de interés *
                </label>
                <select
                  id="appt-treatment"
                  required
                  value={treatment}
                  onChange={(e) => {
                    setTreatment(e.target.value);
                    if (formError) setFormError('');
                  }}
                  className="w-full px-3 py-3 bg-[#FAF9F6] border border-[#E8E9E7] rounded-lg text-sm text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                >
                  <option value="">Selecciona un tratamiento...</option>
                  {CORE_TREATMENTS.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                  <option value="Evaluación odontológica general">Evaluación odontológica general</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="appt-date" className="text-xs font-bold text-[#10283F] uppercase tracking-wide block">
                  Fecha preferida *
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    id="appt-date"
                    type="date"
                    required
                    min={todayIso}
                    value={preferredDate}
                    onChange={(e) => {
                      setPreferredDate(e.target.value);
                      if (formError) setFormError('');
                    }}
                    className="w-full pl-10 pr-3 py-3 bg-[#FAF9F6] border border-[#E8E9E7] rounded-lg text-sm text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="appt-notes" className="text-xs font-bold text-[#10283F] uppercase tracking-wide block">
                Mensaje opcional
              </label>
              <div className="relative">
                <FileText className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <textarea
                  id="appt-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Cuéntanos brevemente tu consulta o preferencia de horario"
                  className="w-full pl-10 pr-3 py-3 bg-[#FAF9F6] border border-[#E8E9E7] rounded-lg text-sm text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                />
              </div>
            </div>

            {formError && (
              <div
                role="alert"
                className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{formError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#C5A46D] hover:bg-[#b38f56] text-[#10283F] font-bold text-sm uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Solicitar cita por WhatsApp</span>
            </button>

            <p className="text-xs text-gray-500 flex items-start gap-2 pt-1">
              <Info className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
              <span>
                {requestPrepared
                  ? 'Solicitud preparada para WhatsApp. La fecha y el horario quedan pendientes de confirmación por parte de la clínica.'
                  : 'El envío prepara tu solicitud por WhatsApp; toda cita queda sujeta a confirmación por la clínica.'}
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
