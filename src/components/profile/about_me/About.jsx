import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <div className={`${styles.container} metallic-gradient border-animation`}>
        <img src="/STD22112.webp" alt="image" />
        <div>
          <h2>Anjara Fandresena</h2>
          <h3>Software developer</h3>
          <p>
            As an aspiring junior developer, I am dedicated and enthusiastic
            about creating applications Web Developer Resume Sample. My approach
            is to provide quality and high-performance solutions while learning
            more to provide optimized solutions.
          </p>
          <div className={styles.buttons}>
            <button>
              <a href="https://github.com/Fandresena00/portfolio.git">GitHub</a>
            </button>
            <button className={styles.primary}>
              <a href="https://www.linkedin.com/in/anjara-fandresena-rafaliarimanana-a61a082b7/">
                Linkedin
              </a>
            </button>
          </div>
        </div>

        <div className={styles.detailedInfo}>
          <h3>Professional Overview</h3>
          <p>
            Passionate junior developer based in Madagascar with expertise in
            Java and modern web technologies. I specialize in creating robust
            web applications using Spring Boot and React.js. My focus is on
            delivering high-performance, scalable solutions while continuously
            expanding my technical skills.
          </p>

          <div className={styles.expertise}>
            <h4>Core Expertise:</h4>
            <ul>
              <li>Full Stack Development (Java, Spring Boot, React.js)</li>
              <li>RESTful API Design and Implementation</li>
              <li>Database Design and Management</li>
              <li>Web Security Best Practices</li>
            </ul>
          </div>

          <div className={styles.languages}>
            <h4>Languages:</h4>
            <ul>
              <li>French (Fluent)</li>
              <li>English (Professional)</li>
              <li>Malagasy (Native)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
