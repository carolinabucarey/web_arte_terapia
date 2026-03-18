import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandBlock}>
          <p className={styles.brand}>Taller de Acuarela y Arteterapia</p>
          <p className={styles.tagline}>
            Un espacio para crear, compartir y reconectar contigo.
          </p>
        </div>

        <div className={styles.infoBlock}>
          <p className={styles.professor}>Profesora: Josefina</p>
          <p className={styles.copy}>© 2026 Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
