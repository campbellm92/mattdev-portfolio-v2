import indisciplinatoImage from "../assets/project-images/indisciplinato.webp";
import localisImage from "../assets/project-images/localis.webp";
import malleeImage from "../assets/project-images/mallee.webp";
import curlewImage from "../assets/project-images/curlew.webp";
import tastrailsImage from "../assets/project-images/tastrails.webp";

const projectData = [
  {
    id: "indisciplinato",
    href: "https://indisciplinato.it/",
    title: "Indisciplinato",
    description:
      "Landing page per un evento per produttori di vino indipendenti",
    mainImg: indisciplinatoImage,
    badges: [
      { children: "JavaScript", variant: "filled", color: "secondary" },
      { children: "HTML", variant: "filled", color: "secondary" },
      { children: "CSS", variant: "filled", color: "secondary" },
      { children: "Wordpress", variant: "filled", color: "secondary" },
      { children: "Elementor", variant: "filled", color: "secondary" },
    ],
    category: "professional",
    status: "live",
  },
  {
    id: "localis",
    href: "https://localis-capstone-f7a22eb1b92e.herokuapp.com/",
    title: "Localis Dashboard",
    description:
      "Progetto stage: Dashboard di visualizzazione dei dati per l'industria del turismo.",
    mainImg: localisImage,
    badges: [
      { children: "React", variant: "filled", color: "secondary" },
      { children: "Tailwind", variant: "filled", color: "secondary" },
      { children: "DaisyUI", variant: "filled", color: "secondary" },
      { children: "Recharts", variant: "filled", color: "secondary" },
      { children: "Node", variant: "filled", color: "secondary" },
      { children: "Express", variant: "filled", color: "secondary" },
      { children: "MySQL", variant: "filled", color: "secondary" },
      { children: "JSON Web Tokens", variant: "filled", color: "secondary" },
    ],
    category: "professional",
    status: "live",
  },
  {
    id: "mallee",
    href: "https://github.com/campbellm92/mallee-ui",
    title: "Mallee-UI",
    description:
      "La mia UI library, che sto costantemente aggiungendo e perfezionando. Questo sito è partialmente costruito con Mallee!",
    mainImg: malleeImage,
    badges: [
      { children: "TypeScript", variant: "filled", color: "secondary" },
      { children: "React", variant: "filled", color: "secondary" },
      { children: "Vite", variant: "filled", color: "secondary" },
      { children: "CSS Modules", variant: "filled", color: "secondary" },
      { children: "Storybook", variant: "filled", color: "secondary" },
    ],
    category: "passion",
    status: "in development",
  },
  {
    id: "curlew",
    href: "https://curlew.mattdev.it/",
    title: "Curlew",
    description: "Una piattaforma di markdown blogging minimalista.",
    mainImg: curlewImage,
    badges: [
      { children: "JavaScript", variant: "filled", color: "secondary" },
      { children: "Node", variant: "filled", color: "secondary" },
      { children: "Express", variant: "filled", color: "secondary" },
      { children: "HTML", variant: "filled", color: "secondary" },
      { children: "Markdown", variant: "filled", color: "secondary" },
    ],
    category: "passion",
    status: "github",
  },

  {
    id: "tastrails",
    href: "https://campbellm92.github.io/alltrails-clone/",
    title: "TasTrails",
    description:
      "Uno dei miei primi progetti: un clone di website di trekking Alltrails realizzato completamente con HTML e CSS.",
    mainImg: tastrailsImage,
    badges: [
      { children: "HTML", variant: "filled", color: "secondary" },
      { children: "CSS", variant: "filled", color: "secondary" },
    ],
    category: "passion",
    status: "live",
  },
];

export default projectData;
