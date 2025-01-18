import styles from "./contact.module.css";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function ContactDetails() {
  return (
    <div className={styles.detailsCol}>
      <a href="mailto:info@mattdev.it" className={styles.detail}>
        {/* email */}
        <FaEnvelope size={60} />
        <span>info@mattdev.it</span>
      </a>
      <a href="https://github.com/campbellm92" className={styles.detail}>
        {/* github */}
        <FaGithub size={60} />
        <span>GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/matthew-campbell-abb05b327/"
        className={styles.detail}
      >
        {/* linkedin */}
        <FaLinkedinIn size={60} />
        <span>LinkedIn</span>
      </a>
    </div>
  );
}
