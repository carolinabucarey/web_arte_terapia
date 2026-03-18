import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>

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
        <section className="container">
          <h2 className="sectionTitle">La profesora</h2>

          <div style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
            marginTop: '24px'
          }}>
            <img
              src="/images/josefina.jpg"
              alt="Josefina"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />

            <p className="sectionText">
              Josefina es artista y guía de procesos creativos. Su enfoque une
              la acuarela con el desarrollo personal, creando un espacio seguro
              para explorar emociones a través del arte.
            </p>
          </div>
        </section>

        {/* TALLERES */}
        <section className="container">
          <h2 className="sectionTitle">Talleres disponibles</h2>

          <div style={{
            marginTop: '24px',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid var(--border)',
            background: 'var(--surface)'
          }}>
            <p><strong>Lunes:</strong> 19:00 - 21:00</p>
            <p><strong>Miércoles:</strong> 18:00 - 20:00</p>
            <p><strong>Sábado:</strong> 11:00 - 13:00</p>
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