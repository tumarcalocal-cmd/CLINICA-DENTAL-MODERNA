import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SpecialtiesCatalog } from './components/SpecialtiesCatalog';
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

import { SpecialtyCategory } from './types/dental';

export default function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyCategory>('ODONTOLOGÍA GENERAL');
  const [selectedTreatmentName, setSelectedTreatmentName] = useState<string>(
    'Consulta Odontológica y Evaluación Dental'
  );
  const [preselectedDoctorId, setPreselectedDoctorId] = useState<string>('');
  const [legalModalTab, setLegalModalTab] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestQuote = (specialty: SpecialtyCategory, treatmentName?: string) => {
    setSelectedSpecialty(specialty);
    if (treatmentName) {
      setSelectedTreatmentName(treatmentName);
    }
    scrollToSection('reserva');
  };

  const handleSelectDoctorForBooking = (docId: string) => {
    setPreselectedDoctorId(docId);
    scrollToSection('reserva');
  };

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

        {/* 4. Especialidades y Tratamientos (Carrusel) */}
        <SpecialtiesCatalog onRequestQuote={handleRequestQuote} />

        {/* 5. Sistema de Reserva de Citas y Solicitud de Cotización */}
        <BookingCalendar
          selectedSpecialty={selectedSpecialty}
          selectedTreatmentName={selectedTreatmentName}
          preselectedDoctorId={preselectedDoctorId}
          onOpenLegal={(tab) => setLegalModalTab(tab)}
        />

        {/* 6. Tecnología e Instalaciones */}
        <FacilitiesGallery />

        {/* 7. Equipo Odontológico */}
        <DentalTeam onSelectDoctorForBooking={handleSelectDoctorForBooking} />

        {/* 8. Proceso de Atención */}
        <CareProcess />

        {/* 9. Preguntas Frecuentes */}
        <FAQSection />

        {/* 10. Reseñas y Experiencias */}
        <ReviewsSection />

        {/* 11. Ubicación & Horarios con Google Maps (Ciudad de Panamá) */}
        <HoursAndLocation />

        {/* 12. Contacto & WhatsApp */}
        <ContactSection onOpenLegal={(tab) => setLegalModalTab(tab)} />

        {/* 13. Conversión Comercial - Tu Marca Local */}
        <TuMarcaLocalPromo />
      </main>

      {/* 14. Footer Completo */}
      <Footer onOpenLegal={(tab) => setLegalModalTab(tab)} />

      {/* Persuasive overlays */}
      <ExitIntentModal onExploreTreatments={() => scrollToSection('tratamientos')} />

      <MobileStickyCTA onOpenBooking={() => scrollToSection('reserva')} />

      {/* Legal Information Modal */}
      <LegalModal
        activeTab={legalModalTab}
        onClose={() => setLegalModalTab(null)}
        onSelectTab={(tab) => setLegalModalTab(tab)}
      />

    </div>
  );
}
