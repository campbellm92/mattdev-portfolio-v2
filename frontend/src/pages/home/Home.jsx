import Navbar from "../../components/Navbar";
import Hero from "../../sections/hero/Hero";
import Projects from "../../sections/projects/Projects";
import Contact from "../../sections/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
      </div>
      <div>
        <Projects />
      </div>

      <div>
        <Contact />
      </div>
    </>
  );
}
