import { Button, Card } from "mallee-ui";
import styles from "./services.module.css";

export default function Services() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.introContainer}>
        <h1 className={styles.title}>Servizi</h1>
        <p className={styles.content}>
          Offro una gamma di servizi di sviluppo web per privati e aziende,
          dalla progettazione all'implementazione fino alla manutenzione.
        </p>
      </div>
      <div className={styles.cardGrid}>
        <Card enableHoverEffect={false}>
          <Card.Title>Il tuo sito web dall'inizio alla fine</Card.Title>
          <Card.Content>
            <p>Progettazione, codifica e manutenzione.</p>
          </Card.Content>
          <div className={styles.btnContainer}>
            <Button
              variant="filled"
              color="neutral"
              onClick={() =>
                document
                  .getElementById("contactSection")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contattami
            </Button>
          </div>
        </Card>
        <Card enableHoverEffect={false}>
          <Card.Title>Servizi Frontend</Card.Title>
          <Card.Content>
            <p>
              Sistemi di design scalabili che includono UI unica e
              personalizzata, ottimizzazione della performance, accessibilità e
              più.
            </p>
          </Card.Content>
          <div className={styles.btnContainer}>
            <Button
              variant="filled"
              color="neutral"
              onClick={() =>
                document
                  .getElementById("contactSection")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contattami
            </Button>
          </div>
        </Card>{" "}
        <Card enableHoverEffect={false}>
          <Card.Title>Servizi Fullstack</Card.Title>
          <Card.Content>
            <p>
              Sviluppo delle API, gestione del database, applicazioni web
              personalizzate e più.
            </p>
          </Card.Content>
          <div className={styles.btnContainer}>
            <Button
              variant="filled"
              color="neutral"
              onClick={() =>
                document
                  .getElementById("contactSection")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contattami
            </Button>
          </div>
        </Card>{" "}
      </div>
    </div>
  );
}
