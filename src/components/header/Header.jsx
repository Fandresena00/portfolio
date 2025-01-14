import { Link } from "react-scroll";
import styles from "./Header.module.css";
import logo from "/logo.svg";

export default function Header() {
  return (
    <header className={styles.container}>
      <nav className="metallic-gradient">
        <img src={logo} className={styles.logo} />
        <ul className={styles.navbar}>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className={styles.nav_link}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="profile"
              smooth={true}
              duration={500}
              className={styles.nav_link}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className={styles.nav_link}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={styles.nav_link}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
