import React, { useState } from 'react';
import { DENTAL_TREATMENTS } from '../data/dentalData';
import { Send, MessageSquare, Phone, Mail, User, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  onOpenLegal: (tab: 'privacy' | 'terms' | 'disclaimer') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenLegal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [treatment, setTreatment] = useState('Consulta Odontológica General');
  const [message, setMessage] = useState('');
  const [privacy, setPrivacy] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !privacy) return;

    setSubmitted(true);
  };

  const handleSendWhatsAppContact = () => {
    const text = `*CONSULTA DE CONTACTO - CLÍNICA DENTAL MODERNA*%0A%0A` +
      `*Nombre:* ${encodeURIComponent(name)}%0A` +
      `*Teléfono:* ${encodeURIComponent(phone)}%0A` +
      (email ? `*Correo:* ${encodeURIComponent(email)}%0A` : '') +
      `*Tratamiento de interés:* ${encodeURIComponent(treatment)}%0A` +
      (message ? `*Mensaje:* ${encodeURIComponent(message)}%0A` : '') +
      `%0A_Consulta enviada desde demostración comercial web._`;

    const waUrl = `https://wa.me/50765278910?text=${text}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-white text-[#41474D] border-t border-[#E8E9E7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest">
            ATENCIÓN A CADA CONSULTA
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F]">
            DA EL SIGUIENTE PASO HACIA EL CUIDADO DE TU SONRISA.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Envíanos tus inquietudes o coordina directamente una atención personalizada.
          </p>
        </div>

        <div className="bg-[#FAF9F6] border border-[#E8E9E7] rounded-2xl p-6 sm:p-10 shadow-lg">
          
          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif-luxury text-2xl font-bold text-[#10283F]">¡Mensaje Preparado!</h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                  Gracias por comunicarte en esta demostración comercial. Puedes enviar tu consulta ahora mismo por WhatsApp.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleSendWhatsAppContact}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>ENVIAR CONSULTA POR WHATSAPP</span>
                </button>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3.5 bg-white border border-gray-300 hover:bg-gray-50 text-[#10283F] font-semibold text-xs rounded-xl"
                >
                  Modificar formulario
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#10283F] uppercase tracking-wider">Nombre Completo *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre completo"
                      className="w-full pl-9 pr-3 py-3 bg-white border border-[#E8E9E7] text-xs rounded-xl text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#10283F] uppercase tracking-wider">Teléfono / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+507 6000-0000"
                      className="w-full pl-9 pr-3 py-3 bg-white border border-[#E8E9E7] text-xs rounded-xl text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#10283F] uppercase tracking-wider">Correo Electrónico (Opcional)</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className="w-full pl-9 pr-3 py-3 bg-white border border-[#E8E9E7] text-xs rounded-xl text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#10283F] uppercase tracking-wider">Tratamiento de Interés</label>
                  <select
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="w-full py-3 px-3 bg-white border border-[#E8E9E7] text-xs rounded-xl text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                  >
                    {DENTAL_TREATMENTS.map(t => (
                      <option key={t.id} value={t.name}>{t.name} ({t.specialty})</option>
                    ))}
                  </select>
                </div>

              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#10283F] uppercase tracking-wider">Mensaje o Consulta</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe brevemente tu inquietud o consulta sobre el procedimiento..."
                  className="w-full p-3 bg-white border border-[#E8E9E7] text-xs rounded-xl text-[#10283F] focus:outline-none focus:border-[#C5A46D]"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="contactPrivacy"
                  required
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  className="mt-0.5 text-[#C5A46D] rounded border-gray-300 focus:ring-[#C5A46D]"
                />
                <label htmlFor="contactPrivacy" className="text-[11px] text-gray-500 leading-snug">
                  Acepto la{' '}
                  <button
                    type="button"
                    onClick={() => onOpenLegal('privacy')}
                    className="text-[#10283F] underline hover:text-[#C5A46D]"
                  >
                    política de privacidad
                  </button>{' '}
                  para el tratamiento de mis datos de contacto en esta demostración.
                </label>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 py-4 bg-[#10283F] hover:bg-[#183a5a] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#C5A46D]" />
                  <span>PREPARAR MENSAJE</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsAppContact}
                  className="px-8 py-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP DIRECTO</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
