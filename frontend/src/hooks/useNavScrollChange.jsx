import { useEffect } from "react";

export default function useNavScrollChange() {
  useEffect(() => {
    const mainNav = document.getElementById("main-nav");

    const changeStyleOnScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        mainNav.style.cssText =
          "padding: 1rem; background-color: var(--primary-nav-scrolled); transition: all 1s ease; ";
      } else {
        mainNav.style.cssText =
          "padding: 1.5rem; background-color: var(--primary); transition: all 1s ease;";
      }
    };
    window.addEventListener("scroll", changeStyleOnScroll);
    return () => window.removeEventListener("scroll", changeStyleOnScroll);
  });
}
