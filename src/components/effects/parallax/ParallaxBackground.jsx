import { useEffect, useRef } from "react";
import styles from "./ParallaxBackground.module.css";

const ParallaxBackground = () => {
  const containerRef = useRef(null);
  const mountainRef = useRef(null);
  const cloudRef = useRef(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateParallax = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;

          if (mountainRef.current) {
            const mountainTranslate = scrolled * 0.3;
            mountainRef.current.style.transform = `translateY(${mountainTranslate}px)`;
          }

          if (cloudRef.current) {
            const cloudTranslate = scrolled * 0.5;
            const cloudHorizontal = Math.sin(scrolled * 0.001) * 20;
            cloudRef.current.style.transform = `translate(${cloudHorizontal}px, ${cloudTranslate}px)`;
          }

          lastScrollY.current = scrolled;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", updateParallax);
    return () => window.removeEventListener("scroll", updateParallax);
  }, []);

  return (
    <div ref={containerRef} className={styles.parallaxContainer}>
      {/* Couche de nuages */}
      <div ref={cloudRef} className={styles.parallaxLayer}>
        <div className={styles.cloud} style={{ left: "10%", top: "20%" }} />
        <div className={styles.cloud} style={{ left: "60%", top: "15%" }} />
        <div className={styles.cloud} style={{ left: "30%", top: "30%" }} />
      </div>

      {/* Couche de montagnes */}
      <div ref={mountainRef} className={styles.parallaxLayer}>
        <div className={styles.mountain} />
        <div className={`${styles.mountain} ${styles.mountainSecondary}`} />
        <div className={`${styles.mountain} ${styles.mountainTertiary}`} />
      </div>

      {/* Couche de brume */}
      <div className={styles.mist} />
    </div>
  );
};

export default ParallaxBackground;
