export const SITE_NAME = 'Arte y Terapia Salud';
export const SITE_URL = 'https://www.josefinafainearte.cl';
export const WHATSAPP_NUMBER = '56956900447';
export const WHATSAPP_MESSAGE = 'Hola! Me gustaría saber sobre los talleres';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const INSTAGRAM_BRAND = 'https://www.instagram.com/arteyterapiasalud/';
export const INSTAGRAM_PERSONAL = 'https://www.instagram.com/arte.jose.fa/';

export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Talleres', href: '/#talleres' },
  { label: 'Arte terapia', href: '/arte-terapia' },
  { label: 'Sobre mí', href: '/sobre-josefina' },
  { label: 'Contacto', href: '/contacto' },
];

export interface Workshop {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  date: string;
  time: string;
  duration: string;
  price: number | 'consultar';
  groupSize: number;
  level: string;
  image: string;
  ctaLink: string;
  ctaText?: string;
  badge?: string;
  detailLink?: string;
}

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
