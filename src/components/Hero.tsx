import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Taller de acuarela y arteterapia</p>
          <h1 className={styles.title}>
            Un espacio para pintar, sentir y volver a ti
          </h1>
          <p className={styles.description}>
            Explora la acuarela como una herramienta de expresión emocional,
            conexión interior y creatividad consciente.
          </p>

          <div className={styles.actions}>
            <a href="#galeria" className={styles.primaryBtn}>
              Ver imágenes
            </a>
            <a href="#contacto" className={styles.secondaryBtn}>
              Consultar taller
            </a>
          </div>
        </div>

        <div className={styles.imageCard}>
          <img
            src="/images/hero-acuarela.jpg"
            alt="Pintura en acuarela del taller"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}