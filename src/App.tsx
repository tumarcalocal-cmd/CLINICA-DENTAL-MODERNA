import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TreatmentsSection } from './components/TreatmentsSection';
import { AboutSection } from './components/AboutSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTreatment = (treatmentName: string) => {
    setSelectedTreatment(treatmentName);
    scrollToSection('citas');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#41474D] flex flex-col font-sans overflow-x-hidden">
      {/* 1. Menú principal */}
      <Navbar onNavigate={scrollToSection} />

      <main className="flex-grow">
        {/* 2. Sección de bienvenida */}
        <Hero
          onOpenBooking={() => scrollToSection('citas')}
          onExploreTreatments={() => scrollToSection('tratamientos')}
        />

        {/* 3. Tratamientos */}
        <TreatmentsSection onSelectTreatment={handleSelectTreatment} />

        {/* 4. Sobre la clínica */}
        <AboutSection />

        {/* 5. Beneficios */}
        <BenefitsSection />

        {/* 6. Testimonios */}
        <TestimonialsSection />

        {/* 7. Solicitud de cita */}
        <AppointmentSection selectedTreatment={selectedTreatment} />

        {/* 8. Contacto y ubicación */}
        <ContactSection />
      </main>

      {/* 9. Pie de página */}
      <Footer onNavigate={scrollToSection} />

      {/* Botón flotante discreto de WhatsApp */}
      <WhatsAppFloatingButton />
    </div>
  );
}
