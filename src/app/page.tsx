import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <main id="inicio" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

        {/* FOTO PRINCIPAL */}
        <section className="container">
          <img
            src="/fotos/foto1.jpg"
            alt="Foto taller"
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '16px'
            }}
          />
        </section>

        {/* INTRO TALLERES */}
        <section
          id="talleres"
          className="container"
          style={{
            maxWidth: '900px',
            paddingTop: '8px'
          }}
        >
          <p
            style={{
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '16px'
            }}
          >
            Acuarela · Autocuidado · Expresión
          </p>

          <h2
            className="sectionTitle"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              lineHeight: 1.08,
              marginBottom: '20px',
              maxWidth: '720px'
            }}
          >
            Talleres para crear, sentir y habitar tu mundo interior a través del color.
          </h2>

          <p
            className="sectionText"
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.9,
              maxWidth: '760px',
              color: 'var(--text)'
            }}
          >
            Estos talleres están orientados al autocuidado y a la expresión artística sin exigencias ni límites.
            La acuarela nos invita a trabajar con la transparencia, la suavidad de las capas, la mezcla de color
            y el gesto espontáneo, permitiendo explorar tanto técnicas básicas como recursos más sensibles y
            expresivos en un espacio íntimo, creativo y libre de juicio.
          </p>
        </section>

        {/* HERO IMAGE */}
        <section className="container">
          <div
            style={{
              width: '100%',
              minHeight: '320px',
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #f6efe8 0%, #ebe2d8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '32px'
            }}
          >
            <img
              src="/fotos/foto1.jpg"
              alt="Acuarela"
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '480px',
                objectFit: 'cover',
                borderRadius: '20px'
              }}
            />
          </div>
        </section>

        {/* DESCRIPCIÓN */}
        <section className="container">
          <h2 className="sectionTitle">Sobre el taller</h2>
          <p className="sectionText">
            Este es un espacio de arteterapia a través de la acuarela, donde
            podrás conectar contigo, explorar tu creatividad y expresarte
            emocionalmente sin juicio.
          </p>
        </section>

        {/* PROFESORA */}
        <section
          id="sobre-mi"
          className="container"
          style={{
            maxWidth: '900px'
          }}
        >
          <p
            style={{
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '16px'
            }}
          >
            Sobre la guía
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '32px',
              alignItems: 'center',
              marginTop: '8px'
            }}
          >
            <img
              src="/fotos/jose.png"
              alt="Josefina Fainé"
              style={{
                width: 'clamp(140px, 24vw, 180px)',
                height: 'clamp(140px, 24vw, 180px)',
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0
              }}
            />

            <div style={{ maxWidth: '520px', flex: '1 1 320px', minWidth: '280px' }}>
              <h2
                className="sectionTitle"
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  marginBottom: '12px'
                }}
              >
                Josefina Fainé
              </h2>

              <p
                className="sectionText"
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.8
                }}
              >
                Artista visual titulada de la Universidad de Chile, magíster en Arteterapia y especialista en acuarela contemporánea.
                Su trabajo integra técnicas tradicionales con exploración emocional, acompañando procesos creativos desde una mirada
                sensible, intuitiva y profundamente humana.
                
                En sus talleres invita a soltar la exigencia, conectar con el cuerpo y permitir que el color se convierta en lenguaje,
                creando un espacio seguro donde cada persona puede expresarse libremente y reconectar con su mundo interior.
              </p>
            </div>
          </div>
        </section>

        {/* HORARIOS TALLERES */}
        <section
          className="container"
          style={{
            maxWidth: '900px'
          }}
        >
          <p
            style={{
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '16px'
            }}
          >
            Horarios
          </p>

          <h2
            className="sectionTitle"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              marginBottom: '20px'
            }}
          >
            Horarios de los talleres
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              marginTop: '8px'
            }}
          >
            {[
              { dia: 'Lunes', horario: '16:30 hrs' },
              { dia: 'Martes', horario: 'Por definir' },
              { dia: 'Miércoles', horario: 'Por definir' },
              { dia: 'Jueves', horario: 'Por definir' },
              { dia: 'Viernes', horario: 'Por definir' },
              { dia: 'Sábado', horario: 'Por definir' }
            ].map((item) => (
              <div
                key={item.dia}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 22px',
                  borderRadius: '16px',
                  border: '1px solid var(--border)',
                  background: 'var(--surface)'
                }}
              >
                <span
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text)'
                  }}
                >
                  {item.dia}
                </span>
                <span
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--muted, #6b625d)'
                  }}
                >
                  {item.horario}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="container" style={{ maxWidth: '900px' }}>
          <h2 className="sectionTitle">Contacto</h2>

          <p
            className="sectionText"
            style={{
              marginTop: '8px',
              maxWidth: '620px'
            }}
          >
            Si quieres más información sobre los talleres, reservar tu cupo o conocer próximas fechas,
            puedes escribirme a través del formulario o visitar Instagram.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              alignItems: 'start',
              marginTop: '24px'
            }}
          >
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                width: '100%',
                padding: '24px',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                background: 'var(--surface)'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="nombre" style={{ fontWeight: 600, color: 'var(--text)' }}>
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    background: '#fff',
                    width: '100%'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="email" style={{ fontWeight: 600, color: 'var(--text)' }}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tuemail@correo.com"
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    background: '#fff',
                    width: '100%'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="mensaje" style={{ fontWeight: 600, color: 'var(--text)' }}>
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Cuéntame qué te gustaría saber"
                  rows={5}
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    background: '#fff',
                    width: '100%',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '14px 18px',
                  borderRadius: '999px',
                  border: 'none',
                  background: 'var(--accent)',
                  color: 'white',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Enviar mensaje
              </button>
            </form>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: '24px',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(248,244,239,0.95) 100%)'
              }}
            >
              <p
                style={{
                  fontSize: '0.82rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  margin: 0
                }}
              >
                Más información
              </p>

              <h3
                style={{
                  fontSize: '1.5rem',
                  lineHeight: 1.2,
                  margin: 0,
                  color: 'var(--text)'
                }}
              >
                También puedes seguir el proyecto en Instagram
              </h3>

              <p
                style={{
                  margin: 0,
                  lineHeight: 1.8,
                  color: 'var(--text)'
                }}
              >
                Ahí encontrarás más imágenes, procesos, inspiración y novedades sobre los talleres.
              </p>

              <a
                href="https://www.instagram.com/arteyterapiasalud/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver Instagram de Arte y Terapia Salud"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  width: 'fit-content',
                  padding: '12px 18px',
                  borderRadius: '999px',
                  background: 'var(--accent)',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center' }} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
                  </svg>
                </span>
                <span>Ver Instagram</span>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}