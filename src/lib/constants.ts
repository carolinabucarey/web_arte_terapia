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
  price: number;
  groupSize: number;
  level: string;
  image: string;
  ctaLink: string;
  badge?: string;
}

export const WORKSHOPS: Workshop[] = [
  {
    id: 'semanal-acuarela',
    slug: 'semanal',
    name: 'Talleres Semanales de Acuarela',
    tagline: 'Semanal · Grupos reducidos',
    description: 'Si sientes que necesitas una pausa, este espacio es para ti. Un encuentro semanal para explorar la acuarela a tu ritmo, en grupos de máximo seis personas, con acompañamiento cercano y personalizado. No necesitas experiencia previa.',
    date: 'Lunes',
    time: '16:30 hrs',
    duration: '2 horas por sesión',
    price: 25000,
    groupSize: 6,
    level: 'Todos los niveles',
    image: '/fotos/foto1.jpeg',
    ctaLink: '/talleres/semanal',
    badge: 'Nuestro taller más querido',
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
];
