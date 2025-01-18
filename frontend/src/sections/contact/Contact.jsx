import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactSection}>
      <ContactDetails />
      <ContactForm />
    </div>
  );
}
