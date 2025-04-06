import styles from "./alt.module.css";
import projectData from "../../data/projectData.js";
import { Button, Badge } from "mallee-ui";
import { useState } from "react";
import useIsMobile from "../../../hooks/useIsMobile.js";
import GitHubCalendar from "react-github-calendar";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // filter btns by category
  const filteredProjects =
    selectedCategory === "all"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  // set UI based on project status
  const setProjectStatus = (status) => {
    if (status === "live") return "🌐 Live";
    if (status === "in development") return "🧱 In Sviluppo";
    if (status === "github") return "🌐 GitHub";
    if (status === "paused") return "⏸️ In Pausa";
    return null;
  };

  const isMobile = useIsMobile();

  return (
    <>
      <div className={styles.sectionTitle}>
        <h1>Progetti</h1>
      </div>

      <div className={styles.selectBtnsWrapper}>
        <div className={styles.selectBtns}>
          <Button
            variant={selectedCategory === "all" ? "filled" : "outline"}
            size={isMobile ? "medium" : "large"}
            className={styles.buttonCustom}
            onClick={() => setSelectedCategory("all")}
          >
            TUTTI
          </Button>
          <Button
            variant={selectedCategory === "professional" ? "filled" : "outline"}
            size={isMobile ? "medium" : "large"}
            className={styles.buttonCustom}
            onClick={() => setSelectedCategory("professional")}
          >
            PROFESSIONALI
          </Button>
          <Button
            variant={selectedCategory === "university" ? "filled" : "outline"}
            size={isMobile ? "medium" : "large"}
            className={styles.buttonCustom}
            onClick={() => setSelectedCategory("university")}
          >
            UNIVERSITARI
          </Button>
          <Button
            variant={selectedCategory === "personal" ? "filled" : "outline"}
            size={isMobile ? "medium" : "large"}
            className={styles.buttonCustom}
            onClick={() => setSelectedCategory("personal")}
          >
            PERSONALI
          </Button>
          <Button
            variant={
              selectedCategory === "frontend mentor" ? "filled" : "outline"
            }
            size={isMobile ? "medium" : "large"}
            className={styles.buttonCustom}
            onClick={() => setSelectedCategory("frontend mentor")}
          >
            FRONTEND MENTOR
          </Button>
        </div>
      </div>

      <div className={styles.projectContainer}>
        {filteredProjects.map((project, index) => {
          const statusLabel = setProjectStatus(project.status);

          return (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imgBadgeContainer}>
                <img
                  src={project.img}
                  alt={`${project.title}`}
                  className={styles.projectImg}
                />
              </div>

              <div className={styles.content}>
                <h1 className={styles.projectTitle}>{project.title}</h1>

                <div className={styles.badgeContainer}>
                  {project.badges.map((badge, badgeIndex) => (
                    <Badge
                      key={badgeIndex}
                      variant={badge.variant}
                      color={badge.color}
                    >
                      {badge.children.toUpperCase()}
                    </Badge>
                  ))}
                </div>

                <p className={styles.description}>{project.description}</p>

                <ul className={styles.featuresList}>
                  {project.features.map((feature, index) => (
                    <li key={index} className={styles.projectFeature}>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className={styles.statusBtns}>
                  {statusLabel && (
                    <a href={project.href} className={styles.statusTag}>
                      {statusLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.githubCalendarContainer}>
        <div className={styles.githubCalendarWrapper}>
          <h2 className={styles.contributionsTitle}>Contributi su Github</h2>
          <GitHubCalendar username="campbellm92" />
        </div>
      </div>
    </>
  );
}

// export default function Projects() {
//   return (
//     <div className={styles.projectsContainer}>
//       <div className={styles.headerContainer}>
//         <h1 className={styles.header}>Progetti</h1>
//       </div>
//       {/* <div className={styles.cardGridWrapper}> */}
//       <div className={styles.cardGrid}>
//         {projectData.map((project, index) => (
//           <a key={index} href={project.href}>
//             <Card
//               variant="with-image-transition"
//               image={<img src={project.img} alt={project.title} />}
//             >
//               <Card.Title>{project.title}</Card.Title>
//               <Card.Content>{project.content}</Card.Content>
//               <div className={styles.badges}>
//                 {project.badges.map((badge, badgeIndex) => (
//                   <Badge
//                     key={badgeIndex}
//                     variant={badge.variant}
//                     color={badge.color}
//                   >
//                     {badge.children}
//                   </Badge>
//                 ))}
//               </div>
//             </Card>
//           </a>
//         ))}
//       </div>
//       {/* </div> */}
//     </div>
//   );
// }
