import { useState, useEffect, useCallback, useRef } from "react";

const SmokeTrailCursor = () => {
  const [particles, setParticles] = useState([]);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef();
  const isAnimating = useRef(false);

  // Création d'une nouvelle particule avec la position actuelle de la souris
  const createParticle = useCallback(() => {
    const { x, y } = mousePosRef.current;
    return {
      id: Math.random(),
      x,
      y,
      size: Math.random() * 3 + 2,
      opacity: 1,
      velocity: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2 - 1,
      },
    };
  }, []);

  // Animation des particules
  const animate = useCallback(() => {
    if (!isAnimating.current) return;

    setParticles((prevParticles) => {
      const { x, y } = mousePosRef.current;
      let newParticles = [...prevParticles];

      // Ajoute de nouvelles particules seulement si la souris a bougé
      if (x !== 0 || y !== 0) {
        for (let i = 0; i < 2; i++) {
          newParticles.push(createParticle());
        }
      }

      // Met à jour et filtre les particules
      return newParticles
        .map((particle) => ({
          ...particle,
          x: particle.x + particle.velocity.x,
          y: particle.y + particle.velocity.y,
          opacity: particle.opacity - 0.02,
          size: particle.size - 0.05,
        }))
        .filter((particle) => particle.opacity > 0 && particle.size > 0)
        .slice(-50);
    });

    frameRef.current = requestAnimationFrame(animate);
  }, [createParticle]);

  // Gestionnaire de mouvement de souris
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };

      // Démarre l'animation si elle n'est pas déjà en cours
      if (!isAnimating.current) {
        isAnimating.current = true;
        animate();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      isAnimating.current = false;
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [animate]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: "absolute",
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            backgroundColor: "#0057d9",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.2s ease-out",
          }}
        />
      ))}
    </div>
  );
};

export default SmokeTrailCursor;
