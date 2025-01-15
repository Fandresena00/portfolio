/* eslint-disable react/prop-types */
import { useState, useCallback } from "react";
import styles from "./ProjectItems.module.css";

const ProjectItems = ({ image = {} }) => {
  const { project1, project2, project3, project4 } = image;
  const [isHeld, setIsHeld] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [lastX, setLastX] = useState(0);

  const handleStart = useCallback((e) => {
    setIsHeld(true);
    setLastX(e.clientX || (e.touches?.[0]?.clientX ?? 0));
  }, []);

  const handleMove = useCallback(
    (e) => {
      if (!isHeld) return;
      const currentX = e.clientX || (e.touches?.[0]?.clientX ?? 0);
      const delta = currentX - lastX;
      setRotation((prev) => prev + delta * 0.5);
      setLastX(currentX);
    },
    [isHeld, lastX]
  );

  const handleEnd = useCallback(() => {
    setIsHeld(false);
  }, []);

  const projects = [project1, project2, project3, project4];

  return (
    <div className={styles.container}>
      <div className={styles.effect}>
        <div
          className={`${styles.effect3D} ${isHeld ? styles.held : ""}`}
          style={{ "--drag-rotation": `${rotation}deg` }}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseUp={handleEnd}
          onTouchEnd={handleEnd}
          onMouseLeave={handleEnd}
        >
          {projects.map((project, index) => (
            <span key={index} style={{ "--i": index }}>
              <img
                src={project}
                alt={`Project view ${index + 1}`}
                loading="lazy"
              />
            </span>
          ))}
        </div>
      </div>

      <div className={styles.info}>
        <h2 className={styles.title}>T.P.Manage</h2>
        <h3 className={styles.subtitle}>Project management application</h3>
        <div className={styles.details}>
          {[
            {
              label: "Description",
              content:
                "An intuitive web application for managing tasks, organizing projects and tracking progress within teams.",
            },
            {
              label: "Technologies Used",
              content: "React, Java, Spring boot, Postgresql, Jenkins",
            },
            {
              label: "GitHub link",
              content: (
                <a href="https://github.com/Fandresena00/T.Gestion.git">
                  T.Manage
                </a>
              ),
            },
            {
              label: "App link",
              content: (
                <a href="https://github.com/Fandresena00/T.Gestion.git">
                  T.Manage
                </a>
              ),
            },
          ].map(({ label, content }, index) => (
            <div key={index}>
              <span className={styles.subtitle}>{label}:</span>
              <span>{content}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItems;
