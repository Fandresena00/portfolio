import ProjectItems from "../../components/project/ProjectItems";
import styles from "./Project.module.css";

export default function Project() {
  const ManageProject = {
    project: "T.Manage",
    description:
      "I have built a full-stack project management tool using React and Spring Boot with user login and more.",
    technologies: "React, Java, Spring boot, Postgresql, Jenkins",
    gitHub: "https://github.com/Fandresena00/T.Gestion.git",
    appLink: "https://github.com/Fandresena00/T.Gestion.git",
    ImageDetails: [
      "/project/image1.webp",
      "/project/image2.webp",
      "/project/image3.webp",
      "/project/image4.webp",
    ],
    ImageAlt:
      "An image of a management application created out of react and spring boot.",
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
