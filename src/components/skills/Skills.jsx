import styles from "./Skills.module.css";
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
      "/src/assets/front-end/react.svg",
      "/src/assets/front-end/bootstrap.svg",
      "/src/assets/front-end/tailwindcss.svg",
      "/src/assets/front-end/figma.svg",
      "/src/assets/front-end/html5.svg",
      "/src/assets/front-end/css3.svg",
      "/src/assets/front-end/javascript.svg",
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
      "/src/assets/back-end/java.svg",
      "/src/assets/back-end/spring-boot.svg",
      "/src/assets/back-end/postgresql.svg",
      "/src/assets/back-end/mongodb-icon.svg",
      "/src/assets/back-end/postman-icon.svg",
      "/src/assets/back-end/jenkins-icon.svg",
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
