import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <div className={`${styles.container} metallic-gradient`}>
        <img src="/me.jpg" alt="my pic" />
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
            <button>GitHub</button>
            <button className={styles.primary}>Linkedin</button>
          </div>
        </div>
      </div>
    </>
  );
}
