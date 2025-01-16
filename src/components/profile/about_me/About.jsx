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
      </div>
    </>
  );
}
