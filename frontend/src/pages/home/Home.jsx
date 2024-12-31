import styles from "./home.module.css";
import { Navbar } from "mallee-ui";
import Hero from "../../sections/hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar variant="with-branding-sticky-fade" logo="MATTHEW CAMPBELL" />
      <div className={styles.container}>
        <Hero />
      </div>
    </>
  );
}
