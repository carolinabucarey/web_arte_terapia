export const SITE_NAME = 'Arte y Terapia Salud'; // Visual/business identity: navbar, footer, PWA, email, LocalBusiness listing
export const BRAND_NAME = 'Josefina Fainé'; // Canonical metadata brand: title suffix, OG siteName, WebSite schema
export const SITE_URL = 'https://www.josefinafainearte.cl';
export const WHATSAPP_NUMBER = '56956900447';
export const WHATSAPP_MESSAGE = 'Hola! Me gustaría saber sobre los talleres';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const INSTAGRAM_BRAND = 'https://www.instagram.com/arteyterapiasalud/';

export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Obras de alumnos', href: '/#obras-alumnos' },
  { label: 'Talleres', href: '/#talleres' },
  { label: 'Arte terapia', href: '/arte-terapia' },
  { label: 'Sobre mí', href: '/sobre-josefina' },
  { label: 'Contacto', href: '/contacto' },
];

export interface WorkshopSession {
  /** Fecha local del taller en formato YYYY-MM-DD. */
  date: string;
  /** Hora local de inicio en formato HH:mm (24 horas). */
  startTime: string;
  /** Hora local de término en formato HH:mm (24 horas). */
  endTime: string;
  status?: 'available' | 'sold-out' | 'cancelled';
}

export interface Workshop {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Texto de respaldo para talleres recurrentes o sin sesiones confirmadas. */
  date: string;
  /** Texto de respaldo para talleres recurrentes o sin sesiones confirmadas. */
  time: string;
  /** Fechas y horarios confirmados. Permite publicar más de una edición del mismo taller. */
  sessions?: WorkshopSession[];
  duration: string;
  price: number | 'consultar';
  groupSize: number;
  level: string;
  image: string;
  /** Clase de object-position de Tailwind para encuadrar la foto (ej. 'object-top' en fotos verticales). */
  imagePosition?: string;
  images?: string[];
  ctaLink: string;
  ctaText?: string;
  badge?: string;
  detailLink?: string;
  hidden?: boolean; // No se muestra en la grilla de talleres (la página de detalle sigue accesible)
  // Campos opcionales para la página de detalle (/talleres/[slug])
  seoTitle?: string;
  seoDescription?: string;
  heading?: string;
  intro?: string;
  aprenderas?: string[];
  incluye?: string[];
}

export const WORKSHOPS: Workshop[] = [
  {
    id: 'animales-marinos',
    slug: 'animales-marinos',
    name: 'Workshop Animales Marinos en Acuarela',
    tagline: 'Sesión única · Apto para principiantes',
    description: 'Una tarde para sumergirte en el azul y pintar tus propios animales marinos en acuarela. Verás paso a paso cómo lograr las transparencias del agua, los degradados del mar y la forma de cada animal. Materiales y coffee break incluidos, en Providencia (metro Los Leones).',
    date: '',
    time: '',
    sessions: [
      {
        date: '2026-08-01',
        startTime: '16:00',
        endTime: '19:00',
        status: 'available',
      },
    ],
    duration: '3 horas · sesión única',
    price: 34000,
    groupSize: 7,
    level: 'Apto para principiantes en la técnica',
    image: '/fotos/animales-marinos.jpg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero reservar mi cupo en el Workshop Animales Marinos en Acuarela. ¿Qué fechas tienen cupos?')}`,
    badge: 'Cupos limitados',
    detailLink: '/talleres/animales-marinos',
    hidden: true,
    seoTitle: 'Taller de Animales Marinos en Acuarela | Santiago',
    seoDescription: 'Taller de acuarela para pintar animales marinos en Santiago. Apto para principiantes. Materiales y coffee break incluidos. Consulta las próximas fechas.',
    heading: 'Pinta animales marinos en acuarela',
    intro: 'Una tarde de sábado para sumergirte en el azul y pintar tus propios animales marinos. Aprenderás a manejar el agua para lograr las transparencias del mar y verás paso a paso cómo construir cada animal, en un grupo reducido y a tu ritmo.',
    aprenderas: [
      'El manejo del agua y las transparencias propias de la acuarela',
      'Cómo pintar animales marinos con volumen y movimiento',
      'A crear degradados y texturas de agua para ambientar tu obra',
      'Una obra terminada lista para enmarcar',
    ],
  },
  {
    id: 'semanal-acuarela',
    slug: 'semanal',
    name: 'Talleres Semanales de Acuarela',
    tagline: 'Semanal · Grupos reducidos',
    description: 'Si sientes que necesitas una pausa, este espacio es para ti. Un encuentro semanal para explorar la acuarela a tu ritmo, en grupos de máximo seis personas, con acompañamiento cercano y personalizado. No necesitas experiencia previa.',
    date: 'Martes, miércoles, viernes y sábados',
    time: 'Consultar cupos',
    duration: '2 horas por sesión',
    price: 'consultar',
    groupSize: 6,
    level: 'Todos los niveles',
    image: '/fotos/tulipan-acuarela.jpg',
    imagePosition: 'object-top',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero saber horarios y reservar mi lugar en el taller semanal de acuarela.')}`,
    badge: 'Nuestro taller más querido',
    detailLink: '/talleres/semanal',
  },
  {
    id: 'principiantes',
    slug: 'principiantes',
    name: 'Workshop de Acuarela para Principiantes',
    tagline: 'Sesión única · Para principiantes en la técnica',
    description: 'Un taller pensado para quienes quieren iniciarse en la acuarela desde cero. Crearemos juntas una obra en acuarela y un marcapáginas plastificado para llevar, mientras aprendes los materiales esenciales, el control del agua y las pinceladas básicas. No necesitas experiencia, solo ganas de crear. Materiales y coffee break incluidos, en Providencia (metro Los Leones).',
    date: '',
    time: '',
    sessions: [
      {
        date: '2026-08-22',
        startTime: '16:00',
        endTime: '19:00',
        status: 'available',
      },
    ],
    duration: '3 horas · sesión única',
    price: 38000,
    groupSize: 7,
    level: 'Sin experiencia previa',
    image: '/fotos/principiantes.jpg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero reservar mi cupo en el Workshop de Acuarela para Principiantes. ¿Cuándo es la próxima fecha?')}`,
    badge: 'Cupos limitados',
    detailLink: '/talleres/principiantes',
  },
  {
    id: 'cerezo-en-flor',
    slug: 'cerezo-en-flor',
    name: 'Workshop Cerezo en Flor en Acuarela',
    tagline: 'Sesión única · Apto para principiantes',
    description: 'Un domingo para pintar tu propio cerezo en flor en acuarela y soltar la semana. Aprenderás el manejo del agua y verás paso a paso cómo crear flores, ramas y composición. Materiales y coffee break incluidos.',
    date: 'Próximamente',
    time: '',
    duration: '3 horas · sesión única',
    price: 33000,
    groupSize: 7,
    level: 'Apto para principiantes',
    image: '/fotos/cerezo-en-flor.jpg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero reservar mi cupo en el Workshop Cerezo en Flor en Acuarela. ¿Cuándo es la próxima fecha?')}`,
    badge: 'Cupos limitados',
    detailLink: '/talleres/cerezo-en-flor',
    hidden: true,
    seoTitle: 'Taller Cerezo en Flor en Acuarela | Santiago',
    seoDescription: 'Taller de acuarela para pintar tu propio cerezo en flor en Santiago. Manejo del agua paso a paso, apto para principiantes. Materiales y coffee break incluidos.',
    heading: 'Pinta tu propio cerezo en flor en acuarela',
    intro: 'Un domingo para soltar la semana pintando un cerezo en flor. Aprenderás a manejar el agua y a construir flores, ramas y composición paso a paso, en un grupo reducido y a tu ritmo.',
    aprenderas: [
      'El manejo del agua y la transparencia propia de la acuarela',
      'Cómo pintar flores de cerezo con volumen y delicadeza',
      'A componer ramas y equilibrar la composición',
      'Una obra terminada lista para enmarcar',
    ],
  },
  {
    id: 'triptico-arboles',
    slug: 'triptico-arboles',
    name: 'Workshop Tríptico de Árboles en Acuarela',
    tagline: 'Sesión única · Apto para principiantes',
    description: 'Un domingo para pintar tu propio tríptico de árboles en acuarela y soltar la semana. Aprenderás el manejo del agua y verás paso a paso cómo crear tres árboles —otoño, sauce y cerezo en flor— con sus ramas, hojas y composición. Materiales y coffee break incluidos, en Providencia (metro Los Leones).',
    date: 'Próximamente',
    time: '',
    duration: '3 horas · sesión única',
    price: 33000,
    groupSize: 7,
    level: 'Apto para principiantes',
    image: '/fotos/triptico-arboles.jpg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero reservar mi cupo en el Workshop Tríptico de Árboles en Acuarela. ¿Cuándo es la próxima fecha?')}`,
    badge: 'Cupos limitados',
    detailLink: '/talleres/triptico-arboles',
    hidden: true,
    seoTitle: 'Taller Tríptico de Árboles en Acuarela | Santiago',
    seoDescription: 'Pinta un tríptico de árboles en acuarela en Santiago —otoño, sauce y cerezo en flor. Paso a paso, apto para principiantes. Materiales y coffee break incluidos.',
    heading: 'Pinta un tríptico de árboles en acuarela',
    intro: 'Un domingo para crear tu propio tríptico de árboles —otoño, sauce y cerezo en flor— y soltar la semana. Verás paso a paso cómo construir cada árbol con sus ramas, hojas y composición.',
    aprenderas: [
      'El manejo del agua y las transparencias de la acuarela',
      'Cómo pintar tres árboles distintos: otoño, sauce y cerezo en flor',
      'A trabajar ramas, hojas y follaje con naturalidad',
      'A componer un tríptico equilibrado para llevar',
    ],
  },
  {
    id: 'marmoleado',
    slug: 'marmoleado',
    name: 'Workshop Marmoleado en Papel',
    tagline: 'Sesión única · Ven a explorar el color en el agua',
    description: 'Una experiencia creativa y sensorial donde el color, el agua y el movimiento se unen para crear piezas únicas. Exploraremos la técnica del marmoleado: pinturas que flotan sobre el agua formando patrones orgánicos y sorprendentes. Harás 3 obras únicas en papel. Materiales y coffee break incluidos, en Providencia (metro Los Leones).',
    date: 'Próximamente',
    time: '',
    duration: '2 horas 30 min · sesión única',
    price: 35000,
    groupSize: 4,
    level: 'Sin experiencia previa',
    image: '/fotos/marmoleado.jpg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero reservar mi cupo en el Workshop Marmoleado en Papel. ¿Cuándo es la próxima fecha?')}`,
    badge: 'Cupos limitados',
    detailLink: '/talleres/marmoleado',
    hidden: true,
    seoTitle: 'Taller de Marmoleado en Papel | Santiago',
    seoDescription: 'Taller de marmoleado en papel en Santiago: crea 3 obras únicas con color y agua. Experiencia sensorial sin experiencia previa. Materiales y coffee break incluidos.',
    heading: 'Crea piezas únicas con la técnica del marmoleado',
    intro: 'Una experiencia sensorial donde el color, el agua y el movimiento se unen para crear patrones orgánicos imposibles de repetir. Harás 3 obras únicas en papel, sin necesidad de experiencia previa.',
    aprenderas: [
      'La técnica del marmoleado: pinturas que flotan sobre el agua',
      'Cómo crear patrones orgánicos y diseños irrepetibles',
      'El control del color y el movimiento sobre el agua',
      '3 obras únicas en papel para llevar',
    ],
  },
  {
    id: 'grupos-cerrados',
    slug: 'grupos-cerrados',
    name: 'Taller para Grupos Cerrados',
    tagline: 'Experiencia privada · A medida',
    description: 'Un espacio íntimo para compartir con quienes más quieres. Reúne a tu grupo de amigas, familia o equipo y vivan juntos una experiencia de acuarela diseñada a la medida — una pausa creativa para reconectar a través del color.',
    date: 'A coordinar',
    time: 'A convenir',
    duration: '3 horas · sesión única',
    price: 'consultar',
    groupSize: 6,
    level: 'Todos los niveles',
    image: '/fotos/pinceles-corazon.jpeg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Me gustaría coordinar un taller para grupo cerrado. ¿Me cuentas más?')}`,
    ctaText: 'Coordinar grupo',
    badge: 'Experiencia privada',
    detailLink: '/talleres/grupos-cerrados',
    seoTitle: 'Taller de Acuarela para Grupos Privados | Santiago',
    seoDescription: 'Taller de acuarela privado y a medida en Santiago para amigas, familia o equipos. Una experiencia creativa para reconectar. Coordina fecha y detalles con Josefina Fainé.',
    heading: 'Un taller de acuarela a la medida de tu grupo',
    intro: 'Reúne a tus amigas, tu familia o tu equipo y vivan juntas una experiencia de acuarela diseñada a la medida. Una pausa creativa para reconectar a través del color, en un espacio íntimo y solo para ustedes.',
    aprenderas: [
      'Una experiencia diseñada según lo que tu grupo busca',
      'Acuarela guiada paso a paso, apta para todos los niveles',
      'Una pausa creativa para compartir y reconectar',
      'Coordinación de fecha, lugar y temática a convenir',
    ],
    incluye: [
      'Materiales para todo el grupo',
      'Guía personalizada durante la sesión',
      'Una experiencia adaptada a la ocasión',
      'Coordinación previa de fecha y detalles',
    ],
  },
  {
    id: 'empresas',
    slug: 'empresas',
    name: 'Talleres para Empresas',
    tagline: 'Experiencia corporativa · A medida',
    description: 'Talleres de arteterapia y experiencias creativas diseñados para empresas que buscan fomentar el bienestar, la creatividad y la cohesión de sus equipos. Cada taller se adapta a las necesidades del grupo — acuarela, exploración libre, expresión emocional y dinámicas de relajación a través del arte. Coordinamos online los objetivos, formato y duración.',
    date: 'A coordinar',
    time: 'A convenir',
    duration: 'A definir según objetivos',
    price: 'consultar',
    groupSize: 30,
    level: 'Todos los niveles · Sin experiencia previa',
    image: '/fotos/empresas.jpg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Me gustaría coordinar un taller de arteterapia para mi empresa. ¿Me cuentas más?')}`,
    ctaText: 'Cotizar para mi empresa',
    badge: 'Para equipos',
    detailLink: '/talleres/empresas',
  },
  {
    id: 'galaxias',
    slug: 'galaxias',
    name: 'Workshop de Galaxias en Acuarela',
    tagline: 'Sesión única · Creativo y relajante',
    description: 'Un viernes especial para pintar tus propias galaxias y soltar el estrés. Pintarás 3 obras —dos en papel blanco y una en papel negro— con acuarelas metalizadas que hacen brillar el universo sobre el papel. No necesitas experiencia previa, solo ganas de experimentar.',
    date: 'Próximamente',
    time: 'A confirmar',
    duration: '3 horas · sesión única',
    price: 33000,
    groupSize: 7,
    level: 'Todos los niveles',
    image: '/fotos/pincel-oscuro.jpeg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero saber más sobre el Workshop de Galaxias en Acuarela.')}`,
    badge: 'Acuarelas metalizadas',
    detailLink: '/talleres/galaxias',
    hidden: true,
    seoTitle: 'Taller de Galaxias en Acuarela | Santiago',
    seoDescription: 'Taller para pintar galaxias en acuarela metalizada en Santiago. 3 obras en papel blanco y negro, sin experiencia previa. Materiales y coffee break incluidos.',
    heading: 'Pinta tus propias galaxias en acuarela',
    intro: 'Un viernes especial para soltar el estrés pintando galaxias con acuarelas metalizadas que hacen brillar el universo sobre el papel. Pintarás 3 obras —dos en papel blanco y una en papel negro—, sin experiencia previa.',
    aprenderas: [
      'A trabajar con acuarelas metalizadas sobre papel blanco y negro',
      'Cómo crear profundidad, brillos y estrellas',
      'El manejo del agua para lograr nebulosas y degradados',
      '3 obras terminadas para llevar',
    ],
  },
  {
    id: 'pinta-tu-mascota',
    slug: 'pinta-tu-mascota',
    name: 'Pinta Tu Mascota en Acuarela',
    tagline: 'Sesión única · Tu mascota en arte',
    description: 'Un espacio para desconectarte, crear y transformar el amor por tu mascota en arte. Pintarás un retrato en acuarela de tu compañero(a) peludo, guiada paso a paso. No necesitas experiencia previa — los materiales y el coffee break están incluidos.',
    date: 'Próximamente',
    time: 'A confirmar',
    duration: '4 horas · sesión única',
    price: 38000,
    groupSize: 6,
    level: 'Todos los niveles',
    image: '/fotos/mascota-nina.jpeg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero saber más sobre el Workshop Pinta Tu Mascota en Acuarela.')}`,
    ctaText: 'Reserva tu cupo',
    badge: 'Tu mascota en acuarela',
    detailLink: '/talleres/pinta-tu-mascota',
    seoTitle: 'Taller Retrato de tu Mascota en Acuarela | Santiago',
    seoDescription: 'Pinta el retrato de tu mascota en acuarela en Santiago, guiada paso a paso. Sin experiencia previa. Materiales y coffee break incluidos con Josefina Fainé.',
    heading: 'Convierte el amor por tu mascota en una acuarela',
    intro: 'Un espacio para desconectarte y pintar un retrato en acuarela de tu compañero peludo, guiada paso a paso. No necesitas experiencia previa, solo una foto de tu mascota y ganas de crear.',
    aprenderas: [
      'A interpretar la foto de tu mascota en acuarela',
      'El manejo del agua, el color y las texturas del pelaje',
      'Cómo capturar la expresión y el carácter de tu mascota',
      'Un retrato terminado para llevar y atesorar',
    ],
  },
  {
    id: 'flores',
    slug: 'flores',
    name: 'Workshop de Flores en Acuarela',
    tagline: 'Sesión única · Pintamos flores',
    description: 'Un taller para liberar el estrés pintando flores en acuarela. Aprenderás tips para el manejo del agua, ejercicios para soltar bloqueos creativos y verás paso a paso cómo crear la flor que elijamos para la sesión, con sus ramas, hojas y composiciones florales. Trabajamos con papel de 300 gramos y te llevas tu obra terminada.',
    date: 'Próximamente',
    time: 'A confirmar',
    duration: '3 horas · sesión única',
    price: 'consultar',
    groupSize: 7,
    level: 'Todos los niveles',
    image: '/fotos/foto2.jpeg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero saber más sobre el Workshop de Flores en Acuarela.')}`,
    badge: 'Flores en acuarela',
    detailLink: '/talleres/flores',
    hidden: true,
    seoTitle: 'Taller de Flores en Acuarela | Santiago',
    seoDescription: 'Taller para pintar flores en acuarela en Santiago. Manejo del agua, composición floral y ejercicios para soltar bloqueos. Apto para todos los niveles.',
    heading: 'Pinta flores en acuarela y suelta el estrés',
    intro: 'Un taller para relajarte pintando flores en acuarela. Aprenderás tips para el manejo del agua, ejercicios para soltar bloqueos creativos y verás paso a paso cómo construir la flor de la sesión con sus ramas, hojas y composición.',
    aprenderas: [
      'El manejo del agua y las transparencias de la acuarela',
      'Ejercicios para soltar bloqueos creativos',
      'Cómo pintar flores, ramas, hojas y composiciones florales',
      'A trabajar en papel de 300 gramos y llevarte tu obra',
    ],
  },
  {
    id: 'gift-card',
    slug: 'gift-card',
    name: 'Gift Card · Workshop de Acuarela',
    tagline: 'Regala una experiencia creativa',
    description: 'Sorprende a alguien especial con un momento para desconectarse de la rutina, explorar su creatividad y descubrir la magia de la acuarela. No importa si nunca ha pintado antes: este workshop está diseñado para disfrutar, aprender y llevarse una obra creada con sus propias manos. Un regalo diferente, lleno de color, calma e inspiración.',
    date: '',
    time: '',
    duration: 'Válida por 3 meses desde la compra',
    price: 'consultar',
    groupSize: 0,
    level: 'Canjeable por cualquier workshop de acuarela',
    image: '/fotos/gift-card.jpg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero regalar una Gift Card de un workshop de acuarela. ¿Me cuentas cómo funciona?')}`,
    ctaText: 'Regalar una Gift Card',
    badge: 'Ideal para regalar',
    detailLink: '/talleres/gift-card',
    seoTitle: 'Gift Card Workshop de Acuarela | Santiago',
    seoDescription: 'Regala una experiencia creativa: una Gift Card canjeable por cualquier workshop de acuarela en Santiago con Josefina Fainé. Válida por 3 meses desde la compra.',
  },
  {
    id: 'hada-protectora',
    slug: 'hada-protectora',
    name: 'Workshop de Hada Protectora',
    tagline: 'Sesión única · Acuarela como terapia',
    description: 'Un taller de acuarela como terapia donde crearás tu Hada protectora — un espacio para agradecerle, manifestar deseos y conectar con tu mundo interior a través del color. No necesitas experiencia previa, solo ganas de crear desde el corazón.',
    date: 'Próximamente',
    time: 'A confirmar',
    duration: '3 horas · sesión única',
    price: 'consultar',
    groupSize: 7,
    level: 'Todos los niveles',
    image: '/fotos/foto2.jpeg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero saber más sobre el Workshop de Hada Protectora.')}`,
    badge: 'Arte terapéutico',
    detailLink: '/talleres/hada-protectora',
    hidden: true,
    seoTitle: 'Taller de Hada Protectora en Acuarela | Santiago',
    seoDescription: 'Taller de acuarela como terapia en Santiago: crea tu hada protectora y conecta con tu mundo interior. Sin experiencia previa, materiales incluidos.',
    heading: 'Crea tu hada protectora en acuarela',
    intro: 'Un taller de acuarela como terapia donde crearás tu hada protectora: un espacio para agradecer, manifestar deseos y conectar con tu mundo interior a través del color. Sin experiencia previa, solo ganas de crear desde el corazón.',
    aprenderas: [
      'La acuarela como herramienta de expresión y autocuidado',
      'Cómo dar forma y color a tu hada protectora',
      'A conectar la intención y el símbolo con la pintura',
      'Una obra personal y simbólica para llevar',
    ],
  },
];

export const SEMANAL_GALLERY: string[] = [
  '/fotos/alumnas/obra-1.jpg',
  '/fotos/alumnas/obra-2.jpg',
  '/fotos/alumnas/obra-3.jpg',
  '/fotos/alumnas/obra-4.jpg',
  '/fotos/alumnas/obra-5.jpg',
  '/fotos/alumnas/obra-6.jpg',
  '/fotos/alumnas/obra-7.jpg',
  '/fotos/alumnas/obra-8.jpg',
  '/fotos/alumnas/obra-9.jpg',
  '/fotos/alumnas/obra-10.jpg',
];

export interface Benefit {
  icon: 'calm' | 'expression' | 'explore' | 'mindfulness';
  title: string;
  description: string;
}

export const BENEFITS: Benefit[] = [
  {
    icon: 'calm',
    title: 'Reducir el estrés',
    description: 'El fluir de la acuarela activa un estado de calma y presencia.',
  },
  {
    icon: 'expression',
    title: 'Expresión emocional',
    description: 'Dale color y forma a lo que las palabras no alcanzan.',
  },
  {
    icon: 'explore',
    title: 'Exploración creativa',
    description: 'Descubre nuevas formas de mirar y crear.',
  },
  {
    icon: 'mindfulness',
    title: 'Atención plena',
    description: 'Cada pincelada te trae al aquí y ahora.',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  context: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Llegué buscando un hobby y encontré un espacio donde reconectar conmigo misma. Cada clase es un regalo.',
    name: 'Carolina',
    context: 'Alumna desde 2025',
  },
  {
    quote: 'La Josefina tiene una forma única de guiar. No te enseña a pintar, te enseña a sentir a través del color.',
    name: 'Valentina',
    context: 'Alumna taller semanal',
  },
  {
    quote: 'Nunca pensé que la acuarela pudiera ser tan terapéutica. Salgo de cada sesión más liviana y en paz.',
    name: 'María José',
    context: 'Alumna desde 2024',
  },
  {
    quote: 'El momento de la semana que espero con más ansias — nuestro espacio seguro y de copuchas.',
    name: 'Isidora',
    context: 'Alumna taller semanal',
  },
  {
    quote: 'Clases que son un cariño para el alma, con linda compañía y muchas risas.',
    name: 'Liliana',
    context: 'Alumna taller semanal',
  },
  {
    quote: 'Un espacio muy cálido que permite compartir, aprender y disfrutar.',
    name: 'Lina',
    context: 'Alumna taller semanal',
  },
];
