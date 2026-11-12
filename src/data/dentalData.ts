import heroClinicImg from '../assets/images/hero_dental_clinic_1793080046089.jpg';
import facilityOperatoryImg from '../assets/images/facility_operatory_1793080046191.jpg';
import cleaningImg from '../assets/images/treatment_cleaning_1794520051699.jpg';
import whiteningImg from '../assets/images/treatment_whitening_1794520052456.jpg';
import orthodonticsImg from '../assets/images/treatment_orthodontics_1793080046615.jpg';
import implantsImg from '../assets/images/specialty_implantology_1794512171468.jpg';
import smileDesignImg from '../assets/images/treatment_aesthetics_1793080046514.jpg';
import generalDentistryImg from '../assets/images/specialty_general_dentistry_1794512171430.jpg';

import { TreatmentItem, BenefitItem, DemoTestimonial } from '../types/dental';

export const HERO_IMAGE = {
  src: heroClinicImg,
  alt: 'Odontóloga atendiendo a una paciente en una clínica dental moderna',
};

export const ABOUT_IMAGE = {
  src: facilityOperatoryImg,
  alt: 'Consultorio dental moderno equipado con sillón odontológico y pantalla digital',
};

export const CORE_TREATMENTS: TreatmentItem[] = [
  {
    id: 'limpieza-dental',
    name: 'Limpieza dental',
    shortDescription:
      'Profilaxis profesional para eliminar placa y sarro, cuidando la salud de tus encías.',
    image: cleaningImg,
    imageAlt: 'Procedimiento de limpieza dental profesional en consultorio odontológico',
  },
  {
    id: 'blanqueamiento-dental',
    name: 'Blanqueamiento dental',
    shortDescription:
      'Tratamiento clínico orientado a devolver luminosidad y frescura natural a tu sonrisa.',
    image: whiteningImg,
    imageAlt: 'Evaluación de tono dental para tratamiento de blanqueamiento en clínica',
  },
  {
    id: 'ortodoncia',
    name: 'Ortodoncia',
    shortDescription:
      'Corrección de la alineación dental y mordida con opciones estéticas y convencionales.',
    image: orthodonticsImg,
    imageAlt: 'Consulta de ortodoncia con alineadores transparentes y modelo dental 3D',
  },
  {
    id: 'implantes-dentales',
    name: 'Implantes dentales',
    shortDescription:
      'Reemplazo fijo de piezas ausentes para recuperar función masticatoria y estética.',
    image: implantsImg,
    imageAlt: 'Especialista explicando modelo de implante dental a paciente',
  },
  {
    id: 'diseno-de-sonrisa',
    name: 'Diseño de sonrisa',
    shortDescription:
      'Planificación estética personalizada para armonizar forma, proporción y tono dental.',
    image: smileDesignImg,
    imageAlt: 'Consulta de diseño digital de sonrisa en pantalla clínica',
  },
  {
    id: 'odontologia-general',
    name: 'Odontología general',
    shortDescription:
      'Diagnóstico integral, prevención de caries y restauraciones conservadoras.',
    image: generalDentistryImg,
    imageAlt: 'Revisión dental preventiva en consultorio odontológico moderno',
  },
];

export const CLINIC_BENEFITS: BenefitItem[] = [
  {
    id: 'atencion-personalizada',
    title: 'Atención personalizada',
    description:
      'Cada valoración y plan odontológico se adapta a tus necesidades y objetivos específicos.',
  },
  {
    id: 'tecnologia-moderna',
    title: 'Tecnología moderna',
    description:
      'Equipamiento contemporáneo de apoyo diagnóstico para procedimientos precisos y ordenados.',
  },
  {
    id: 'comodidad-confianza',
    title: 'Comodidad y confianza',
    description:
      'Espacios diseñados para brindar tranquilidad, higiene rigurosa e información clara en cada visita.',
  },
];

export const DEMO_TESTIMONIALS: DemoTestimonial[] = [
  {
    id: 'demo-1',
    label: 'Ejemplo demostrativo 01',
    treatment: 'Limpieza y valoración dental',
    quote:
      'Espacio reservado para compartir la experiencia real de pacientes satisfechos con su atención preventiva y trato cercano.',
  },
  {
    id: 'demo-2',
    label: 'Ejemplo demostrativo 02',
    treatment: 'Ortodoncia y estética',
    quote:
      'Espacio preparado para destacar testimonios auténticos sobre la claridad de la información y comodidad durante el tratamiento.',
  },
  {
    id: 'demo-3',
    label: 'Ejemplo demostrativo 03',
    treatment: 'Atención integral',
    quote:
      'Espacio destinado a reseñas verificadas de futuros pacientes una vez que la clínica publique su sitio web oficial.',
  },
];
