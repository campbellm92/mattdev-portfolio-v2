import styles from "./home.module.css";
import { Navbar } from "mallee-ui";
import Hero from "../../sections/hero/Hero";
import Skills from "../../sections/skills/Skills";

export default function Home() {
  return (
    <>
      <Navbar variant="with-branding-sticky-fade" logo="MATTHEW CAMPBELL" />
      <div className={styles.heroContainer}>
        <Hero />
      </div>
      <div className={styles.projectsContainer}></div>
      <div className={styles.skillsContainer}>
        <Skills />
      </div>
    </>
  );
}
