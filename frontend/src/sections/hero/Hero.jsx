import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.profileImage} src="../matt.webp" alt="Me" />
      </div>
      <div className={styles.introContainer}>
        <h1 className={styles.title}>Ciao!</h1>
        <p className={styles.content}>
          Mi chiamo Matt. Sono uno{" "}
          <span className={styles.heroSpan}>Sviluppatore Fullstack</span>{" "}
          neolaureato dall'Australia 🦘 e attualmente vivo ad{" "}
          <span className={styles.heroSpan}>Asti</span>. Il mio interesse per lo
          sviluppo è nato durante la mia carriera come insegnante di inglese e
          ho scoperto rapidamente una passione per la creazione di applicazioni
          full-stack scalibile.
        </p>
        <p className={styles.content}>
          Mi piace lavorare con architetture frontend su componenti, ma sono
          anche entusiasta dello sviluppo backend, sia nella progettazione di
          API nella gestire database. Questo sito, infatti, è stato costruito
          utilizzando la mia libreria UI personalizzata chiamata{" "}
          <a
            href="https://github.com/campbellm92/mallee-ui"
            className={styles.heroLinks}
          >
            Mallee
          </a>
          . Al momento mi sto occupando del mantenimento di questa libreria in
          TypeScript/React e sto sviluppando anche{" "}
          <a
            href="https://github.com/campbellm92/suoniamo"
            className={styles.heroLinks}
          >
            un'app full-stack
          </a>{" "}
          con PHP/Laravel.
        </p>
        <p className={styles.content}>
          Altri progetti sono qui sotto 👇. Sono sempre aperto a collaborazioni
          e nuove sfide. Sentiti libero di contattarmi—mi farebbe piacere
          connetterci!
        </p>
      </div>
    </div>
  );
}
