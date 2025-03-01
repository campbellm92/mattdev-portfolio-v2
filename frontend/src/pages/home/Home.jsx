import { useState, useEffect } from "react";
import { Navbar } from "mallee-ui";
import Hero from "../../sections/hero/Hero";
import Projects from "../../sections/projects/Projects";
// import Skills from "../../sections/skills/Skills";
// import Services from "../../sections/services/Services";
import Contact from "../../sections/contact/Contact";
import { FaMoon } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar
        variant="with-branding-sticky-fade"
        logo="MATTHEW CAMPBELL"
        icons={[<FaMoon key="moon" />]}
      />
      <div>
        <Hero />
      </div>
      <hr />
      <div>
        <Projects />
      </div>
      <hr />
      {/* <div className={styles.skillsContainer}>
        <Skills />
      </div> */}
      {/* <div className={styles.servicesContainer}>
        <Services />
      </div> */}
      <div>
        <Contact />
      </div>
    </>
  );
}
