import PropTypes from "prop-types";
import styles from "./single-project-layout.module.css";

export default function SingleProjectLayout({
  title,
  tech,
  description,
  role,
  mainImg,
  features,
  challenges,
}) {
  return (
    <>
      <div className={styles.mainInfoContainer}>
        <h1>{title}</h1>
        <div>{tech}</div>
        <p>{description}</p>
        <p>{role}</p>
      </div>

      <div className={styles.mainImgBackground}>
        <img src={mainImg} alt="Project main img" />
      </div>

      <div className={styles.featuresContainer}>
        {features?.map((feature, index) => (
          <div key={index}>
            <h1>{feature.title}</h1>
            <p>{feature.description}</p>
            <img src={feature.img} alt={feature.title} />
          </div>
        ))}
      </div>

      <div className={styles.challengesContainer}>
        {challenges?.map((challenge, index) => (
          <div key={index}>
            <h1>{challenge.title}</h1>
            <p>{challenge.description}</p>
            <img src={challenge.img} alt={challenge.title} />
          </div>
        ))}
      </div>
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
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string,
    })
  ),
  challenges: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
