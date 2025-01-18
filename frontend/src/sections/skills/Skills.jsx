import styles from "./skills.module.css";
import icons from "../../assets/icons";

export default function Skills() {
  const iconEntries = Object.entries(icons);
  const duplicatedIcons = [...iconEntries, ...iconEntries];
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.scrollWrapper}>
        <div className={styles.scrollContainer}>
          {duplicatedIcons.map(([name, src], index) => (
            <div key={`${name}-${index}`} className={styles.scrollElement}>
              <img className={styles.icon} src={src} alt={`${name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
