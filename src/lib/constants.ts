export const SITE_NAME = 'Arte y Terapia Salud';
export const SITE_URL = 'https://artejosefaine.cl';
export const WHATSAPP_NUMBER = '56956900447';
export const WHATSAPP_MESSAGE = 'Hola! Me gustaría saber sobre los talleres';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const INSTAGRAM_BRAND = 'https://www.instagram.com/arteyterapiasalud/';
export const INSTAGRAM_PERSONAL = 'https://www.instagram.com/arte.jose.fa/';
export const EMAIL = 'contacto@artejosefaine.cl';

export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Talleres', href: '/#talleres' },
  { label: 'Sobre mí', href: '/sobre-josefina' },
  { label: 'Contacto', href: '/contacto' },
];

export interface Workshop {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  price: number | 'consultar';
  groupSize: number;
  level: string;
  image: string;
  images?: string[];
  ctaLink: string;
  ctaText?: string;
  badge?: string;
  startIso?: string;
  endIso?: string;
  location?: string;
  offerUrl?: string;
}

export const WORKSHOPS: Workshop[] = [
  {
    id: 'pinta-tu-mascota',
    slug: 'pinta-tu-mascota',
    name: 'Pinta Tu Mascota en Acuarela',
    tagline: 'Sesión única · Tu mascota en arte',
    description: 'Un espacio para desconectarte, crear y transformar el amor por tu mascota en arte. Pintarás un retrato en acuarela de tu compañero(a) peludo, guiada paso a paso. No necesitas experiencia previa — los materiales y el coffee break están incluidos.',
    date: 'Sábado 25 de abril',
    time: '15:00 a 19:00 hrs',
    duration: '4 horas · sesión única',
    price: 38000,
    groupSize: 6,
    level: 'Todos los niveles',
    image: '/fotos/mascota-nina.jpeg',
    images: [
      '/fotos/mascota-nina.jpeg',
      '/fotos/mascota-gato.jpeg',
      '/fotos/mascota-chiara.jpeg',
    ],
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero reservar mi cupo en el taller Pinta Tu Mascota en Acuarela del sábado 25 de abril.')}`,
    ctaText: 'Reserva tu cupo',
    badge: 'Metro Los Leones',
    startIso: '2026-04-25T15:00:00-04:00',
    endIso: '2026-04-25T19:00:00-04:00',
    location: 'Metro Los Leones, Providencia, Santiago',
    offerUrl: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero reservar mi cupo en el taller Pinta Tu Mascota en Acuarela del sábado 25 de abril.')}`,
  },
  {
    id: 'semanal-acuarela',
    slug: 'semanal',
    name: 'Talleres Semanales de Acuarela',
    tagline: 'Semanal · Grupos reducidos',
    description: 'Si sientes que necesitas una pausa, este espacio es para ti. Un encuentro semanal para explorar la acuarela a tu ritmo, en grupos de máximo seis personas, con acompañamiento cercano y personalizado. No necesitas experiencia previa.',
    date: 'Consulta horarios',
    time: '',
    duration: '2 horas por sesión',
    price: 'consultar',
    groupSize: 6,
    level: 'Todos los niveles',
    image: '/fotos/foto1.jpeg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero saber horarios y reservar mi lugar en el taller semanal de acuarela.')}`,
    badge: 'Nuestro taller más querido',
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
  },
  {
    id: 'principiantes',
    slug: 'principiantes',
    name: 'Workshop de Acuarela para Principiantes',
    tagline: 'Sesión única · Desde cero',
    description: 'Un taller pensado para quienes quieren iniciarse en la acuarela desde cero. Aprenderás los materiales esenciales, el control del agua y las pinceladas básicas mientras creas tu primera obra y un marcador de libros para llevar. Un espacio relajado para liberar el estrés y descubrir un nuevo lenguaje creativo.',
    date: 'Próximamente',
    time: 'A confirmar',
    duration: '3 horas · sesión única',
    price: 38000,
    groupSize: 7,
    level: 'Sin experiencia previa',
    image: '/fotos/mano-paisaje.jpeg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero saber más sobre el Workshop de Acuarela para Principiantes.')}`,
    badge: 'Desde cero',
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
    price: 30000,
    groupSize: 7,
    level: 'Todos los niveles',
    image: '/fotos/pincel-oscuro.jpeg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero saber más sobre el Workshop de Galaxias en Acuarela.')}`,
    badge: 'Acuarelas metalizadas',
  },
  {
    id: 'fotobordado',
    slug: 'fotobordado',
    name: 'Workshop de Fotobordado — "Mi infancia en hilos"',
    tagline: 'Sesión única · Arte como terapia',
    description: 'Una invitación a detenerte, mirar hacia adentro y dejar que el arte te abrace. A partir de una foto de tu infancia, el bordado y la fotografía se unen para transformar recuerdos en creaciones llenas de significado. No necesitas saber bordar — nosotras nos encargamos del resto.',
    date: 'Próximamente',
    time: 'A confirmar',
    duration: '3 horas · sesión única',
    price: 'consultar',
    groupSize: 8,
    level: 'Todos los niveles',
    image: '/fotos/foto2.jpeg',
    ctaLink: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Josefina! Quiero saber más sobre el Workshop de Fotobordado.')}`,
    badge: 'Arte terapéutico',
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
  },
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
