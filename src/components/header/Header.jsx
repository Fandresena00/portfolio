import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.animation}></div>
      <nav>
        <h2 className={styles.logo}>MyLogo</h2>
        <h3 className={styles.cursor_animator}>cursor animator</h3>
        <ul className={styles.navbar}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#profil">Profil</a>
          </li>
          <li>
            <a href="#competence">Competence</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
