import { useEffect, useRef, useState } from "react";
import styles from "./SmokeEffect.module.css";

const SmokeEffect = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = particlesRef.current;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => ({
      x: mousePos.x + (Math.random() - 0.5) * 10,
      y: mousePos.y + (Math.random() - 0.5) * 10,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      life: 1,
      color: ["#002966", "#0047ab", "#0066ff"][Math.floor(Math.random() * 3)],
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Ajouter de nouvelles particules
      for (let i = 0; i < 3; i++) {
        if (mousePos.x !== 0 || mousePos.y !== 0) {
          particles.push(createParticle());
        }
      }

      // Mettre à jour et dessiner les particules
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= 0.02;
        p.x += p.speedX;
        p.y += p.speedY;
        p.size *= 0.99;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle =
          p.color +
          Math.floor(p.life * 255)
            .toString(16)
            .padStart(2, "0");
        ctx.fill();

        if (p.life <= 0 || p.size < 0.5) {
          particles.splice(i, 1);
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos]);

  return <canvas ref={canvasRef} className={styles.smokeCanvas} />;
};

export default SmokeEffect;
