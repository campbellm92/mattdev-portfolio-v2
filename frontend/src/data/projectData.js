import localisImage from "../assets/project-images/localis.webp";
import malleeImage from "../assets/project-images/mallee.webp";
import whrImage from "../assets/project-images/whr.webp";
import curlewImage from "../assets/project-images/curlew.webp";
import bookcycleImage from "../assets/project-images/bookcycle.webp";
import popcornbaseImage from "../assets/project-images/popcorn-base.webp";
import tastrailsImage from "../assets/project-images/tastrails.webp";

const projectData = [
  {
    id: "localis",
    href: "https://localis-capstone-f7a22eb1b92e.herokuapp.com/",
    title: "Localis",
    description:
      "Progetto stage: Dashboard di visualizzazione dei dati per l'industria del turismo.",
    features: [
      {
        title: "Dashboard UI",
        description: "blah blah",
        img: localisImage,
      },
    ],
    challenges: [
      {
        title: "Challenge 1",
        description: "blah blah bla bla",
        img: localisImage,
      },
    ],
    // features: [
    //   "Dashboard personalizzata con React e Tailwind",
    //   "Grafici con Recharts",
    //   "Gestione complessa dello stato con React Context API",
    //   "Backend performante in Node.js/Express",
    //   "Autenticazione con JWT",
    // ],
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
      "La mia UI library, che sto costantemente aggiungendo e perfezionando. Questo sito è costruito con Mallee!",
    features: [
      {
        title: "Libreria di UI personalizzati in React",
        description: "Description description",
        img: localisImage,
      },
    ],
    // features: [
    //   "Libreria di componenti UI personalizzati in React",
    //   "test visivo dei componenti con Storybook",
    //   "Progetto open source su NPM",
    // ],
    mainImg: malleeImage,
    badges: [
      { children: "TypeScript", variant: "filled", color: "secondary" },
      { children: "React", variant: "filled", color: "secondary" },
      { children: "Vite", variant: "filled", color: "secondary" },
      { children: "CSS Modules", variant: "filled", color: "secondary" },
      { children: "Storybook", variant: "filled", color: "secondary" },
    ],
    category: "personal",
    status: "in development",
  },
  {
    id: "curlew",
    href: "https://curlew.mattdev.it/",
    title: "Curlew",
    description: "Una piattaforma di markdown blogging minimalista.",
    features: [
      {
        title: "Templating HTML puri",
        description: "Description description",
        img: localisImage,
      },
    ],
    // features: [
    //   "Template HTML puri",
    //   "JavaScript per il caricamento dei post",
    //   "stile con CSS vanilla",
    //   "syntax highlighting per il codice",
    // ],
    mainImg: curlewImage,
    badges: [
      { children: "JavaScript", variant: "filled", color: "secondary" },
      { children: "Node", variant: "filled", color: "secondary" },
      { children: "Express", variant: "filled", color: "secondary" },
      { children: "HTML", variant: "filled", color: "secondary" },
      { children: "Markdown", variant: "filled", color: "secondary" },
    ],
    category: "personal",
    status: "github",
  },
  {
    id: "world-happiness-rankings",
    href: "https://github.com/campbellm92/world-happiness-rankings",
    title: "World Happiness Rankings",
    description:
      "Progetto di visualizzazione dei dati completato durante il mio diploma universitario.",
    features: [
      {
        title: "Tabelle e grafici a linee",
        description: "Description description",
        img: localisImage,
      },
    ],
    // features: [
    //   "Tabelle e grafici a linee",
    //   "fetch dei dati da una REST API",
    //   "autenticazione con JSON Web Token",
    //   "UI con componenti React-Bootstrap",
    // ],
    mainImg: whrImage,
    badges: [
      { children: "React", variant: "filled", color: "secondary" },
      { children: "React-Bootstrap", variant: "filled", color: "secondary" },
      { children: "Recharts", variant: "filled", color: "secondary" },
      { children: "AG-Grid", variant: "filled", color: "secondary" },
      { children: "JSON Web Tokens", variant: "filled", color: "secondary" },
    ],
    category: "university",
    status: "github",
  },
  {
    id: "bookcycle",
    href: "https://campbellm92.github.io/bookcycle/",
    title: "BookCycle",
    description:
      "Libreria online, realizzata con Bootstrap. Completato per il corso universitario.",
    features: [
      {
        title: "Mockup statico realizzato con HTML, CSS e Bootstrap",
        description: "Description description",
        img: localisImage,
      },
    ],
    // features: ["Mockup statico realizzato con HTML, CSS e Bootstrap"],
    mainImg: bookcycleImage,
    badges: [
      { children: "Bootstrap", variant: "filled", color: "secondary" },
      { children: "HTML", variant: "filled", color: "secondary" },
      { children: "CSS", variant: "filled", color: "secondary" },
    ],
    category: "university",
    status: "live",
  },

  {
    id: "popcornbase",
    href: "https://github.com/campbellm92/movies-app",
    title: "PopcornBase",
    description:
      "Database di film completato come parte della mia formazione backend (Node, Express) all'università.",
    // features: [
    //   "Template Handlebars con HTML e CSS personalizzati",
    //   "backend in Express",
    //   "database MySQL con query tramite Knex.js",
    //   "autenticazione con JWT",
    // ],
    features: [
      {
        title: "Template Handlebars con HTML e CSS personalizzati",
        description: "Description description",
        img: localisImage,
      },
    ],
    mainImg: popcornbaseImage,
    badges: [
      { children: "Node", variant: "filled", color: "secondary" },
      { children: "Express", variant: "filled", color: "secondary" },
      { children: "MySQL", variant: "filled", color: "secondary" },
      { children: "Knex.js", variant: "filled", color: "secondary" },
      { children: "Handlebars", variant: "filled", color: "secondary" },
      { children: "HTML", variant: "filled", color: "secondary" },
      { children: "CSS", variant: "filled", color: "secondary" },
      { children: "JSON Web Tokens", variant: "filled", color: "secondary" },
    ],
    category: "university",
    status: "github",
  },
  {
    id: "tastrails",
    href: "https://campbellm92.github.io/alltrails-clone/",
    title: "TasTrails",
    description:
      "Un clone di website di trekking Alltrails realizzato completamente con HTML e CSS.",
    // features: ["Mockup statico realizzato interamente con HTML e CSS"],
    features: [
      {
        title: "Mockup statico realizzato con HTML, CSS e Bootstrap",
        description: "Description description",
        img: localisImage,
      },
    ],
    mainImg: tastrailsImage,
    badges: [
      { children: "HTML", variant: "filled", color: "secondary" },
      { children: "CSS", variant: "filled", color: "secondary" },
    ],
    category: "personal",
    status: "live",
  },
];

export default projectData;
