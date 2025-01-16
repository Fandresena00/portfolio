import ProjectItems from "../../components/project/ProjectItems";
import styles from "./Project.module.css";

export default function Project() {
  const ManageProject = {
    project: "T.Manage",
    description:
      "An intuitive web application for managing tasks, organizing projects and tracking progress within teams.",
    technologies: "React, Java, Spring boot, Postgresql, Jenkins",
    gitHub: "https://github.com/Fandresena00/T.Gestion.git",
    appLink: "https://github.com/Fandresena00/T.Gestion.git",
    ImageDetails: [
      "/project/image1.png",
      "/project/image2.png",
      "/project/image3.png",
      "/project/image4.png",
    ],
  };

  return (
    <div className="container">
      <div className={styles.container}>
        <h2>Projects</h2>
        <ProjectItems details={ManageProject} />
      </div>
    </div>
  );
}
