/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./ProjectItems.module.css";

export default function ProjectItems({ image }) {
  const { project1, project2, project3, project4 } = image;
  const [isHeld, setIsHeld] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [lastX, setLastX] = useState(0);

  const handleStart = (e) => {
    setIsHeld(true);
    setLastX(e.clientX);
  };

  const handleMove = (e) => {
    if (!isHeld) return;
    const delta = e.clientX - lastX;
    setRotation((prev) => prev + delta * 0.5);
    setLastX(e.clientX);
  };

  return (
    <div className={styles.container}>
      <div className={styles.effect}>
        <div
          className={styles.effect3D}
          style={{ "--drag-rotation": `${rotation}deg` }}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={() => setIsHeld(false)}
          onMouseLeave={() => setIsHeld(false)}
        >
          <span style={{ "--i": 0 }}>
            <img src={project1} alt="project" spellCheck />
          </span>
          <span style={{ "--i": 1 }}>
            <img src={project2} alt="project" />
          </span>
          <span style={{ "--i": 2 }}>
            <img src={project3} alt="project" />
          </span>
          <span style={{ "--i": 3 }}>
            <img src={project4} alt="project" />
          </span>
        </div>
      </div>

      <div className={styles.info}>
        <h2>T.P.Manage</h2>
        <h3>Project management application</h3>
        <div className={styles.details}>
          <div>
            <span className={styles.subtitle}>Description :</span>
            <span>
              An intuitive web application for managing tasks, organizing
              projects and tracking progress within teams.
            </span>
          </div>
          <div>
            <span className={styles.subtitle}>Technologies Used :</span>
            <span>React , Java , Spring boot , Postgresql , jenkins</span>
          </div>
          <div>
            <span className={styles.subtitle}>GitHub link :</span>
            <span>
              <a href="https://github.com/Fandresena00/T.Gestion.git">
                T.Manage
              </a>
            </span>
          </div>
          <div>
            <span className={styles.subtitle}>App link :</span>
            <span>
              <a href="https://github.com/Fandresena00/T.Gestion.git">
                T.Manage
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
