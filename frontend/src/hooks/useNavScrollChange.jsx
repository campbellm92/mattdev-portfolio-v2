import { useEffect } from "react";

export default function useNavScrollChange() {
  useEffect(() => {
    const mainNav = document.getElementById("main-nav");
    const logo = document.getElementById("logo");

    const changeStyleOnScroll = () => {
      const scrolled =
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;

      mainNav.style.cssText = `
        padding: ${scrolled ? "1rem" : "1.5rem"};
        transition: all 1s ease;
      `;

      const newText = scrolled ? "MC" : "Matt Campbell";
      if (logo.innerText !== newText) {
        logo.style.opacity = "0";

        setTimeout(() => {
          logo.innerText = newText;
          logo.style.transition = "opacity 1s ease";
          logo.style.opacity = "1";
        }, 300);
      }
    };
    window.addEventListener("scroll", changeStyleOnScroll);
    return () => window.removeEventListener("scroll", changeStyleOnScroll);
  });
}
