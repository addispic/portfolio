import { useEffect } from "react";
import { motion } from "motion/react";
export default function SpiderBubbles() {
  useEffect(() => {
    const handle = setTimeout(() => {
      const bubbles = document.querySelectorAll(".bubbles div");
      bubbles.forEach((bubble) => {
        if (bubble instanceof HTMLElement) {
          bubble.style.animation = "none";
          bubble.style.boxShadow = "none";
        }
      });
    }, 3000); // Delay AFTER DOM is mounted

    return () => clearTimeout(handle); // Cleanup if unmounted early
  }, []);

  const bubblesData = [
    { direction: { x: "-100vw" }, color: "green", delay: "-1s" },
    { direction: { y: "-100vh" }, color: "yellow", delay: "-.8s" },
    { direction: { y: "100vh" }, color: "red", delay: "-.6s" },
    { direction: { x: "100vw" }, color: "blue", delay: "-.4s" },
  ];
  return (
    <div className="bubbles">
      {bubblesData.map((bubble, index) => (
        <motion.div
          key={index}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{
            ...bubble.direction,
            opacity: 0,
            scale: 3,
          }}
          transition={{
            delay: 3,
            duration: 3,
          }}
          style={{
            "--color": bubble.color,
            "--delay": bubble.delay,
          }}
        />
      ))}
    </div>
  );
}
