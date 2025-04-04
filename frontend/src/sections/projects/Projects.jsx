import styles from "./alt.module.css";
import projectData from "../../data/projectData.js";
import { Button, Badge } from "mallee-ui";

export default function Projects() {
  return (
    <>
      <div className={styles.sectionTitle}>
        <h1>Progetti</h1>
      </div>
      <div className={styles.selectBtns}>
        <Button variant="outline" size="large">
          TUTTI
        </Button>
        <Button variant="outline" size="large">
          PROFESSIONALI
        </Button>
        <Button variant="outline" size="large">
          PERSONALI
        </Button>
        <Button variant="outline" size="large">
          FRONTEND MENTOR
        </Button>
      </div>

      <div className={styles.projectContainer}>
        {projectData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.imgBadgeContainer}>
              <img
                src={project.img}
                alt={`${project.title}`}
                className={styles.projectImg}
              />
              <div className={styles.badgeContainer}>
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
            </div>
            <div className={styles.content}>
              <h1>{project.title}</h1>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        ))}
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
