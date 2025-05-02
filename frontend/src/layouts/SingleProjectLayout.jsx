import PropTypes from "prop-types";
import styles from "./single-project-layout.module.css";
import { Badge } from "mallee-ui";

export default function SingleProjectLayout({
  title,
  descriptionLong,
  badges,
  role,
  mainImg,
  children,
}) {
  return (
    <>
      <div className={styles.mainInfoContainer}>
        <h1>{title}</h1>
        <div className={styles.badgesContainer}>
          {badges?.map((badge, index) => (
            <Badge key={index} variant={badge.variant} color={badge.color}>
              {badge.children}
            </Badge>
          ))}
        </div>
        <p>{descriptionLong}</p>
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
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.string.isRequired,
      variant: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  descriptionLong: PropTypes.string,
  role: PropTypes.string,
  mainImg: PropTypes.string,
  children: PropTypes.node,
};
