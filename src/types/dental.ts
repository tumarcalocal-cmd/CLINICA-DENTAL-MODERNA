export type SpecialtyCategory =
  | 'ODONTOLOGÍA GENERAL'
  | 'ESTÉTICA DENTAL'
  | 'ORTODONCIA'
  | 'IMPLANTOLOGÍA Y PRÓTESIS'
  | 'ENDODONCIA'
  | 'ODONTOPEDIATRÍA';

export interface SpecialtyTreatmentDetail {
  id: string;
  name: string;
  description: string;
}

export interface SpecialtyCarouselItem {
  id: string;
  specialty: SpecialtyCategory;
  subtitle: string;
  overview: string;
  image: string;
  imageAlt: string;
  treatments: SpecialtyTreatmentDetail[];
}

export interface DentalTreatmentOption {
  id: string;
  name: string;
  specialty: SpecialtyCategory;
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
