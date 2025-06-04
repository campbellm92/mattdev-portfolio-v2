import styles from "./button.module.css";

export default function Button({ children, onClick, size }) {
  return (
    <div className={styles.buttonBack}>
      <button onClick={onClick} size={size} className={styles.buttonFront}>
        {children}
      </button>
    </div>
  );
}
