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
      <div className={styles.mainInfoSection}>
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

        <div className={styles.roleContainer}>
          <h3>Il mio ruolo</h3>
          {role.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        <div className={styles.mainImgContainer}>
          <img
            src={mainImg}
            alt="Project main img"
            className={styles.mainImg}
          />
        </div>
      </div>

      <div className={styles.featuresSection}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featuresContainer}>
            <div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <div>
                {feature.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              {Array.isArray(feature.images) &&
                feature.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${feature.title} - ${index}`}
                    className={styles.featureImg}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>

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
  descriptionLong: PropTypes.arrayOf(PropTypes.node).isRequired,
  role: PropTypes.arrayOf(PropTypes.string).isRequired,
  mainImg: PropTypes.string.isRequired,
  children: PropTypes.node,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
