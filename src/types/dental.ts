export interface TreatmentItem {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  /**
   * Precio orientativo opcional. Dejar undefined si no hay tarifas reales configuradas.
   */
  indicativePriceUSD?: number;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

export interface DemoTestimonial {
  id: string;
  label: string;
  treatment: string;
  quote: string;
}
