import styles from "./Skills.module.css";

// Importing front icons
import React_icon from "../../assets/front-end/react.svg";
import Bootstrap_icon from "../../assets/front-end/bootstrap.svg";
import Tailwind_icon from "../../assets/front-end/tailwindcss.svg";
import Figma_icon from "../../assets/front-end/figma.svg";
import Html_icon from "../../assets/front-end/html5.svg";
import Css3_icon from "../../assets/front-end/css3.svg";
import JavaScript_icon from "../../assets/front-end/javascript.svg";

// Importing back icons
import Java_icon from "../../assets/back-end/java.svg";
import SpringBoot_icon from "../../assets/back-end/spring-boot.svg";
import Postgresql_icon from "../../assets/back-end/postgresql.svg";
import Mongodb_icon from "../../assets/back-end/mongodb-icon.svg";
import Postman_icon from "../../assets/back-end/postman-icon.svg";
import Jenkins_icon from "../../assets/back-end/jenkins-icon.svg";

import SkillsComponent from "./skills_components/SkillsComponent";

export default function Skills() {
  const frontDetails = {
    title: "Front-end",
    description: `
      I am proficient in modern libraries and frameworks like 
      React.js and React Native, enabling the
      creation of high-performance, responsive web and mobile applications. I also use 
      Bootstrap and Tailwind CSS to design sleek, adaptive interfaces, 
      and Figma for prototyping and UI/UX design. My goal is to deliver smooth, optimized 
      user experiences. Additionally, I have a solid grasp of the fundamentals of front-end development, including 
      HTML, CSS, and JavaScript, which form the foundation of any web project.`,
    icons: [
      React_icon,
      Bootstrap_icon,
      Tailwind_icon,
      Figma_icon,
      Html_icon,
      Css3_icon,
      JavaScript_icon,
    ],
  };

  const backDetails = {
    title: "Back-end",
    description: `
      As a junior developer, I have gained skills in backend development with Java and 
      Spring Boot, allowing me to create robust and scalable applications. I use PostgreSQL and 
      MongoDB for database management, ensuring reliable and efficient solutions. While I am still developing my skills in 
        API creation, I use tools like Postman to test and validate their functionality. My 
       approach also includes automating deployment with tools like Jenkins.`,
    icons: [
      Java_icon,
      SpringBoot_icon,
      Postgresql_icon,
      Mongodb_icon,
      Postman_icon,
      Jenkins_icon,
    ],
  };

  return (
    <div className={styles.container}>
      {/* Front-end skill */}
      <SkillsComponent
        title={frontDetails.title}
        description={frontDetails.description}
        icons={frontDetails.icons}
      />

      {/* Back-end skill */}
      <SkillsComponent
        title={backDetails.title}
        description={backDetails.description}
        icons={backDetails.icons}
      />
    </div>
  );
}
