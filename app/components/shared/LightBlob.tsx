import { motion } from "framer-motion";

// *Lights Animation*
// Here we set up the scroll-based animations for the light blobs
export const LightBlob = ({
  color,
  duration,
  delay,
  side = "center",
}: {
  color: string;
  duration: number;
  delay: number;
  side?: "left" | "right" | "center";
}) => {
  const position =
    side === "left"
      ? "top-24 left-0"
      : side === "right"
        ? "top-24 right-0"
        : "top-24 left-1/2 -translate-x-1/2";

  return (
    <motion.div
      className={`
        absolute
        ${position}
        z-1
        rounded-full
        mix-blend-screen
        blur-[100px]
        opacity-50
        pointer-events-none
      `}
      style={{
        backgroundColor: color,
        width: "300px",
        height: "300px",
      }}
      animate={{
        x: [0, 200, 80, 150, 0],
        y: [0, 120, 300, 180, 0],
        scale: [1, 1.2, 0.9, 1.1, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay,
      }}
    />
  );
};

