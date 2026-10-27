import { DentalTreatment, AdditionalService, DoctorProfile, FAQItem, ReviewItem, SpecialtyCategory } from '../types/dental';

export const SPECIALTY_CATEGORIES: SpecialtyCategory[] = [
  'TODAS',
  'ODONTOLOGÍA GENERAL',
  'ESTÉTICA DENTAL',
  'ORTODONCIA',
  'IMPLANTOLOGÍA Y PRÓTESIS',
  'ENDODONCIA',
  'ODONTOPEDIATRÍA'
];

export const DENTAL_TREATMENTS: DentalTreatment[] = [
  // Odontología General
  {
    id: 'gen-01',
    name: 'Consulta Odontológica',
    specialty: 'ODONTOLOGÍA GENERAL',
    description: 'Diagnóstico general inicial, revisión bucodental completa y plan preventivo.',
    indicativeDuration: '30 min',
    priceUSD: 35,
    image: '/src/assets/images/facility_operatory_1793080046191.jpg',
    recommended: true
  },
  {
    id: 'gen-02',
    name: 'Evaluación Dental Integral',
    specialty: 'ODONTOLOGÍA GENERAL',
    description: 'Examen clínico exhaustivo con diagnóstico de encías, caries y oclusión.',
    indicativeDuration: '45 min',
    priceUSD: 40,
    image: '/src/assets/images/hero_dental_clinic_1793080046089.jpg'
  },
  {
    id: 'gen-03',
    name: 'Limpieza Dental Profesional (Profilaxis)',
    specialty: 'ODONTOLOGÍA GENERAL',
    description: 'Eliminación de placa bacteriana, sarro y pulido dental para prevenir la gingivitis.',
    indicativeDuration: '45 min',
    priceUSD: 60,
    image: '/src/assets/images/facility_operatory_1793080046191.jpg',
    recommended: true
  },
  {
    id: 'gen-04',
    name: 'Restauraciones y Empastes',
    specialty: 'ODONTOLOGÍA GENERAL',
    description: 'Obturaciones en resina fotocurable del color natural de tus dientes.',
    indicativeDuration: '60 min',
    priceUSD: 75,
    allowsQuantity: true,
    unitLabel: 'piezas',
    image: '/src/assets/images/facility_operatory_1793080046191.jpg'
  },
  {
    id: 'gen-05',
    name: 'Extracciones Dentales (Indicadas)',
    specialty: 'ODONTOLOGÍA GENERAL',
    description: 'Procedimiento quirúrgico menor bajo anestesia para dientes no restaurables.',
    indicativeDuration: '60 min',
    priceUSD: 90,
    allowsQuantity: true,
    unitLabel: 'piezas',
    image: '/src/assets/images/facility_operatory_1793080046191.jpg'
  },

  // Estética Dental
  {
    id: 'est-01',
    name: 'Blanqueamiento Dental Profesional',
    specialty: 'ESTÉTICA DENTAL',
    description: 'Tratamiento aclarador clínico de alta eficacia que recupera el brillo natural.',
    indicativeDuration: '60 min',
    priceUSD: 220,
    image: '/src/assets/images/treatment_aesthetics_1793080046514.jpg',
    recommended: true
  },
  {
    id: 'est-02',
    name: 'Diseño de Sonrisa Digital',
    specialty: 'ESTÉTICA DENTAL',
    description: 'Planificación estética personalizada mediante software digital 3D avanzado.',
    indicativeDuration: '90 min',
    priceUSD: 450,
    image: '/src/assets/images/treatment_aesthetics_1793080046514.jpg',
    recommended: true
  },
  {
    id: 'est-03',
    name: 'Carillas Dentales de Porcelana / Resina',
    specialty: 'ESTÉTICA DENTAL',
    description: 'Láminas ultrafinas diseñadas para corregir forma, tono y simetría dental.',
    indicativeDuration: '60 min',
    priceUSD: 280,
    allowsQuantity: true,
    unitLabel: 'carillas',
    image: '/src/assets/images/treatment_aesthetics_1793080046514.jpg'
  },
  {
    id: 'est-04',
    name: 'Restauraciones Estéticas',
    specialty: 'ESTÉTICA DENTAL',
    description: 'Reconstrucción anatómica de alta precisión para dientes bordes o desgastados.',
    indicativeDuration: '60 min',
    priceUSD: 110,
    allowsQuantity: true,
    unitLabel: 'piezas',
    image: '/src/assets/images/treatment_aesthetics_1793080046514.jpg'
  },

  // Ortodoncia
  {
    id: 'ort-01',
    name: 'Evaluación de Ortodoncia',
    specialty: 'ORTODONCIA',
    description: 'Análisis ortodóncico completo de alineación dental y mordida funcional.',
    indicativeDuration: '45 min',
    priceUSD: 45,
    image: '/src/assets/images/treatment_orthodontics_1793080046615.jpg'
  },
  {
    id: 'ort-02',
    name: 'Brackets Convencionales',
    specialty: 'ORTODONCIA',
    description: 'Sistema metálico de alta precisión para corregir maloclusiones y apiñamiento.',
    indicativeDuration: '60 min',
    priceUSD: 850,
    image: '/src/assets/images/treatment_orthodontics_1793080046615.jpg'
  },
  {
    id: 'ort-03',
    name: 'Ortodoncia Estética (Cerámicos / Zafiro)',
    specialty: 'ORTODONCIA',
    description: 'Brackets discretos traslúcidos del tono del diente para alta estética.',
    indicativeDuration: '60 min',
    priceUSD: 1200,
    image: '/src/assets/images/treatment_orthodontics_1793080046615.jpg',
    recommended: true
  },
  {
    id: 'ort-04',
    name: 'Evaluación para Alineadores Transparentes',
    specialty: 'ORTODONCIA',
    description: 'Escaneo intraoral 3D para planificar tratamiento con férulas invisibles.',
    indicativeDuration: '45 min',
    priceUSD: 60,
    image: '/src/assets/images/treatment_orthodontics_1793080046615.jpg'
  },

  // Implantología y Prótesis
  {
    id: 'imp-01',
    name: 'Evaluación para Implantes Dentales',
    specialty: 'IMPLANTOLOGÍA Y PRÓTESIS',
    description: 'Valoración ósea y planificación tomográfica para reemplazo fijo de dientes.',
    indicativeDuration: '45 min',
    priceUSD: 65,
    image: '/src/assets/images/facility_operatory_1793080046191.jpg'
  },
  {
    id: 'imp-02',
    name: 'Coronas Dentales (Zirconia / Porcelana)',
    specialty: 'IMPLANTOLOGÍA Y PRÓTESIS',
    description: 'Fundas fijas biocompatibles de máxima resistencia y apariencia natural.',
    indicativeDuration: '60 min',
    priceUSD: 380,
    allowsQuantity: true,
    unitLabel: 'coronas',
    image: '/src/assets/images/facility_operatory_1793080046191.jpg'
  },
  {
    id: 'imp-03',
    name: 'Prótesis Dentales Removibles o Fijas',
    specialty: 'IMPLANTOLOGÍA Y PRÓTESIS',
    description: 'Soluciones protésicas para la recuperación de múltiples piezas ausentes.',
    indicativeDuration: '90 min',
    priceUSD: 650,
    image: '/src/assets/images/facility_operatory_1793080046191.jpg'
  },
  {
    id: 'imp-04',
    name: 'Rehabilitación Oral Completa',
    specialty: 'IMPLANTOLOGÍA Y PRÓTESIS',
    description: 'Tratamiento multidisciplinario para restaurar la dimensión vertical y masticación.',
    indicativeDuration: '120 min',
    priceUSD: 1400,
    image: '/src/assets/images/hero_dental_clinic_1793080046089.jpg'
  },

  // Endodoncia
  {
    id: 'end-01',
    name: 'Evaluación de Dolor Dental',
    specialty: 'ENDODONCIA',
    description: 'Diagnóstico de pulpitis, sensibilidad aguda e infecciones de raíz.',
    indicativeDuration: '30 min',
    priceUSD: 40,
    image: '/src/assets/images/facility_operatory_1793080046191.jpg'
  },
  {
    id: 'end-02',
    name: 'Tratamiento de Conductos (Endodoncia)',
    specialty: 'ENDODONCIA',
    description: 'Limpieza y sellado del nervio dental para conservar la pieza natural sin dolor.',
    indicativeDuration: '90 min',
    priceUSD: 290,
    allowsQuantity: true,
    unitLabel: 'conductos',
    image: '/src/assets/images/facility_operatory_1793080046191.jpg'
  },
  {
    id: 'end-03',
    name: 'Restauración Posterior al Tratamiento',
    specialty: 'ENDODONCIA',
    description: 'Reconstrucción con perno/resina para reforzar el diente tratado endodónticamente.',
    indicativeDuration: '60 min',
    priceUSD: 120,
    image: '/src/assets/images/facility_operatory_1793080046191.jpg'
  },

  // Odontopediatría
  {
    id: 'ped-01',
    name: 'Evaluación Dental Infantil',
    specialty: 'ODONTOPEDIATRÍA',
    description: 'Atención especializada, cercana y sin dolor para niños y adolescentes.',
    indicativeDuration: '30 min',
    priceUSD: 35,
    image: '/src/assets/images/treatment_pediatric_1793080047149.jpg',
    recommended: true
  },
  {
    id: 'ped-02',
    name: 'Prevención de Caries e Fluorización',
    specialty: 'ODONTOPEDIATRÍA',
    description: 'Aplicación de flúor protector y sellantes de fosas para proteger el esmalte.',
    indicativeDuration: '30 min',
    priceUSD: 45,
    image: '/src/assets/images/treatment_pediatric_1793080047149.jpg'
  },
  {
    id: 'ped-03',
    name: 'Limpieza Dental Infantil',
    specialty: 'ODONTOPEDIATRÍA',
    description: 'Remoción suave de manchas y placa adaptada al confort del pequeño paciente.',
    indicativeDuration: '30 min',
    priceUSD: 50,
    image: '/src/assets/images/treatment_pediatric_1793080047149.jpg'
  },
  {
    id: 'ped-04',
    name: 'Educación en Higiene Bucal',
    specialty: 'ODONTOPEDIATRÍA',
    description: 'Sesión didáctica e interactiva para inculcar hábitos saludables de cepillado.',
    indicativeDuration: '30 min',
    priceUSD: 25,
    image: '/src/assets/images/treatment_pediatric_1793080047149.jpg'
  }
];

export const INITIAL_ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    id: 'add-01',
    name: 'Radiografía Panorámica Digital',
    description: 'Estudio radiográfico de diagnóstico integral en alta definición.',
    priceUSD: 25,
    selected: false
  },
  {
    id: 'add-02',
    name: 'Anestesia Digital Computarizada',
    description: 'Administración gradual de anestesia sin dolor ni presión tisular.',
    priceUSD: 20,
    selected: false
  },
  {
    id: 'add-03',
    name: 'Kit Premium Post-Tratamiento',
    description: 'Cepillo especializado, enjuague antiséptico e hilo dental ortodóntico.',
    priceUSD: 18,
    selected: false
  },
  {
    id: 'add-04',
    name: 'Sedación Consciente Relajante',
    description: 'Opción indicada para pacientes con ansiedad o fobia dental.',
    priceUSD: 75,
    selected: false
  }
];

export const DOCTOR_PROFILES: DoctorProfile[] = [
  {
    id: 'doc-01',
    name: 'Dra. Elena Vargas',
    title: 'Especialista en Estética Dental y Rehabilitación',
    specialty: 'Estética Dental & Odontología General',
    description: 'Enfocada en diseño de sonrisa, carillas de porcelana y procedimientos de mínima invasión.',
    image: '/src/assets/images/doctor_female_dentist_1793080048057.jpg',
    scheduleDays: 'Lunes a Jueves'
  },
  {
    id: 'doc-02',
    name: 'Dr. Alejandro Ramírez',
    title: 'Especialista en Ortodoncia y Alineadores',
    specialty: 'Ortodoncia Tradicional e Invisible',
    description: 'Experto en biomecánica ortodóncica, planificación 3D y alineamiento estético.',
    image: '/src/assets/images/doctor_male_dentist_1793080048020.jpg',
    scheduleDays: 'Martes a Sábado'
  },
  {
    id: 'doc-03',
    name: 'Dra. Sofía Castillo',
    title: 'Odontopediatra y Prevención Infantil',
    specialty: 'Odontopediatría',
    description: 'Dedicada a brindar experiencias dentales positivas, lúdicas y reconfortantes para los más pequeños.',
    image: '/src/assets/images/treatment_pediatric_1793080047149.jpg',
    scheduleDays: 'Lunes, Miércoles y Viernes'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: '¿Cómo puedo reservar una cita?',
    answer: 'Puedes solicitar tu cita seleccionando el tratamiento y la fecha/horario deseados a través de nuestro calendario interactivo o comunicándote directamente por WhatsApp. Nuestro equipo confirmará la disponibilidad a la brevedad.'
  },
  {
    id: 'faq-2',
    question: '¿Cómo funciona el cotizador dental?',
    answer: 'El cotizador te permite seleccionar los tratamientos de tu interés y calcular un presupuesto estimado al instante. Al finalizar, puedes transferir los servicios seleccionados directamente al sistema de reserva.'
  },
  {
    id: 'faq-3',
    question: '¿Los precios son definitivos?',
    answer: 'No. Los precios presentados en esta demostración son ilustrativos y orientativos. El costo definitivo depende exclusivamente de la valoración clínica, el diagnóstico por imagen y el plan de tratamiento individualizado.'
  },
  {
    id: 'faq-4',
    question: '¿Puedo seleccionar varios tratamientos en el presupuesto?',
    answer: 'Sí, el cotizador te permite agregar múltiples servicios (por ejemplo, valoración, limpieza y blanqueamiento) para obtener un estimado consolidado y la duración aproximada de tu visita.'
  },
  {
    id: 'faq-5',
    question: '¿Cómo sé qué tratamiento necesito exactamente?',
    answer: 'Te recomendamos solicitar una "Consulta Odontológica" o "Evaluación Integral". En la primera cita, el especialista examinará tu caso y te guiará sobre las mejores alternativas clínicas.'
  },
  {
    id: 'faq-6',
    question: '¿Cuánto dura una consulta estándar?',
    answer: 'La duración varía entre 30 minutos (consultas de revisión) y 60 a 90 minutos para procedimientos especializados. En la ficha de cada tratamiento se indica la duración estimativa.'
  },
  {
    id: 'faq-7',
    question: '¿Puedo elegir el odontólogo de mi preferencia?',
    answer: 'Sí, en el formulario de reserva de cita puedes indicar el profesional de tu preferencia de acuerdo con la especialidad que requieras.'
  },
  {
    id: 'faq-8',
    question: '¿Cómo se confirma la solicitud de cita?',
    answer: 'Al enviar tu formulario, recibirás un resumen de la solicitud en pantalla o por WhatsApp. La clínica se pondrá en contacto contigo para verificar la disponibilidad final.'
  },
  {
    id: 'faq-9',
    question: '¿Qué debo hacer si tengo una urgencia dental?',
    answer: 'Para casos de dolor agudo, trauma o inflamación repentina, se sugiere contactar directamente a la línea prioritaria por WhatsApp para coordinar una atención inmediata.'
  }
];

export const PATIENT_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Mariana G. - Panamá',
    treatment: 'Diseño de Sonrisa & Blanqueamiento',
    rating: 5,
    comment: 'La atención recibida superó mis expectativas. Las instalaciones son impecables y el tratamiento de blanqueamiento fue indoloro y muy natural.',
    date: 'Hace 2 semanas'
  },
  {
    id: 'rev-2',
    author: 'Carlos R. - Ciudad de Panamá',
    treatment: 'Ortodoncia Estética',
    rating: 5,
    comment: 'El trato personalizado y la explicación detallada del presupuesto antes de iniciar me brindaron mucha tranquilidad. Recomendado al 100%.',
    date: 'Hace 1 mes'
  },
  {
    id: 'rev-3',
    author: 'Patricia V. - Panamá',
    treatment: 'Odontopediatría',
    rating: 5,
    comment: 'Excelente manejo con los niños. Mi hija asistió feliz a su primera limpieza dental sin ningún temor. Un entorno verdaderamente moderno.',
    date: 'Hace 3 semanas'
  }
];
