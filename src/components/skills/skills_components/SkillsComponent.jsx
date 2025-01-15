/* eslint-disable react/prop-types */
import styles from "./SkillsComponents.module.css";

export default function SkillsComponent({ title, description, icons = [] }) {
  return (
    <div className={`border-animation ${styles.skill} metallic-gradient`}>
      <h3>{title}</h3>
      <div className={styles.description}>
        <p>{description}</p>
        <div className={styles.icon}>{icons.map((icon) => icon)}</div>
      </div>
    </div>
  );
}
