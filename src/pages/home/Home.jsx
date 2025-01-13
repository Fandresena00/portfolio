import { Link } from "react-scroll";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        I&apos;m <span>Software developer</span>
      </h1>
      <div className={styles.specialization}>
        <h2 className={styles.back}>Back-end developer</h2>
        <h2 className={styles.front}>Front-end developer</h2>
      </div>
      <div className={styles.button}>
        <div>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={styles.link}
          >
            Contact
          </Link>
        </div>
        <div>
          <Link
            to="profile"
            smooth={true}
            duration={500}
            className={styles.link}
          >
            About me
          </Link>
        </div>
      </div>
    </div>
  );
}
