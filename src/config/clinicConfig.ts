export interface ClinicConfig {
  clinicName: string;
  tagline: string;
  /**
   * Número de WhatsApp de la clínica en formato internacional sin "+" ni espacios
   * (ej. "50760000000"). Déjalo vacío "" en modo demostración para abrir WhatsApp
   * con el mensaje preparado sin inventar un teléfono de clínica real.
   */
  clinicWhatsappNumber: string;
  /**
   * Teléfono visible de la clínica. Si está vacío "", se muestra como configurable.
   */
  clinicPhoneDisplay: string;
  /**
   * Dirección física real de la clínica. Si está vacía "", se muestra como configurable.
   */
  clinicAddress: string;
  /**
   * Horario de atención configurable.
   */
  clinicHours: string[];
  /**
   * URL de inserción (iframe src) de Google Maps.
   * El mapa se renderiza únicamente cuando existe una ubicación real configurada.
   */
  mapEmbedUrl: string;
  /**
   * Enlace de contacto configurable de Tu Marca Local para el botón comercial del footer.
   */
  agencyContactUrl: string;
}

export const CLINIC_CONFIG: ClinicConfig = {
  clinicName: 'Clínica Dental Moderna',
  tagline: 'Una sonrisa saludable. Una experiencia excepcional.',
  clinicWhatsappNumber: '',
  clinicPhoneDisplay: '',
  clinicAddress: '',
  clinicHours: [
    'Lunes a viernes: horario configurable según sede',
    'Sábados: horario configurable según sede',
  ],
  mapEmbedUrl: '',
  agencyContactUrl:
    'https://wa.me/50765278910?text=Hola%2C%20quiero%20una%20p%C3%A1gina%20como%20esta',
};

export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  const cleanNumber = phoneNumber.replace(/[^\d]/g, '');
  const encoded = encodeURIComponent(message);
  if (cleanNumber) {
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  }
  return `https://api.whatsapp.com/send?text=${encoded}`;
}
