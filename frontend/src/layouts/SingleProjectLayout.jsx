import PropTypes from "prop-types";
import styles from "./single-project-layout.module.css";

export default function SingleProjectLayout({
  title,
  tech,
  role,
  mainImg,
  children,
}) {
  return (
    <>
      <div className={styles.mainInfoContainer}>
        <h1>{title}</h1>
        <div>{tech}</div>
        <p>{children}</p>
        <p>{role}</p>
      </div>

      <div className={styles.mainImgBackground}>
        <img src={mainImg} alt="Project main img" />
      </div>

      <div className={styles.projectBody}>{children}</div>
    </>
  );
}

SingleProjectLayout.propTypes = {
  title: PropTypes.string.isRequired,
  tech: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  description: PropTypes.string,
  role: PropTypes.string,
  mainImg: PropTypes.string,
  children: PropTypes.node,
};
