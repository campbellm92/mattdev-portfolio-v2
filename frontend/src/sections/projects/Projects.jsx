import styles from "./projects.module.css";
import projectData from "../../data/projectData.js";
import { Card, Badge } from "mallee-ui";

export default function Projects() {
  return (
    <>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Progetti</h1>
      </div>
      <div className={styles.cardGridWrapper}>
        <div className={styles.cardGrid}>
          {projectData.map((project, index) => (
            <a key={index} href={project.href}>
              <Card
                variant="with-image-transition"
                image={<img src={project.img} alt={project.title} />}
              >
                <Card.Title>{project.title}</Card.Title>
                <Card.Content>{project.content}</Card.Content>
                <div className={styles.badges}>
                  {project.badges.map((badge, badgeIndex) => (
                    <Badge
                      key={badgeIndex}
                      variant={badge.variant}
                      color={badge.color}
                    >
                      {badge.children}
                    </Badge>
                  ))}
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
