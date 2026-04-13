'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SectionHeader from './SectionHeader';
import AnimateOnScroll from './AnimateOnScroll';
import { WHATSAPP_LINK, INSTAGRAM_BRAND } from '@/lib/constants';

interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
  telefono?: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl border border-border bg-white font-body text-text-main text-sm focus:border-brand-green focus:outline-none transition-colors duration-200 placeholder:text-text-muted/50';

  return (
    <section id="contacto" className="section-padding">
      <div className="max-w-section mx-auto">
        <AnimateOnScroll>
          <SectionHeader label="Conversemos" title="¿Quieres saber más?" />
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p className="text-text-muted font-body text-base mb-8 max-w-reading">
            Si quieres más información sobre los talleres, reservar tu cupo o conocer próximas fechas, escríbenos.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form */}
          <AnimateOnScroll delay={0.15}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-6 rounded-2xl border border-border bg-bg-cream">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nombre" className="font-semibold text-text-main text-sm font-body">
                  Nombre
                </label>
                <input
                  id="nombre"
                  placeholder="Tu nombre"
                  className={inputClass}
                  {...register('nombre', { required: 'Este campo es requerido' })}
                />
                {errors.nombre && (
                  <p className="text-rose-600 text-xs font-body">{errors.nombre.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-semibold text-text-main text-sm font-body">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tuemail@correo.com"
                  className={inputClass}
                  {...register('email', {
                    required: 'Este campo es requerido',
                    pattern: { value: /^\S+@\S+$/i, message: 'Ingresa un email válido' },
                  })}
                />
                {errors.email && (
                  <p className="text-rose-600 text-xs font-body">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="mensaje" className="font-semibold text-text-main text-sm font-body">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  placeholder="Cuéntanos qué te gustaría saber"
                  className={`${inputClass} resize-vertical`}
                  {...register('mensaje', { required: 'Este campo es requerido' })}
                />
                {errors.mensaje && (
                  <p className="text-rose-600 text-xs font-body">{errors.mensaje.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="telefono" className="font-semibold text-text-main text-sm font-body">
                  Teléfono <span className="font-normal text-text-muted">(opcional)</span>
                </label>
                <input
                  id="telefono"
                  placeholder="+56 9 1234 5678"
                  className={inputClass}
                  {...register('telefono')}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-2 bg-brand-green text-white rounded-pill px-6 py-3.5 font-body font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
              </button>

              {status === 'success' && (
                <p className="text-brand-green text-sm font-body">
                  Gracias por escribirnos. Te responderemos pronto.
                </p>
              )}
              {status === 'error' && (
                <p className="text-rose-600 text-sm font-body">
                  Hubo un problema al enviar tu mensaje. Intenta de nuevo o escríbenos por WhatsApp.
                </p>
              )}
            </form>
          </AnimateOnScroll>

          {/* Info card */}
          <AnimateOnScroll delay={0.25}>
            <div className="flex flex-col gap-5 p-6 rounded-2xl border border-border bg-gradient-to-b from-white/95 to-bg-warm/95 h-fit">
              <p className="text-[13px] uppercase tracking-[0.18em] text-brand-lavender-dark font-body">
                También puedes
              </p>

              <h3 className="font-display font-semibold text-xl text-text-main leading-tight">
                Escríbenos directamente por WhatsApp
              </h3>

              <p className="text-text-muted font-body text-sm leading-relaxed">
                Si prefieres una respuesta más rápida, escríbenos por WhatsApp. Estaremos encantadas de ayudarte.
              </p>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-pill px-6 py-3 font-body font-semibold text-sm hover:opacity-90 transition-opacity w-fit"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escríbenos por WhatsApp
              </a>

              <div className="border-t border-border pt-4">
                <p className="text-text-muted font-body text-sm mb-3">
                  También puedes seguir el proyecto en Instagram
                </p>
                <a
                  href={INSTAGRAM_BRAND}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-water font-body font-medium text-sm hover:text-brand-deep transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                  @arteyterapiasalud
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
