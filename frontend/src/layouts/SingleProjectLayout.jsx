import PropTypes from "prop-types";
import styles from "./single-project-layout.module.css";
import { Badge } from "mallee-ui";

export default function SingleProjectLayout({
  title,
  badges,
  descriptionLong,
  role,
  mainImg,
  features,
  children,
}) {
  return (
    <div className={styles.singleProjectPage}>
      <div className={styles.mainInfoContainer}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.badgesContainer}>
          {badges?.map((badge, index) => (
            <Badge key={index} variant={badge.variant} color={badge.color}>
              {badge.children}
            </Badge>
          ))}
        </div>
        <div className={styles.description}>
          {descriptionLong.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>

      {children}
      <div className={styles.roleContainer}>
        <h3>Il mio ruolo</h3>
        {role.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      <div className={styles.mainImgContainer}>
        <img src={mainImg} alt="Project main img" className={styles.mainImg} />
      </div>

      {features.map((feature, index) => (
        <div key={index}>
          <h3>{feature.title}</h3>
          {feature.image && <img src={feature.image} alt={feature.title} />}
          <ul>
            {feature.description.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      ))}

      {children}
    </div>
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
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      image: PropTypes.string, // optional
    })
  ).isRequired,
};
