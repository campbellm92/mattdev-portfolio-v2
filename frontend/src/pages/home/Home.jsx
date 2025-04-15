// import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../sections/hero/Hero";
import Projects from "../../sections/projects/Projects";
// import Skills from "../../sections/skills/Skills";
// import Services from "../../sections/services/Services";
import Contact from "../../sections/contact/Contact";
// import { FaMoon } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />
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
