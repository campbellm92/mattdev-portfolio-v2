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
            <Button variant="filled" color="neutral">
              Contattami
            </Button>
          </div>
        </Card>
        <Card color="secondary" enableHoverEffect={false}>
          <Card.Title>Service</Card.Title>
          <Card.Content>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              non facilis voluptatem in
            </p>
          </Card.Content>
          <div className={styles.btnContainer}>
            <Button variant="filled" color="neutral">
              Contattami
            </Button>
          </div>
        </Card>{" "}
        <Card enableHoverEffect={false}>
          <Card.Title>Service Service Service Service</Card.Title>
          <Card.Content>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              non facilis voluptatem in
            </p>
          </Card.Content>
          <div className={styles.btnContainer}>
            <Button variant="filled" color="neutral">
              Contattami
            </Button>
          </div>
        </Card>{" "}
        <Card enableHoverEffect={false} color="tertiary">
          <Card.Title>Service</Card.Title>
          <Card.Content>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              non facilis voluptatem in possimus aspernatur deleniti repellendus
              ipsa quasi. Tempore quis quae veritatis facere amet possimus
              impedit temporibus dicta consequuntur?
            </p>
          </Card.Content>
          <div className={styles.btnContainer}>
            <Button variant="filled" color="neutral">
              Contattami
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
