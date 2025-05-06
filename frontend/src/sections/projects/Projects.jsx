import styles from "./alt2.module.css";
import projectData from "../../data/projectData.jsx";
import { Button, Badge } from "mallee-ui";
import { useState } from "react";
import { Link } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile.js";
// import GitHubCalendar from "react-github-calendar";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("professional");

  // filter btns by category
  const filteredProjects = projectData.filter(
    (project) => project.category === selectedCategory
  );

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
    <div id="projectsSection">
      <div className="sectionTitle">
        <h1>Progetti</h1>
      </div>

      {/* Toggle buttons */}
      <div className={styles.selectBtnsWrapper}>
        <div className={styles.selectBtns}>
          <Button
            variant={selectedCategory === "professional" ? "filled" : "outline"}
            size={isMobile ? "medium" : "large"}
            className={styles.buttonCustom}
            onClick={() => setSelectedCategory("professional")}
          >
            PROFESSIONALI
          </Button>
          <Button
            variant={selectedCategory === "passion" ? "filled" : "outline"}
            size={isMobile ? "medium" : "large"}
            className={styles.buttonCustom}
            onClick={() => setSelectedCategory("passion")}
          >
            DI PASSIONE
          </Button>
        </div>
      </div>

      {/* Project cards */}
      <div className={styles.projectContainer}>
        {filteredProjects.map((project, index) => {
          const statusLabel = setProjectStatus(project.status);
          return (
            <div key={index} className={styles.projectCardsWrapper}>
              <div className={styles.projectBgContainer}>
                <div className={styles.cardInner}>
                  <div className={styles.contentItems}>
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                    <div className={styles.badgesContainer}>
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
                    <p className={styles.description}>
                      {project.descriptionShort}
                    </p>
                    <div className={styles.linkBtns}>
                      {statusLabel && (
                        <a href={project.href} className={styles.linkBtn}>
                          {statusLabel}
                        </a>
                      )}
                      <Link
                        to={`/projects/${project.id}`}
                        className={styles.linkBtn}
                      >
                        📓 Leggi di più
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.projectImgContainer}>
                  <img
                    src={project.mainImg}
                    alt={`${project.title}`}
                    className={styles.projectImg}
                  />
                </div>
              </div>
            </div>
            // <div key={index} className={styles.projectCard}>
            //   <div className={styles.imgBadgeContainer}>

            //   </div>

            //   <div className={styles.content}>
            //     <h2 className={styles.projectTitle}>{project.title}</h2>

            //     <div className={styles.badgeContainer}>
            //       {project.badges.map((badge, badgeIndex) => (
            //         <Badge
            //           key={badgeIndex}
            //           variant={badge.variant}
            //           color={badge.color}
            //         >
            //           {badge.children.toUpperCase()}
            //         </Badge>
            //       ))}
            //     </div>

            //     <p className={styles.description}>{project.description}</p>

            //     <div className={styles.statusBtns}>
            //       {statusLabel && (
            //         <a href={project.href} className={styles.statusTag}>
            //           {statusLabel}
            //         </a>
            //       )}
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
      {/* {!isMobile && (
        <div className={styles.githubCalendarContainer}>
          <div className={styles.githubCalendarWrapper}>
            <h2 className={styles.contributionsTitle}>Contributi su Github</h2>
            <GitHubCalendar username="campbellm92" />
          </div>
        </div>
      )} */}
    </div>
  );
}
