import { Link } from "react-scroll";
import styles from "./Header.module.css";
import logo from "/logo.svg";
import { useState, useEffect } from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "profile", label: "Profile" },
    { to: "project", label: "Project" },
    { to: "contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navbarOpen) {
        setNavbarOpen(false);
      }
    };

    if (navbarOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarOpen]);

  return (
    <header className={styles.container}>
      <nav className={`${styles.nav} metallic-gradient`}>
        <img src={logo} className={styles.logo} alt="Logo" />

        <ul
          className={`${styles.navbar} ${navbarOpen ? styles.navbarOpen : ""}`}
        >
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className={styles.nav_link}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={styles.nav_button}
          onClick={() => setNavbarOpen(!navbarOpen)}
          aria-label="Toggle menu"
        >
          {navbarOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
}
