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
        <section>
          <img
            src="/images/hero-acuarela.jpg"
            alt="Acuarela"
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '0 0 24px 24px'
            }}
          />
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
              gap: '32px',
              alignItems: 'center',
              marginTop: '8px'
            }}
          >
            <img
              src="/fotos/jose.png"
              alt="Josefina Fainé"
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />

            <div style={{ maxWidth: '520px' }}>
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
        <section className="container">
          <h2 className="sectionTitle">Contacto</h2>

          <form style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: '24px',
            maxWidth: '400px'
          }}>
            <input placeholder="Nombre" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }} />
            <input placeholder="Email" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }} />
            <textarea placeholder="Mensaje" rows={4} style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }} />

            <a
              href="https://www.instagram.com/arteyterapiasalud/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 18px',
                borderRadius: '999px',
                background: 'var(--accent)',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'opacity 0.2s ease'
              }}
            >
              Ver Instagram
            </a>

            <button
              type="submit"
              style={{
                padding: '12px',
                borderRadius: '999px',
                border: 'none',
                background: 'var(--accent)',
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              Enviar
            </button>
          </form>
        </section>

      </main>
      <Footer />
    </>
  );
}