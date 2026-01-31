"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  title: string;
  image?: string;
  size: string;
  className?: string;
  delay?: number; // Para as bolinhas não se mexerem todas iguais
}

export default function FloatingCircle({
  title,
  image,
  size,
  className,
  delay = 0,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute cursor-pointer group ${className}`}
      // Animação de Flutuar (Loop Infinito)
      animate={{
        y: [0, -15, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: size, height: size }}
    >
      {/* O Círculo / Imagem */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-transparent group-hover:border-yellow-500 transition-colors duration-500 shadow-[0_0_20px_rgba(255,255,0,0.1)] group-hover:shadow-[0_0_40px_rgba(255,255,0,0.4)]">
        {image ? (
          <img src={image} className="w-full h-full object-cover" alt={title} />
        ) : (
          <div className="w-full h-full bg-black flex items-center justify-center text-white font-bold">
            ???
          </div>
        )}

        {/* Overlay escuro quando aparece o texto (opcional, como na sua imagem) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4 text-center"
            >
              <span className="text-white text-xs uppercase tracking-widest">
                O
              </span>
              <span className="text-(--yellow-color) font-black text-lg leading-tight uppercase">
                {title}
              </span>
              <span className="text-white text-xs uppercase tracking-widest">
                Ato
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Luz externa (Glow) */}
      <div className="absolute inset-0 rounded-full blur-2xl bg-yellow-600/20 -z-10 group-hover:bg-yellow-500/40 transition-all" />
    </motion.div>
  );
}
