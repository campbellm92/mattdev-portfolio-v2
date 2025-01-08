import styles from "./home.module.css";
import { Navbar } from "mallee-ui";
import Hero from "../../sections/hero/Hero";
import Projects from "../../sections/projects/Projects";
import Skills from "../../sections/skills/Skills";
import Services from "../../sections/services/Services";

export default function Home() {
  return (
    <>
      <Navbar variant="with-branding-sticky-fade" logo="MATTHEW CAMPBELL" />
      <div className={styles.heroContainer}>
        <Hero />
      </div>
      <div className={styles.projectsContainer}>
        <Projects />
      </div>
      <div className={styles.skillsContainer}>
        <Skills />
      </div>
      <div className={styles.servicesContainer}>
        <Services />
      </div>
    </>
  );
}
