import localisImage from "../assets/project-images/localis.webp";
import malleeImage from "../assets/project-images/mallee.webp";
import whrImage from "../assets/project-images/whr.webp";
import curlewImage from "../assets/project-images/curlew.webp";
import bookcycleImage from "../assets/project-images/bookcycle.webp";
import popcornbaseImage from "../assets/project-images/popcorn-base.webp";
import tastrailsImage from "../assets/project-images/tastrails.webp";

const projectData = [
  {
    href: "https://localis-capstone-f7a22eb1b92e.herokuapp.com/",
    title: "Localis",
    content:
      "Progetto stage: Dashboard di visualizzazione dei dati per l'industria del turismo.",
    img: localisImage,
    badges: [
      { children: "React", variant: "filled", color: "tertiary" },
      { children: "Tailwind", variant: "filled", color: "tertiary" },
      { children: "DaisyUI", variant: "filled", color: "tertiary" },
      { children: "Recharts", variant: "filled", color: "tertiary" },
      { children: "Node", variant: "filled", color: "tertiary" },
      { children: "Express", variant: "filled", color: "tertiary" },
      { children: "MySQL", variant: "filled", color: "tertiary" },
      { children: "JSON Web Tokens", variant: "filled", color: "tertiary" },
    ],
  },
  {
    href: "https://github.com/campbellm92/mallee-ui",
    title: "Mallee-UI (BETA)",
    content:
      "La mia UI library, che sto costantemente aggiungendo e perfezionando. Questo sito è costruito con Mallee!",
    img: malleeImage,
    badges: [
      { children: "TypeScript", variant: "filled", color: "tertiary" },
      { children: "React", variant: "filled", color: "tertiary" },
      { children: "Vite", variant: "filled", color: "tertiary" },
      { children: "CSS Modules", variant: "filled", color: "tertiary" },
      { children: "Storybook", variant: "filled", color: "tertiary" },
    ],
  },
  {
    href: "https://curlew.mattdev.it/",
    title: "Curlew",
    content: "Una piattaforma di markdown blogging minimalista.",
    img: curlewImage,
    badges: [
      { children: "JavaScript", variant: "filled", color: "tertiary" },
      { children: "Node", variant: "filled", color: "tertiary" },
      { children: "Express", variant: "filled", color: "tertiary" },
      { children: "HTML", variant: "filled", color: "tertiary" },
      { children: "Markdown", variant: "filled", color: "tertiary" },
    ],
  },
  {
    href: "https://github.com/campbellm92/world-happiness-rankings",
    title: "World Happiness Rankings",
    content:
      "Progetto di visualizzazione dei dati completato durante il mio diploma universitario.",
    img: whrImage,
    badges: [
      { children: "React", variant: "filled", color: "tertiary" },
      { children: "React-Bootstrap", variant: "filled", color: "tertiary" },
      { children: "Recharts", variant: "filled", color: "tertiary" },
      { children: "AG-Grid", variant: "filled", color: "tertiary" },
      { children: "JSON Web Tokens", variant: "filled", color: "tertiary" },
    ],
  },
  {
    href: "https://campbellm92.github.io/bookcycle/",
    title: "BookCycle",
    content:
      "Libreria online, realizzata con Bootstrap. Completato per il corso universitario.",
    img: bookcycleImage,
    badges: [
      { children: "Bootstrap", variant: "filled", color: "tertiary" },
      { children: "HTML", variant: "filled", color: "tertiary" },
      { children: "CSS", variant: "filled", color: "tertiary" },
    ],
  },
  {
    href: "https://github.com/campbellm92/movies-app",
    title: "PopcornBase",
    content:
      "Database di film completato come parte della mia formazione backend (Node, Express) all'università.",
    img: popcornbaseImage,
    badges: [
      { children: "Node", variant: "filled", color: "tertiary" },
      { children: "Express", variant: "filled", color: "tertiary" },
      { children: "MySQL", variant: "filled", color: "tertiary" },
      { children: "Knex.js", variant: "filled", color: "tertiary" },
      { children: "Handlebars", variant: "filled", color: "tertiary" },
      { children: "HTML", variant: "filled", color: "tertiary" },
      { children: "CSS", variant: "filled", color: "tertiary" },
      { children: "JSON Web Tokens", variant: "filled", color: "tertiary" },
    ],
  },
  {
    href: "https://campbellm92.github.io/alltrails-clone/",
    title: "Alltrails Clone",
    content:
      "Un clone di website di trekking Alltrails realizzato completamente con HTML e CSS.",
    img: tastrailsImage,
    badges: [
      { children: "HTML", variant: "filled", color: "tertiary" },
      { children: "CSS", variant: "filled", color: "tertiary" },
    ],
  },
];

export default projectData;
