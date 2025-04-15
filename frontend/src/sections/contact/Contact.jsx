import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div id="contactSection">
      <div className="sectionTitle">
        <h1>Contatti</h1>
      </div>
      <div className={styles.contactSection} id="contactSection">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
}
