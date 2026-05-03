'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[420px] overflow-hidden">
      {/* Background image */}
      <Image
        src="/fotos/foto2.jpeg"
        alt="Taller de acuarela y arteterapia con Josefina Faine en Santiago"
        fill
        priority
        className="object-cover -scale-x-100"
        sizes="100vw"
      />

      {/* White fade at top + subtle overlay only at bottom for text readability */}
      <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-white/80 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-deep/[0.35]" />

      {/* Glassmorphism card */}
      <div
        className="absolute left-[clamp(20px,5vw,64px)] right-[clamp(20px,5vw,64px)] bottom-[clamp(24px,6vw,56px)] max-w-[760px] p-[clamp(22px,4vw,34px)] rounded-3xl border border-white/[0.28] backdrop-blur-[12px] shadow-card-hover"
        style={{ background: 'rgba(199,184,214,0.18)' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-3 text-[0.82rem] tracking-[0.18em] uppercase text-brand-deep/80 font-body"
        >
          Acuarela · Autocuidado · Expresión
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display font-bold text-[clamp(2rem,5vw,4.2rem)] leading-[1.06] text-brand-deep mb-6"
          style={{ textShadow: '0 2px 12px rgba(255,255,255,0.4)' }}
        >
          Talleres para crear, sentir y habitar tu mundo interior a través del arte
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-wrap gap-3"
        >
          <Link
            href="/#talleres"
            className="bg-brand-green text-white rounded-pill px-7 py-3.5 font-body font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Ver talleres
          </Link>
          <Link
            href="/contacto"
            className="border border-brand-deep/30 text-brand-deep rounded-pill px-7 py-3.5 font-body font-semibold text-sm hover:bg-brand-deep/5 transition-colors"
          >
            Reservar mi lugar
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
