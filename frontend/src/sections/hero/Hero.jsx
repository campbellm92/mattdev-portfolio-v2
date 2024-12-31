import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.imgContainer}>
        <img src="../matt.jpg" alt="Me" />
      </div>
      <div className={styles.introContainer}>
        <h1 className={styles.title}>Ciao!</h1>
        <p className={styles.content}>
          Mi chiamo Matt. Sono uno <span>Sviluppatore Fullstack</span>
          dall'Australia 🦘 con sede ad <span>Asti, Italia</span>. Amo
          l'architettura a componenti frontend e sono appassionato di design e
          sviluppo di componenti UI. Il mio sogno è lavorare nel settore
          dell'e-learning come sviluppatore.
        </p>
        <p className={styles.content}>
          L'italiano non è la mia ligua madre, ma sto imparando. Altrimenti
          parlo <span>inglese</span> e <span>tedesco</span>.
        </p>
      </div>
    </div>
  );
}
