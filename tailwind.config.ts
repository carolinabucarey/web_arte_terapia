import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-deep': '#1F3A5F',
        'brand-water': '#3F6F8C',
        'brand-green': '#5E8F7E',
        'brand-soft': '#8FBFB0',
        'brand-lavender': '#C7B8D6',
        'brand-lavender-dark': '#9B8EC4',
        'bg-warm': '#F5F0E8',
        'bg-cream': '#FAF8F5',
        'text-main': '#3B2F2F',
        'text-muted': '#625650',
        border: '#E8DDD5',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Arial', 'sans-serif'],
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '48px',
        xl: '80px',
        '2xl': '120px',
      },
      maxWidth: {
        container: '1200px',
        reading: '760px',
        section: '900px',
      },
      borderRadius: {
        card: '12px',
        pill: '999px',
        image: '8px',
      },
      boxShadow: {
        card: '0 10px 30px rgba(80, 55, 45, 0.08)',
        'card-hover': '0 14px 40px rgba(31, 58, 95, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
