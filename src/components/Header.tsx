import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logo}>Arte Terapia Acuarela</div>

        <nav className={styles.nav}>
          <a href="#galeria">Galería</a>
          <a href="#sobre-mi">Sobre el taller</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}