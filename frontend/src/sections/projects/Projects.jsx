import styles from "./projects.module.css";
import projectData from "../../data/projectData.jsx";
import Button from "../../components/Button.jsx";
import Badge from "../../components/Badge.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className={styles.projectsSection}>
      <div className="sectionTitle">
        <h1 className={styles.title}>Progetti</h1>
      </div>

      {/* Toggle buttons */}
      <div className={styles.selectBtnsWrapper}>
        <div className={styles.selectBtns}>
          <Button onClick={() => setSelectedCategory("professional")}>
            PROFESSIONALI
          </Button>
          <Button onClick={() => setSelectedCategory("passion")}>
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
                        <Badge key={badgeIndex}>
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
                          <Button>{statusLabel}</Button>
                        </a>
                      )}
                      {project.hasDetails && (
                        <Link to={`/projects/${project.id}`}>
                          <Button>Leggi di più</Button>
                        </Link>
                      )}
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
