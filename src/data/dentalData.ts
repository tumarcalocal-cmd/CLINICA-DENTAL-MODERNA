import {
  SpecialtyCarouselItem,
  DentalTreatmentOption,
  DoctorProfile,
  FAQItem,
  ReviewItem,
} from '../types/dental';

export const SPECIALTY_CAROUSEL_ITEMS: SpecialtyCarouselItem[] = [
  {
    id: 'spec-general',
    specialty: 'ODONTOLOGÍA GENERAL',
    subtitle: 'Prevención, diagnóstico y salud bucal integral',
    overview:
      'Cuidamos la salud base de tus dientes y encías mediante evaluaciones clínicas detalladas, profilaxis profesional y tratamientos restauradores conservadores.',
    image: '/src/assets/images/specialty_general_dentistry_1794512171430.jpg',
    imageAlt: 'Odontóloga latinoamericana realizando revisión dental general en clínica de Panamá',
    treatments: [
      {
        id: 'gen-01',
        name: 'Consulta Odontológica y Evaluación Dental',
        description: 'Revisión bucodental completa, evaluación de encías, oclusión y plan preventivo personalizado.',
      },
      {
        id: 'gen-02',
        name: 'Limpieza Dental Profesional (Profilaxis)',
        description: 'Eliminación profunda de placa bacteriana, sarro y pulido dental para prevenir inflamación gingival.',
      },
      {
        id: 'gen-03',
        name: 'Restauraciones y Empastes Estéticos',
        description: 'Obturaciones con resinas fotocurables del tono natural de tus dientes para reparar caries o desgaste.',
      },
      {
        id: 'gen-04',
        name: 'Extracciones Dentales Indicadas',
        description: 'Procedimiento cuidadoso bajo anestesia local cuando una pieza dental no puede ser conservada.',
      },
    ],
  },
  {
    id: 'spec-estetica',
    specialty: 'ESTÉTICA DENTAL',
    subtitle: 'Armonía facial, luminosidad y diseño de sonrisa',
    overview:
      'Combinamos planificación digital y materiales de alta estética para mejorar el color, la forma y la simetría dental conservando una apariencia natural.',
    image: '/src/assets/images/treatment_aesthetics_1793080046514.jpg',
    imageAlt: 'Especialista latinoamericano presentando diseño digital de sonrisa a paciente en Panamá',
    treatments: [
      {
        id: 'est-01',
        name: 'Blanqueamiento Dental Profesional',
        description: 'Aclaramiento clínico controlado para devolver luminosidad y frescura a tu sonrisa de manera segura.',
      },
      {
        id: 'est-02',
        name: 'Diseño de Sonrisa Digital',
        description: 'Planificación personalizada asistida por análisis fotográfico y digital antes de iniciar cualquier procedimiento.',
      },
      {
        id: 'est-03',
        name: 'Carillas Dentales',
        description: 'Láminas ultrafinas de porcelana o resina diseñadas para perfeccionar contorno, alineación visual y tono.',
      },
      {
        id: 'est-04',
        name: 'Restauraciones Estéticas',
        description: 'Reconstrucción anatómica de bordes fracturados, espacios interdentales o desgastes visibles.',
      },
    ],
  },
  {
    id: 'spec-ortodoncia',
    specialty: 'ORTODONCIA',
    subtitle: 'Alineación dental y mordida funcional para cada etapa',
    overview:
      'Evaluamos y corregimos la posición dental y la mordida con alternativas convencionales, estéticas o alineadores transparentes adaptados a tu estilo de vida.',
    image: '/src/assets/images/treatment_orthodontics_1793080046615.jpg',
    imageAlt: 'Ortodoncista latinoamericana explicando alineadores transparentes y modelo 3D a paciente',
    treatments: [
      {
        id: 'ort-01',
        name: 'Evaluación de Ortodoncia',
        description: 'Estudio clínico de alineación dental, mordida y planificación integral para definir el sistema ideal.',
      },
      {
        id: 'ort-02',
        name: 'Brackets Convencionales',
        description: 'Sistema clásico de alta precisión indicado para corregir apiñamientos y maloclusiones de todo grado.',
      },
      {
        id: 'ort-03',
        name: 'Ortodoncia Estética',
        description: 'Brackets cerámicos o de zafiro translúcidos que se mimetizan con el esmalte natural durante el tratamiento.',
      },
      {
        id: 'ort-04',
        name: 'Evaluación para Alineadores Transparentes',
        description: 'Valoración clínica y escaneo digital 3D para determinar la viabilidad de férulas removibles invisibles.',
      },
    ],
  },
  {
    id: 'spec-implantologia',
    specialty: 'IMPLANTOLOGÍA Y PRÓTESIS',
    subtitle: 'Recuperación fija, funcional y estética de piezas dentales',
    overview:
      'Devolvemos la función masticatoria y la estética dental mediante soluciones protésicas e implantes planificados con precisión clínica.',
    image: '/src/assets/images/specialty_implantology_1794512171468.jpg',
    imageAlt: 'Especialista en implantología explicando modelo de implante y corona dental en Panamá',
    treatments: [
      {
        id: 'imp-01',
        name: 'Evaluación para Implantes Dentales',
        description: 'Valoración ósea y estudio radiográfico personalizado para planificar el reemplazo fijo de piezas ausentes.',
      },
      {
        id: 'imp-02',
        name: 'Coronas Dentales',
        description: 'Restauraciones fijas en zirconia o porcelana diseñadas para proteger y devolver anatomía natural al diente.',
      },
      {
        id: 'imp-03',
        name: 'Prótesis Dentales',
        description: 'Opciones protésicas fijas o removibles ajustadas para restaurar comodidad al masticar y hablar.',
      },
      {
        id: 'imp-04',
        name: 'Rehabilitación Oral',
        description: 'Plan integral multidisciplinario orientado a restablecer la armonía dental, funcional y oclusal.',
      },
    ],
  },
  {
    id: 'spec-endodoncia',
    specialty: 'ENDODONCIA',
    subtitle: 'Conservación dental y alivio del dolor agudo',
    overview:
      'Abordamos afecciones del tejido pulpar con protocolos precisos orientados a aliviar molestias y preservar tus piezas dentales naturales.',
    image: '/src/assets/images/specialty_endodontics_1794512172250.jpg',
    imageAlt: 'Especialista en endodoncia analizando radiografía dental digital en consultorio de Panamá',
    treatments: [
      {
        id: 'end-01',
        name: 'Evaluación de Dolor Dental',
        description: 'Diagnóstico oportuno de sensibilidad severa, pulpitis o infecciones radiculares mediante examen clínico.',
      },
      {
        id: 'end-02',
        name: 'Tratamiento de Conductos (Endodoncia)',
        description: 'Desinfección y sellado hermético de los conductos radiculares para salvar la pieza dental sin dolor.',
      },
      {
        id: 'end-03',
        name: 'Restauración Posterior al Tratamiento',
        description: 'Reconstrucción estructural posterior para proteger el diente tratado y garantizar su resistencia.',
      },
    ],
  },
  {
    id: 'spec-odontopediatria',
    specialty: 'ODONTOPEDIATRÍA',
    subtitle: 'Experiencias dentales positivas para niños y adolescentes',
    overview:
      'Acompañamos el crecimiento dental de los más pequeños en un entorno amable, paciente y educativo que fomenta hábitos saludables desde temprana edad.',
    image: '/src/assets/images/treatment_pediatric_1793080047149.jpg',
    imageAlt: 'Odontopediatra latinoamericana enseñando higiene dental a una niña en consultorio moderno',
    treatments: [
      {
        id: 'ped-01',
        name: 'Evaluación Dental Infantil',
        description: 'Revisión periódica amigable del desarrollo dental, erupción y mordida en niños y adolescentes.',
      },
      {
        id: 'ped-02',
        name: 'Prevención de Caries',
        description: 'Aplicación de barniz de flúor y sellantes protectores para fortalecer el esmalte dental infantil.',
      },
      {
        id: 'ped-03',
        name: 'Limpieza Dental Infantil',
        description: 'Profilaxis suave adaptada al confort del niño para mantener encías sanas y dientes libres de placa.',
      },
      {
        id: 'ped-04',
        name: 'Educación en Higiene Bucal',
        description: 'Orientación lúdica y práctica para padres e hijos sobre técnica de cepillado y cuidado diario.',
      },
    ],
  },
];

export const DENTAL_TREATMENTS: DentalTreatmentOption[] = SPECIALTY_CAROUSEL_ITEMS.flatMap((item) =>
  item.treatments.map((t) => ({
    id: t.id,
    name: t.name,
    specialty: item.specialty,
  }))
);

export const DOCTOR_PROFILES: DoctorProfile[] = [
  {
    id: 'doc-01',
    name: 'Dra. Elena Vargas',
    title: 'Especialista en Estética Dental y Rehabilitación',
    specialty: 'Estética Dental & Odontología General',
    description: 'Enfocada en diseño de sonrisa, carillas de porcelana y procedimientos de mínima invasión.',
    image: '/src/assets/images/doctor_female_dentist_1793080048057.jpg',
    scheduleDays: 'Lunes a Jueves',
  },
  {
    id: 'doc-02',
    name: 'Dr. Alejandro Ramírez',
    title: 'Especialista en Ortodoncia y Alineadores',
    specialty: 'Ortodoncia Tradicional e Invisible',
    description: 'Experto en biomecánica ortodóncica, planificación 3D y alineamiento estético.',
    image: '/src/assets/images/doctor_male_dentist_1793080048020.jpg',
    scheduleDays: 'Martes a Sábado',
  },
  {
    id: 'doc-03',
    name: 'Dra. Sofía Castillo',
    title: 'Odontopediatra y Prevención Infantil',
    specialty: 'Odontopediatría',
    description: 'Dedicada a brindar experiencias dentales positivas, lúdicas y reconfortantes para los más pequeños.',
    image: '/src/assets/images/treatment_pediatric_1793080047149.jpg',
    scheduleDays: 'Lunes, Miércoles y Viernes',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: '¿Cómo puedo reservar una cita o solicitar una cotización?',
    answer: 'Puedes seleccionar la especialidad en nuestro carrusel de tratamientos y pulsar el botón "Solicitar Cotización", o elegir directamente tu fecha y horario en nuestra agenda online o vía WhatsApp.',
  },
  {
    id: 'faq-2',
    question: '¿Cómo se determina el presupuesto de un tratamiento?',
    answer: 'Cada paciente presenta necesidades clínicas distintas. Por ello, los presupuestos personalizados se entregan tras conocer el motivo de consulta o luego de la evaluación odontológica presencial.',
  },
  {
    id: 'faq-3',
    question: '¿Cómo sé qué tratamiento necesito exactamente?',
    answer: 'Te recomendamos agendar una "Consulta Odontológica y Evaluación Dental". En la primera cita, el especialista examinará tu caso y te orientará sobre las mejores alternativas clínicas.',
  },
  {
    id: 'faq-4',
    question: '¿Puedo elegir el odontólogo de mi preferencia?',
    answer: 'Sí, en el formulario de agenda puedes indicar el profesional de tu preferencia de acuerdo con la especialidad que requieras.',
  },
  {
    id: 'faq-5',
    question: '¿Cómo se confirma la solicitud de cita?',
    answer: 'Al completar tu solicitud en la agenda, podrás enviarla por WhatsApp para que la clínica verifique la disponibilidad y confirme tu fecha y horario final.',
  },
  {
    id: 'faq-6',
    question: '¿Qué debo hacer si tengo una urgencia dental?',
    answer: 'Para casos de dolor agudo, trauma o inflamación repentina, se sugiere contactar directamente por WhatsApp para coordinar una valoración prioritaria.',
  },
];

export const PATIENT_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Mariana G. - Ciudad de Panamá',
    treatment: 'Diseño de Sonrisa & Blanqueamiento',
    rating: 5,
    comment: 'La atención recibida superó mis expectativas. Las instalaciones son impecables y el tratamiento de blanqueamiento fue indoloro y muy natural.',
    date: 'Hace 2 semanas',
  },
  {
    id: 'rev-2',
    author: 'Carlos R. - Ciudad de Panamá',
    treatment: 'Ortodoncia Estética',
    rating: 5,
    comment: 'El trato personalizado y la explicación detallada del plan antes de iniciar me brindaron mucha tranquilidad. Recomendado al 100%.',
    date: 'Hace 1 mes',
  },
  {
    id: 'rev-3',
    author: 'Patricia V. - Ciudad de Panamá',
    treatment: 'Odontopediatría',
    rating: 5,
    comment: 'Excelente manejo con los niños. Mi hija asistió feliz a su primera limpieza dental sin ningún temor. Un entorno verdaderamente moderno.',
    date: 'Hace 3 semanas',
  },
];
