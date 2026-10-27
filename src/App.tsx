import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SpecialtiesCatalog } from './components/SpecialtiesCatalog';
import { Cotizador } from './components/Cotizador';
import { BookingCalendar } from './components/BookingCalendar';
import { FacilitiesGallery } from './components/FacilitiesGallery';
import { DentalTeam } from './components/DentalTeam';
import { CareProcess } from './components/CareProcess';
import { FAQSection } from './components/FAQSection';
import { ReviewsSection } from './components/ReviewsSection';
import { HoursAndLocation } from './components/HoursAndLocation';
import { ContactSection } from './components/ContactSection';
import { ExitIntentModal } from './components/ExitIntentModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { TuMarcaLocalPromo } from './components/TuMarcaLocalPromo';
import { LegalModal } from './components/LegalModal';
import { Footer } from './components/Footer';

import { DentalTreatment, SelectedTreatment, AdditionalService } from './types/dental';
import { INITIAL_ADDITIONAL_SERVICES, DENTAL_TREATMENTS } from './data/dentalData';

export default function App() {
  // Cotizador State
  const [selectedTreatments, setSelectedTreatments] = useState<SelectedTreatment[]>([
    {
      treatment: DENTAL_TREATMENTS[0], // Pre-populate with 'Consulta Odontológica'
      quantity: 1,
      subtotalUSD: DENTAL_TREATMENTS[0].priceUSD,
    }
  ]);

  const [additionalServices, setAdditionalServices] = useState<AdditionalService[]>(INITIAL_ADDITIONAL_SERVICES);
  const [preselectedDoctorId, setPreselectedDoctorId] = useState<string>('');
  const [legalModalTab, setLegalModalTab] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  // Handlers
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddTreatmentToCotizador = (treatment: DentalTreatment) => {
    const existingIndex = selectedTreatments.findIndex(st => st.treatment.id === treatment.id);
    if (existingIndex > -1) {
      const updated = [...selectedTreatments];
      updated[existingIndex].quantity += 1;
      updated[existingIndex].subtotalUSD = updated[existingIndex].quantity * treatment.priceUSD;
      setSelectedTreatments(updated);
    } else {
      setSelectedTreatments(prev => [
        ...prev,
        {
          treatment,
          quantity: 1,
          subtotalUSD: treatment.priceUSD,
        }
      ]);
    }
    scrollToSection('cotizador');
  };

  const handleBookTreatment = (treatment: DentalTreatment) => {
    // Ensure treatment is in cotizador list if not present
    const existing = selectedTreatments.find(st => st.treatment.id === treatment.id);
    if (!existing) {
      setSelectedTreatments(prev => [
        ...prev,
        {
          treatment,
          quantity: 1,
          subtotalUSD: treatment.priceUSD,
        }
      ]);
    }
    scrollToSection('reserva');
  };

  const handleSelectDoctorForBooking = (docId: string) => {
    setPreselectedDoctorId(docId);
    scrollToSection('reserva');
  };

  const addedTreatmentIds = selectedTreatments.map(st => st.treatment.id);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#41474D] flex flex-col font-sans selection:bg-[#C5A46D] selection:text-white">
      
      {/* 1. Header Navigation */}
      <Navbar
        onOpenBooking={() => scrollToSection('reserva')}
        onOpenLegal={(tab) => setLegalModalTab(tab)}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onOpenBooking={() => scrollToSection('reserva')}
          onExploreTreatments={() => scrollToSection('tratamientos')}
        />

        {/* 3. Sobre la Clínica */}
        <AboutSection />

        {/* 4. Especialidades y Tratamientos */}
        <SpecialtiesCatalog
          onAddTreatmentToCotizador={handleAddTreatmentToCotizador}
          onBookTreatment={handleBookTreatment}
          addedTreatmentIds={addedTreatmentIds}
        />

        {/* 5. Cotizador Interactivo */}
        <Cotizador
          selectedTreatments={selectedTreatments}
          setSelectedTreatments={setSelectedTreatments}
          additionalServices={additionalServices}
          setAdditionalServices={setAdditionalServices}
          onContinueToBooking={() => scrollToSection('reserva')}
        />

        {/* 6. Sistema de Reserva de Citas */}
        <BookingCalendar
          selectedTreatments={selectedTreatments}
          additionalServices={additionalServices}
          preselectedDoctorId={preselectedDoctorId}
          onOpenLegal={(tab) => setLegalModalTab(tab)}
        />

        {/* 7. Tecnología e Instalaciones */}
        <FacilitiesGallery />

        {/* 8. Equipo Odontológico */}
        <DentalTeam
          onSelectDoctorForBooking={handleSelectDoctorForBooking}
        />

        {/* 9. Proceso de Atención */}
        <CareProcess />

        {/* 10. Preguntas Frecuentes */}
        <FAQSection />

        {/* 11. Reseñas y Experiencias */}
        <ReviewsSection />

        {/* 12. Ubicación & Horarios con Google Maps */}
        <HoursAndLocation />

        {/* 13. Contacto & WhatsApp */}
        <ContactSection
          onOpenLegal={(tab) => setLegalModalTab(tab)}
        />

        {/* 14. Conversión Comercial - Tu Marca Local */}
        <TuMarcaLocalPromo />
      </main>

      {/* 15. Footer Completo */}
      <Footer
        onOpenLegal={(tab) => setLegalModalTab(tab)}
      />

      {/* Persuasive overlays */}
      <ExitIntentModal
        onExploreTreatments={() => scrollToSection('tratamientos')}
      />

      <MobileStickyCTA
        onOpenBooking={() => scrollToSection('reserva')}
      />

      {/* Legal Information Modal */}
      <LegalModal
        activeTab={legalModalTab}
        onClose={() => setLegalModalTab(null)}
        onSelectTab={(tab) => setLegalModalTab(tab)}
      />

    </div>
  );
}
