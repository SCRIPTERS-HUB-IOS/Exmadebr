import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

/**
 * Simple, performant particles background.
 * Uses tsparticles for retina + interaction support.
 */

export default function ParticlesBG({ color = "#ff1b1b" }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: false }
          },
          modes: { repulse: { distance: 120, duration: 0.4 } }
        },
        particles: {
          color: { value: color },
          links: {
            color: color,
            distance: 140,
            enable: true,
            opacity: 0.15,
            width: 1
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: false,
            speed: 0.9,
            straight: false
          },
          number: {
            density: { enable: true, area: 900 },
            value: 70
          },
          opacity: { value: 0.7, random: { enable: true, minimumValue: 0.3 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true
      }}
    />
  );
}
