export type SpecialtyCategory = 
  | 'TODAS'
  | 'ODONTOLOGÍA GENERAL'
  | 'ESTÉTICA DENTAL'
  | 'ORTODONCIA'
  | 'IMPLANTOLOGÍA Y PRÓTESIS'
  | 'ENDODONCIA'
  | 'ODONTOPEDIATRÍA';

export interface DentalTreatment {
  id: string;
  name: string;
  specialty: SpecialtyCategory;
  description: string;
  indicativeDuration: string;
  priceUSD: number;
  image: string;
  allowsQuantity?: boolean;
  unitLabel?: string;
  recommended?: boolean;
}

export interface SelectedTreatment {
  treatment: DentalTreatment;
  quantity: number;
  subtotalUSD: number;
}

export interface AdditionalService {
  id: string;
  name: string;
  description: string;
  priceUSD: number;
  selected: boolean;
}

export interface AppointmentBookingRequest {
  selectedTreatments: SelectedTreatment[];
  additionalServices: AdditionalService[];
  totalEstimatedUSD: number;
  totalEstimatedDurationMinutes: number;
  preferredDoctorId?: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientPhone: string;
  patientEmail?: string;
  notes?: string;
  acceptedPrivacy: boolean;
}

export interface DoctorProfile {
  id: string;
  name: string;
  title: string;
  specialty: string;
  description: string;
  image: string;
  scheduleDays: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
}
