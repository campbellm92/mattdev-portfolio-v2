import styles from "./badge.module.css";

export default function Badge({ children }) {
  return <div className={styles.badge}>{children}</div>;
}
