import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BannerCarousel({banners}: {banners: {image: string; title: string; link: string}[]}) {

    // ----------------------- BANNERS CAROUSEL -----------------------
      const [index, setIndex] = useState(0);
      const [direction, setDirection] = useState(0);
    
      const nextStep = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1 === banners.length ? 0 : prev + 1));
      };
    
      const prevStep = () => {
        setDirection(-1);
        setIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
      };
    
      const goToIndex = (newIndex: number) => {
        setDirection(newIndex > index ? 1 : -1);
        setIndex(newIndex);
      };
    
      // Autoplay: Muda o banner a cada 5 segundos
      useEffect(() => {
        const timer = setInterval(() => {
          nextStep();
        }, 5000);
        return () => clearInterval(timer);
      }, [index]);
    

  return (
    <div className="relative w-full h-150 overflow-hidden bg-black group">
      {/* 
         A classe 'group' acima permite que os filhos reajam 
         quando o mouse entra em qualquer lugar deste banner 
      */}

      {/* Imagens e Conteúdo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Imagem de Fundo com zoom suave no hover */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${banners[index].image})` }}
          />

          {/* Overlay escuro que só aparece no hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* CONTEÚDO QUE REVELA */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <motion.div
              // Esta div só ganha opacidade e sobe quando o pai (group) é hoverado
              className="opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out"
            >
              <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter">
                {banners[index].title}
              </h2>

              <p className="text-white/70 mt-4 text-lg max-w-md mx-auto">
                Explore as novas possibilidades e recursos exclusivos desta
                coleção.
              </p>

              <Link href={banners[index].link}>
                <button className="mt-8 px-10 py-4 bg-white text-black font-bold rounded-full uppercase tracking-widest hover:bg-(--primary-color) hover:text-white transition-colors">
                  Acessar Agora
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navegação por Bolinhas (Dots) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => goToIndex(i)}
            className="relative h-3 flex items-center justify-center"
          >
            {/* Bolinha de fundo (inativa) */}
            <div className="w-3 h-3 rounded-full bg-white/30" />

            {/* Bolinha ativa com animação */}
            {index === i && (
              <motion.div
                layoutId="activeDot"
                className="absolute w-6 h-3 rounded-full bg-white"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Setas Laterais (Opcional) */}
      <button
        onClick={prevStep}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md"
      >
        ←
      </button>
      <button
        onClick={nextStep}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md"
      >
        →
      </button>
    </div>
  );
}
