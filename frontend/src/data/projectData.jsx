// indisciplinato imgs:
import indisciplinatoImage from "../assets/project-images/indisciplinato.webp";
import indisciplinatoMobMenu from "../assets/project-images/indisciplinato-mob-menu.webp";
import indisciplinatoNav from "../assets/project-images/indisciplinato-nav.webp";
import indisciplinatoProducersSection from "../assets/project-images/indisciplinato-producers-section.webp";
import indisciplinatoButtonAnimation from "../assets/project-images/indisciplinato-button-animation.webp";
// localis imgs:
import localisImage from "../assets/project-images/localis.webp";
// import localisDashboard from "../assets/project-images/localis-dashboard.webp";
import localisDBOne from "../assets/project-images/localis-db-one.webp";
import localisDBTwo from "../assets/project-images/localis-db-two.webp";
import localisAIReportOne from "../assets/project-images/localis-ai-report-one.webp";
import localisAIReportTwo from "../assets/project-images/localis-ai-report-two.webp";
// import localisLandingPage from "../assets/project-images/localis-landing-page.webp";
// import localisWhitsunday from "../assets/project-images/localis-whitsunday.webp";
//spazio-eo
import spazioEOImage from "../assets/project-images/spazio-eo.webp";
//mallee imgs:
import malleeImage from "../assets/project-images/mallee.webp";
//curlew imgs:
import curlewImage from "../assets/project-images/curlew.webp";
//tastrails imgs:
import tastrailsImage from "../assets/project-images/tastrails.webp";

const projectData = [
  {
    id: "spazio-eo",
    href: "",
    title: "Sito web di Spazio EO",
    mainImg: spazioEOImage,
    descriptionShort: "Sito web per un colletivo artistico di Asti",
    descriptionLong: [
      <>
        Spazio EO è un collectivo d'arte ad Asti. Sto sviluppando il loro sito.
      </>,
    ],
    role: [
      "Sto lavorando in stretta collaborazione con gli artisti e i designer di Spazio EO per sviluppare il loro sito web secondo le loro esigenze. Sto sviluppando il sito in PHP e JavaScript con Wordpress come CMS.",
    ],
    badges: [
      { children: "PHP" },
      { children: "WordPress" },
      { children: "JavaScript" },
      { children: "HTML" },
      { children: "Tailwind" },
    ],
    // features: [
    //   {
    //     title: "Header responsive con interazione allo scroll",
    //     description: [
    //       "Qui mi è stato chiesto di creare un header che cambia colore quando si scorre la pagina, una cosa non supportata dalla versione gratuita di Elementor. Ho usato il plugin Ultimate Addons e gli ho dato una grande iniezione di HTML, CSS e JavaScript. Naturalmente c'è anche il menu per mobile!",
    //     ],
    //     images: [indisciplinatoNav, indisciplinatoMobMenu],
    //   },
    //   {
    //     title: "Sezione produttori di vino con toggle e animazioni",
    //     description: [
    //       "Per questa sezione ho implementato un pulsante toggle per mostrare altri produttori di vino, ancora con HTML, CSS e JavaScript. Le card sono inizialmente nascoste nel DOM tramite JavaScript. Quando si clicca sul pulsante, appaiono con un'animazione aggiunta tramite Elementor.",
    //     ],
    //     images: [indisciplinatoProducersSection, indisciplinatoButtonAnimation],
    //   },
    // ],
    challenges: [{ title: "blah", description: ["blah blah", "blah blah"] }],
    category: "professional",
    status: "in development",
    hasDetails: true,
  },
  {
    id: "indisciplinato",
    href: "https://indisciplinato.it/",
    title: "Indisciplinato",
    mainImg: indisciplinatoImage,
    descriptionShort:
      "Landing page per un evento per produttori di vino indipendenti.",
    descriptionLong: [
      <>
        Indisciplinato è un evento che mette in mostra i produttori di vino
        indipendenti e che si tiene ad Asti nel mese di giugno.
      </>,
      <>
        Il sito è stato progettato da{" "}
        <a
          href="https://www.linkedin.com/in/matteo-catalano-06696a180/"
          className="project-page-link"
        >
          Matteo Catalano
        </a>{" "}
        e costruito da noi con Wordpress/Elementor poi un po' di custom HTML,
        CSS e JavaScript.
      </>,
    ],
    role: [
      "Ho sviluppato UI su misura per replicare alcune funzionalità avanzate normalmente disponibili solo con Elementor Pro, come animazioni dinamiche e interazioni personalizzate, riducendo la dipendenza da plugin a pagamento.",
    ],
    badges: [
      { children: "JavaScript" },
      { children: "HTML" },
      { children: "CSS" },
      { children: "Wordpress" },
      { children: "Elementor" },
    ],
    features: [
      {
        title: "Header responsive con interazione allo scroll",
        description: [
          "Qui mi è stato chiesto di creare un header che cambia colore quando si scorre la pagina, una cosa non supportata dalla versione gratuita di Elementor. Ho usato il plugin Ultimate Addons e gli ho dato una grande iniezione di HTML, CSS e JavaScript. Naturalmente c'è anche il menu per mobile!",
        ],
        images: [indisciplinatoNav, indisciplinatoMobMenu],
      },
      {
        title: "Sezione produttori di vino con toggle e animazioni",
        description: [
          "Per questa sezione ho implementato un pulsante toggle per mostrare altri produttori di vino, ancora con HTML, CSS e JavaScript. Le card sono inizialmente nascoste nel DOM tramite JavaScript. Quando si clicca sul pulsante, appaiono con un'animazione aggiunta tramite Elementor.",
        ],
        images: [indisciplinatoProducersSection, indisciplinatoButtonAnimation],
      },
    ],
    challenges: [{ title: "blah", description: ["blah blah", "blah blah"] }],
    category: "professional",
    status: "live",
    hasDetails: true,
  },
  {
    id: "localis",
    href: "https://localis-capstone-f7a22eb1b92e.herokuapp.com/",
    title: "Localis Dashboard",
    mainImg: localisImage,
    descriptionShort:
      "Progetto stage: Dashboard di visualizzazione dei dati per l'industria del turismo.",
    descriptionLong: [
      <>
        Localis era il mio progetto di stage in cui io e una squadra di due
        altre persone hanno dovuto costruire un dashboard per la visualizzazione
        dei dati turistici.
      </>,
      <>
        Il dashboard è stato progettato per fornire alle amministrazioni locali
        e alle piccole aziende informazioni sulle metriche del turismo nelle
        loro aree locali. I dati sono rappresentati nei vari grafici e analisati
        con intelligenza artifiziale.
      </>,
      <>
        Il progetto è stato realissato in collaborazione con un'azienda di
        localizzazione si chiama{" "}
        <a href="https://www.localis.co/" className="project-page-link">
          Localis
        </a>
        .
      </>,
    ],
    role: [
      "Per questo progetto ho gestito la direzione frontend. Questo ha coinvolto tutti gli aspetti della progettazione e della successiva implementazione con React e Tailwind. Ho costruito anche l'UI e implementato la logica per i grafici sulla pagina principale del dashboard.",
    ],

    badges: [
      { children: "React" },
      { children: "Tailwind" },
      { children: "DaisyUI" },
      { children: "Recharts" },
      { children: "Node" },
      { children: "Express" },
      { children: "MySQL" },
      { children: "JSON Web Tokens" },
    ],
    features: [
      {
        title: "Grafici per la visualizzazione dei dati",
        description: [
          "Sulla pagina principale del dashboard i clienti possono ottenere una panoramica di elementi come il tempo medio di soggiorno dei turisti nelle loro aree locali, quali sono i mesi più popolari, ecc.",
        ],
        images: [localisDBOne, localisDBTwo],
      },
      {
        title: "Analisi LLM dei dati relativi agli alloggi",
        description: [
          "Ogni grafico offre la possibilità di ricevere un'analisi LLM delle metriche chiave, sia da un lista di richieste predefinite che una richiesta personalizzata.",
        ],
        images: [localisAIReportOne, localisAIReportTwo],
      },
    ],
    challenges: [{ title: "blah", description: ["blah blah", "blah blah"] }],
    category: "professional",
    status: "live",
    hasDetails: true,
  },

  {
    id: "mallee",
    href: "https://github.com/campbellm92/mallee-ui",
    title: "Mallee-UI",
    mainImg: malleeImage,
    descriptionShort:
      "La mia UI library, che sto costantemente aggiungendo e perfezionando. Questo sito è partialmente costruito con Mallee!",
    descriptionLong: [""],

    badges: [
      { children: "TypeScript" },
      { children: "React" },
      { children: "Vite" },
      { children: "CSS Modules" },
      { children: "Storybook" },
    ],
    // features: [{ title: "blah", description: ["blah blah", "blah blah"] }],
    // challenges: [{ title: "blah", description: ["blah blah", "blah blah"] }],
    category: "passion",
    status: "in development",
    hasDetails: false,
  },
  {
    id: "curlew",
    href: "https://curlew.mattdev.it/",
    title: "Curlew",
    mainImg: curlewImage,
    descriptionShort: "Una piattaforma di markdown blogging minimalista.",
    descriptionLong: [""],

    badges: [
      { children: "JavaScript" },
      { children: "Node" },
      { children: "Express" },
      { children: "HTML" },
      { children: "Markdown" },
    ],
    // features: [{ title: "blah", description: ["blah blah", "blah blah"] }],
    // challenges: [{ title: "blah", description: ["blah blah", "blah blah"] }],
    category: "passion",
    status: "github",
    hasDetails: false,
  },

  {
    id: "tastrails",
    href: "https://campbellm92.github.io/alltrails-clone/",
    title: "TasTrails",
    mainImg: tastrailsImage,
    descriptionShort:
      "Uno dei miei primi progetti: un clone di website di trekking Alltrails realizzato completamente con HTML e CSS.",
    descriptionLong: [""],

    badges: [{ children: "HTML" }, { children: "CSS" }],
    // features: [{ title: "blah", description: ["blah blah", "blah blah"] }],
    // challenges: [{ title: "blah", description: ["blah blah", "blah blah"] }],
    category: "passion",
    status: "live",
    hasDetails: false,
  },
];

export default projectData;
