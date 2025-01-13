import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={`${styles.skill} metallic-gradient`}>
        <h3>Front-end</h3>
        <div className={styles.description}>
          <p>
            I am proficient in modern libraries and frameworks like{" "}
            <span>React.js</span> and <span>React Native</span>, enabling the
            creation of high-performance, responsive web and mobile
            applications. I also use <span>Bootstrap</span> and{" "}
            <span>Tailwind CSS</span> to design sleek, adaptive interfaces, and{" "}
            <span>Figma</span> for prototyping and UI/UX design. My goal is to
            deliver smooth, optimized user experiences. Additionally, I have a
            solid grasp of the fundamentals of front-end development, including{" "}
            <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>,
            which form the foundation of any web project.
          </p>
          <div className={styles.icon}>
            <img src="/src/assets/front-end/react.svg" alt="react icon" />
            <img
              src="/src/assets/front-end/bootstrap.svg"
              alt="bootstrap icon"
            />
            <img
              src="/src/assets/front-end/tailwindcss.svg"
              alt="tailwindcss icon"
            />
            <img src="/src/assets/front-end/figma.svg" alt="figma icon" />
            <img src="/src/assets/front-end/html-5.svg" alt="html5 icon" />
            <img src="/src/assets/front-end/css3.svg" alt="css3 icon" />
            <img
              src="/src/assets/front-end/javascript.svg"
              alt="javascript icon"
            />
          </div>
        </div>
      </div>
      <div className={`${styles.skill} metallic-gradient`}>
        <h3>Back-end</h3>
        <div className={styles.description}>
          <p>
            As a junior developer, I have gained skills in backend development
            with <span>Java</span> and <span>Spring Boot</span>, allowing me to
            create robust and scalable applications. I use{" "}
            <span>PostgreSQL</span> and <span>MongoDB</span> for database
            management, ensuring reliable and efficient solutions. While I am
            still developing my skills in <span>API</span> creation, I use tools
            like <span>Postman</span> to test and validate their functionality.
            My approach also includes automating deployment with{" "}
            <span>Jenkins</span> to ensure smooth continuous integration and
            high-quality solutions.
          </p>
          <div className={styles.icon}>
            <img src="/src/assets/back-end/java.svg" alt="java icon" />
            <img
              src="/src/assets/back-end/spring-boot.svg"
              alt="spring boot icon"
            />
            <img
              src="/src/assets/back-end/postgresql.svg"
              alt="PostgreSQL icon "
            />
            <img
              src="/src/assets/back-end/mongodb-icon.svg"
              alt="mongodb icon"
            />
            <img
              src="/src/assets/back-end/postman-icon.svg"
              alt="postman icon"
            />
            <img
              src="/src/assets/back-end/jenkins-icon.svg"
              alt="jenkins icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
