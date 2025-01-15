/* eslint-disable react/prop-types */
import styles from "./SkillsComponents.module.css";

export default function SkillsComponent({ title, description, icons = [] }) {
  return (
    <div className={`${styles.skill} metallic-gradient border-animation`}>
      <h3>{title}</h3>
      <div className={styles.description}>
        <p>{description}</p>
        <div className={styles.icon}>
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`icon-${index}`}
              className={styles.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
