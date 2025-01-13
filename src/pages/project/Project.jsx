import ProjectItems from "../../components/project/ProjectItems";
import styles from "./Project.module.css";

import project1 from "../../assets/project/image1.png";
import project2 from "../../assets/project/image2.png";
import project3 from "../../assets/project/image3.png";
import project4 from "../../assets/project/image4.png";

export default function Project() {
  const projectImage = { project1, project2, project3, project4 };

  return (
    <div className="container">
      <div className={styles.container}>
        <h2>Projects</h2>
        <ProjectItems image={projectImage} />
      </div>
    </div>
  );
}
