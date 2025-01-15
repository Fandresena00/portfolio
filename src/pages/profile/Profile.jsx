import { useState } from "react";
import About from "../../components/about_me/About";
import Skills from "../../components/skills/Skills";
import styles from "./Profile.module.css";

export default function Profile() {
  const [change, setChange] = useState("about");

  const handleChange = (value) => {
    setChange(value);
  };

  return (
    <div className={`${styles.container}  container`}>
      <h2>Profile</h2>
      <div className={styles.change_nav}>
        <button
          className={`${styles.change}  ${
            change === "about"
              ? `${styles.active} tech-gradient`
              : `${styles.not_active} metallic-gradient`
          }`}
          onClick={() => {
            handleChange("about");
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
            <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
          </svg>
          <p>About</p>
        </button>

        <button
          className={`${styles.change}  ${
            change === "skills"
              ? `${styles.active} tech-gradient`
              : `${styles.not_active} metallic-gradient`
          }`}
          onClick={() => {
            handleChange("skills");
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-3.658 5.22a1 1 0 0 0 -1.282 .598l-2 5.5a1 1 0 0 0 1.88 .684l2 -5.5a1 1 0 0 0 -.598 -1.282m-4.135 1.233a1 1 0 0 0 -1.414 0l-1.5 1.5a1 1 0 0 0 0 1.414l1.5 1.5a1 1 0 0 0 1.414 0l.083 -.094a1 1 0 0 0 -.083 -1.32l-.792 -.793l.792 -.793a1 1 0 0 0 0 -1.414m7 0a1 1 0 0 0 -1.414 0l-.083 .094a1 1 0 0 0 .083 1.32l.792 .793l-.792 .793a1 1 0 0 0 1.414 1.414l1.5 -1.5a1 1 0 0 0 0 -1.414z" />
          </svg>
          <p>Skills</p>
        </button>
      </div>

      {change === "about" && <About />}
      {change === "skills" && <Skills />}
    </div>
  );
}
