import styles from "./contact.module.css";
import { TextInput, TextArea, Button } from "mallee-ui";

export default function Contact() {
  return (
    <div className={styles.contactFormContainer}>
      <h2 className={styles.contactHeader}>Inviami un messaggio</h2>
      <TextInput name="Name" label="Nome" placeholder="Inserisci il tuo nome" />
      <TextInput
        name="Email"
        label="Email"
        placeholder="Inserisci il tuo email"
      />
      <TextArea
        name="Message"
        label="Messaggio"
        placeholder="Scrivi un messaggio"
      />
      <Button size="large">Submit</Button>
    </div>
  );
}
