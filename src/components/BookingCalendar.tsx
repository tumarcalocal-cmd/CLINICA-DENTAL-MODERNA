import React, { useState, useEffect } from 'react';
import { SelectedTreatment, AdditionalService, AppointmentBookingRequest } from '../types/dental';
import { DOCTOR_PROFILES, DENTAL_TREATMENTS } from '../data/dentalData';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, MessageSquare, AlertCircle, Info } from 'lucide-react';

interface BookingCalendarProps {
  selectedTreatments: SelectedTreatment[];
  additionalServices: AdditionalService[];
  preselectedDoctorId?: string;
  onOpenLegal: (tab: 'privacy' | 'terms' | 'disclaimer') => void;
}

export const BookingCalendar: React.FC<BookingCalendarProps> = ({
  selectedTreatments,
  additionalServices,
  preselectedDoctorId,
  onOpenLegal,
}) => {
  // Calendar dates generation (next 14 days)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      // Skip Sundays
      if (nextDate.getDay() !== 0) {
        dates.push({
          fullDate: nextDate.toISOString().split('T')[0],
          dayName: nextDate.toLocaleDateString('es-ES', { weekday: 'short' }),
          dayNumber: nextDate.getDate(),
          monthName: nextDate.toLocaleDateString('es-ES', { month: 'short' }),
        });
      }
    }
    return dates;
  };

  const availableDates = generateAvailableDates();
  const timeSlots = ['08:00 AM', '09:30 AM', '11:00 AM', '02:00 PM', '03:30 PM', '05:00 PM'];

  // Form State
  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0]?.fullDate || '');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('09:30 AM');
  const [preferredDoctorId, setPreferredDoctorId] = useState<string>(preselectedDoctorId || '');
  const [patientName, setPatientName] = useState<string>('');
  const [patientPhone, setPatientPhone] = useState<string>('');
  const [patientEmail, setPatientEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState<boolean>(true);
  
  // Custom manual treatment fallback if none selected from cotizador
  const [manualTreatmentId, setManualTreatmentId] = useState<string>('gen-01');
  const [submittedModal, setSubmittedModal] = useState<boolean>(false);

  useEffect(() => {
    if (preselectedDoctorId) {
      setPreferredDoctorId(preselectedDoctorId);
    }
  }, [preselectedDoctorId]);

  // Calculations
  const activeAdditionals = additionalServices.filter(s => s.selected);
  const totalEstimatedUSD = selectedTreatments.length > 0
    ? selectedTreatments.reduce((sum, st) => sum + st.subtotalUSD, 0) + activeAdditionals.reduce((sum, s) => sum + s.priceUSD, 0)
    : (DENTAL_TREATMENTS.find(t => t.id === manualTreatmentId)?.priceUSD || 35);

  const totalEstimatedDurationMinutes = selectedTreatments.length > 0
    ? selectedTreatments.reduce((sum, st) => {
        const durationMatch = st.treatment.indicativeDuration.match(/(\d+)/);
        const mins = durationMatch ? parseInt(durationMatch[1], 10) : 30;
        return sum + (mins * st.quantity);
      }, 0)
    : 30;

  // Handle WhatsApp Request Generation
  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone || !acceptedPrivacy) return;

    setSubmittedModal(true);
  };

  const handleSendWhatsAppBooking = () => {
    const doctorObj = DOCTOR_PROFILES.find(d => d.id === preferredDoctorId);
    const doctorName = doctorObj ? doctorObj.name : 'Indistinto / Evaluación disponible';

    let treatmentSummaryText = '';
    if (selectedTreatments.length > 0) {
      treatmentSummaryText = selectedTreatments
        .map(st => `• ${st.treatment.name} (x${st.quantity}) - $${st.subtotalUSD} USD`)
        .join('%0A');
    } else {
      const selectedManual = DENTAL_TREATMENTS.find(t => t.id === manualTreatmentId);
      treatmentSummaryText = `• ${selectedManual?.name || 'Consulta Odontológica'}`;
    }

    const message = `*SOLICITUD DE CITA EN DEMOSTRACIÓN - CLÍNICA DENTAL MODERNA*%0A%0A` +
      `*Paciente:* ${encodeURIComponent(patientName)}%0A` +
      `*Teléfono:* ${encodeURIComponent(patientPhone)}%0A` +
      (patientEmail ? `*Correo:* ${encodeURIComponent(patientEmail)}%0A` : '') +
      `*Fecha solicitada:* ${selectedDate}%0A` +
      `*Horario preferido:* ${selectedTimeSlot}%0A` +
      `*Especialista:* ${encodeURIComponent(doctorName)}%0A%0A` +
      `*Tratamientos seleccionados:*%0A${treatmentSummaryText}%0A%0A` +
      `*Presupuesto Estimado:* $${totalEstimatedUSD} USD%0A` +
      (notes ? `*Motivo/Notas:* ${encodeURIComponent(notes)}%0A` : '') +
      `%0A_Solicitud enviada desde demostración comercial web._`;

    const waUrl = `https://wa.me/50765278910?text=${message}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="reserva" className="py-20 bg-[#FAF9F6] text-[#41474D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest">
            SISTEMA DE RESERVAS ONLINE
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F]">
            AGENDA TU PRÓXIMA VISITA DENTAL.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Selecciona el día, horario y especialista de tu preferencia. Tus tratamientos cotizados se sincronizan automáticamente con tu solicitud de reserva.
          </p>
        </div>

        {/* Booking Container */}
        <div className="bg-white border border-[#E8E9E7] rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Form Side - Left 7 Cols */}
          <form onSubmit={handleSubmitBooking} className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-8">
            
            {/* Step 1: Select Date */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#10283F] uppercase tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C5A46D]" />
                <span>1. Selecciona Fecha de Cita</span>
              </label>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {availableDates.slice(0, 6).map((d) => (
                  <button
                    type="button"
                    key={d.fullDate}
                    onClick={() => setSelectedDate(d.fullDate)}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedDate === d.fullDate
                        ? 'bg-[#10283F] text-white border-[#10283F] shadow-md'
                        : 'bg-[#FAF9F6] text-[#41474D] hover:bg-[#E8E9E7] border-[#E8E9E7]'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold block opacity-75">{d.dayName}</span>
                    <span className="text-lg font-bold block">{d.dayNumber}</span>
                    <span className="text-[10px] uppercase font-semibold block text-[#C5A46D]">{d.monthName}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Time Slot */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#10283F] uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A46D]" />
                <span>2. Horario Preferido</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedTimeSlot(slot)}
                    className={`p-2.5 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                      selectedTimeSlot === slot
                        ? 'bg-[#C5A46D] text-[#10283F] border-[#C5A46D] shadow'
                        : 'bg-[#FAF9F6] text-[#41474D] hover:bg-[#E8E9E7] border-[#E8E9E7]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Professional Preference & Manual treatment if cotizador empty */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#10283F] uppercase tracking-wider block">
                  Profesional de preferencia
                </label>
                <select
                  value={preferredDoctorId}
                  onChange={(e) => setPreferredDoctorId(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-[#E8E9E7] text-xs font-medium rounded-lg p-3 text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                >
                  <option value="">Cualquier especialista disponible</option>
                  {DOCTOR_PROFILES.map(doc => (
                    <option key={doc.id} value={doc.id}>{doc.name} ({doc.specialty})</option>
                  ))}
                </select>
              </div>

              {selectedTreatments.length === 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#10283F] uppercase tracking-wider block">
                    Tratamiento Principal
                  </label>
                  <select
                    value={manualTreatmentId}
                    onChange={(e) => setManualTreatmentId(e.target.value)}
                    className="w-full bg-[#FAF9F6] border border-[#E8E9E7] text-xs font-medium rounded-lg p-3 text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                  >
                    {DENTAL_TREATMENTS.map(t => (
                      <option key={t.id} value={t.id}>{t.name} — ${t.priceUSD} USD</option>
                    ))}
                  </select>
                </div>
              )}

            </div>

            {/* Step 4: Patient Personal Details */}
            <div className="space-y-4 pt-4 border-t border-[#E8E9E7]">
              <span className="text-xs font-bold text-[#10283F] uppercase tracking-wider block">
                3. Datos del Paciente
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600 block">Nombre Completo *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="Ej. María Elena González"
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF9F6] border border-[#E8E9E7] text-xs rounded-lg text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600 block">Teléfono / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      placeholder="+507 6000-0000"
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF9F6] border border-[#E8E9E7] text-xs rounded-lg text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600 block">Correo Electrónico (Opcional)</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF9F6] border border-[#E8E9E7] text-xs rounded-lg text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600 block">Motivo o Notas (Opcional)</label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ej. Sensibilidad dental, consulta general..."
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF9F6] border border-[#E8E9E7] text-xs rounded-lg text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>
                </div>
              </div>

              {/* Privacy consent checkbox */}
              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  id="bookingPrivacy"
                  required
                  checked={acceptedPrivacy}
                  onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                  className="mt-0.5 rounded border-gray-300 text-[#C5A46D] focus:ring-[#C5A46D]"
                />
                <label htmlFor="bookingPrivacy" className="text-[11px] text-gray-500 leading-snug">
                  Acepto la{' '}
                  <button
                    type="button"
                    onClick={() => onOpenLegal('privacy')}
                    className="text-[#10283F] underline hover:text-[#C5A46D]"
                  >
                    política de privacidad
                  </button>{' '}
                  y entiendo que esta es una solicitud de cita de demostración comercial.
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#10283F] hover:bg-[#183a5a] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C5A46D]" />
                <span>SOLICITAR MI CITA AHORA</span>
              </button>

            </div>

          </form>

          {/* Summary Column - Right 5 Cols */}
          <div className="lg:col-span-5 bg-[#10283F] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#C5A46D]/30 space-y-6">
            
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[11px] text-[#C5A46D] uppercase font-bold tracking-widest">RESUMEN DE RESERVA</span>
                <h3 className="font-serif-luxury text-xl font-bold text-white mt-1">Detalles de tu Solicitud</h3>
              </div>

              {/* Synchronized Cotizador Items */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-gray-300 block">Tratamientos Seleccionados:</span>
                
                {selectedTreatments.length > 0 ? (
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {selectedTreatments.map(st => (
                      <div key={st.treatment.id} className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center text-xs">
                        <div>
                          <span className="font-bold text-white block">{st.treatment.name}</span>
                          <span className="text-[10px] text-gray-400">Cant: {st.quantity} unidad(es)</span>
                        </div>
                        <span className="font-bold text-[#C5A46D]">${st.subtotalUSD} USD</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                    <span className="font-bold text-white block">
                      {DENTAL_TREATMENTS.find(t => t.id === manualTreatmentId)?.name || 'Consulta Odontológica'}
                    </span>
                    <span className="text-[10px] text-[#C5A46D]">
                      ${DENTAL_TREATMENTS.find(t => t.id === manualTreatmentId)?.priceUSD || 35} USD
                    </span>
                  </div>
                )}
              </div>

              {/* Date & Time Summary */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Fecha solicitada:</span>
                  <span className="font-bold text-white">{selectedDate || 'Por seleccionar'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Horario:</span>
                  <span className="font-bold text-[#C5A46D]">{selectedTimeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Duración estimada:</span>
                  <span className="font-bold text-white">{totalEstimatedDurationMinutes} min aprox.</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 font-bold text-sm">
                  <span>Presupuesto Estimado:</span>
                  <span className="text-[#C5A46D]">${totalEstimatedUSD} USD</span>
                </div>
              </div>

            </div>

            {/* Mandatory Demonstration Disclaimer */}
            <div className="p-4 rounded-xl bg-black/40 border border-[#C5A46D]/30 space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-1.5 text-[#C5A46D] font-bold">
                <Info className="w-4 h-4 shrink-0" />
                <span>Cita de Demostración</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Esta es una solicitud de cita de demostración. La fecha y el horario requieren confirmación final de la clínica.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {submittedModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#10283F] border-2 border-[#C5A46D] rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 text-white text-center shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#C5A46D]/20 text-[#C5A46D] flex items-center justify-center mx-auto border border-[#C5A46D]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-luxury text-2xl font-bold">¡Solicitud Lista!</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Esta es una solicitud de cita de demostración. La fecha y el horario requieren confirmación de la clínica.
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-left space-y-2">
              <p><strong>Paciente:</strong> {patientName}</p>
              <p><strong>Fecha / Hora:</strong> {selectedDate} a las {selectedTimeSlot}</p>
              <p><strong>Presupuesto estimado:</strong> ${totalEstimatedUSD} USD</p>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleSendWhatsAppBooking}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>ENVIAR SOLICITUD POR WHATSAPP</span>
              </button>

              <button
                onClick={() => setSubmittedModal(false)}
                className="w-full py-2.5 text-xs text-gray-300 hover:text-white underline"
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
