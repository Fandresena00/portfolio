import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <div className={`${styles.container} metallic-gradient border-animation`}>
        <img src="/STD22112.png" alt="my pic" />
        <div>
          <h2>Anjara Fandresena</h2>
          <h3>Software developer</h3>
          <p>
            Passionate junior developer, I build robust and scalable
            applications by combining front-end and back-end skills. My approach
            focuses on delivering high-performance, quality solutions while
            continuously expanding my skills to provide optimized user
            experiences.
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
      </div>
    </>
  );
}
