export default function Navbar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e9e3dc',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
       <a
  href="#inicio"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
  }}
>
  <img
    src="/logo/logo.png"
    alt="Arte Terapia"
    style={{
      height: '44px',
      width: 'auto',
      objectFit: 'contain',
    }}
  />
</a>

        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <a href="#inicio" style={{ textDecoration: 'none', color: '#4b3f39' }}>
            Inicio
          </a>
          <a href="#talleres" style={{ textDecoration: 'none', color: '#4b3f39' }}>
            Talleres
          </a>
          <a href="#sobre-mi" style={{ textDecoration: 'none', color: '#4b3f39' }}>
            Sobre mí
          </a>
          <a href="#contacto" style={{ textDecoration: 'none', color: '#4b3f39' }}>
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
