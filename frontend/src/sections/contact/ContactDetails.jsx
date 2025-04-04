import styles from "./contact.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function ContactDetails() {
  return (
    <div className={styles.detailsCol}>
      <a href="mailto:info@mattdev.it" className={styles.detail}>
        {/* email */}
        <HiMail className={styles.HiMail} />
        <div className={styles.buffer}></div>
        <span>info@mattdev.it</span>
      </a>
      <a href="https://github.com/campbellm92" className={styles.detail}>
        {/* github */}
        <FaGithub className={styles.FaGithub} />
        <div className={styles.buffer}></div>
        <span>GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/matthew-campbell-abb05b327/"
        className={styles.detail}
      >
        {/* linkedin */}
        <FaLinkedin className={styles.FaLinkedIn} />
        <div className={styles.buffer}></div>
        <span>LinkedIn</span>
      </a>
    </div>
  );
}
