"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CardProfile from "./components/layout/CardProfile/CardProfile";
import members from "./members.json";

const membersData = members.members;
const gridItems = [
  {
    id: 1,
    className: "col-span-1 row-span-4 row-start-2",
    image: "/gallery/01.png",
  },
  {
    id: 2,
    className: "col-span-1 row-span-4 row-end-10",
    image: "/gallery/02.png",
  },
  {
    id: 3,
    className: "col-span-1 row-span-7 row-start-2 mt-8",
    image: "/gallery/03.png",
  },
  {
    id: 4,
    className: "col-span-1 row-span-5",
    image: "/gallery/04.png",
  },
  {
    id: 5,
    className: "col-span-1 row-span-6 mb-8",
    image: "/gallery/05.png",
  },
  {
    id: 6,
    className: "col-span-1 row-span-7 row-start-2",
    image: "/gallery/06.png",
  },
  {
    id: 7,
    className: "col-span-1 row-span-4",
    image: "/gallery/07.png",
  },
  {
    id: 8,
    className: "col-span-1 row-span-4",
    image: "/gallery/08.png",
  },
  {
    id: 9,
    className: "col-span-1 row-span-6",
    image: "/gallery/09.png",
  },
  {
    id: 10,
    className: "col-span-1 row-span-7 row-start-3",
    image: "/gallery/10.png",
  },
];


export default function Home() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Calcula o limite do arraste (tamanho total do conteúdo - tamanho da tela)
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);
  
  const member = {
    idMember: 1,
    img: "/profile.jpg",
    name: "Michael Simbal",
    role: "Marketing Exec. at Denva Corp",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat!",
    background_color: "#FFFFFF",
    background_img: "/background.jpg",
    instagram: "https://www.instagram.com/michaelsimbal/",
    portfolio: "https://www.michaelsimbal.com",
  };

  const containerRef = useRef(null);

  // Pegamos o progresso do scroll no container (0 a 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mapeamos o scroll para posições e escalas
  // Quando scroll for 0, x é 10%. Quando for 1, x vai para 80%.
  const x1 = useTransform(scrollYProgress, [0, 1], ["10%", "70%"]);
  const y1 = useTransform(scrollYProgress, [0, 1], ["20%", "50%"]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);

  const x2 = useTransform(scrollYProgress, [0, 1], ["80%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "80%"]);

  return (
    <main ref={containerRef} className="relative bg-black overflow-hidden">
      {/* Luz 1
      <motion.div
        style={{ x: x1, y: y1, scale: scale1 }}
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-600 blur-[120px] opacity-40 pointer-events-none"
      />

      {/* Luz 2 */}
      {/* <motion.div
        style={{ x: x2, y: y2 }}
        className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-500 blur-[150px] opacity-30 pointer-events-none"
      />

      {/* Conteúdo do site */}
      {/*
      <div className="relative z-10">
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold">Inovação</h1>
        </section>
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold">Design</h1>
        </section>
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold">Experiência</h1>
        </section>
      </div> */}

      <section id="presentation" className="flex justify-center">
        <iframe
          className="w-1/2 aspect-video rounded-lg"
          src="https://www.youtube.com/embed/wr_ds1RQxEA"
          title="YouTube video player"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </section>
      <section id="about-group">
        <h2 className="text-5xl">Sobre o grupo</h2>
        <div className="flex row">
          <p className="text-2xl">
            A Variedades do Córrego da Laranja Azeda é um grupo formado por
            artistas moradores da Zona Oeste de São Paulo.
            <br />
            <br />
            Pesquisamos o teatro e a relação com o público, refletindo sobre o
            território, os seus problemas.
            <br />
            <br />
            Nossa estratégia é pensar o riso como ferramenta para a criação de
            um teatro popular, acessível e crítico.
          </p>
          <Image
            src="/sobre_grupo.png"
            width={300}
            height={300}
            alt="localização do córrego"
          ></Image>
        </div>
      </section>
      <section id="about-name">
        <h2 className="text-5xl">Sobre o nome</h2>
        <div className="flex row">
          <Image
            src="/sobre_nome.png"
            width={300}
            height={300}
            alt="localização do córrego"
          ></Image>
          <p className="text-2xl">
            O Córrego da Laranja Azeda é um afluente do rio Tietê localizado na
            cidade de Barueri/SP, cruzando os bairros do Jardim Belval e Jardim
            Silveira, chegando até o município de Jandira.
            <br />
            Este território esta presente na vida do grupo, sendo um espaço de
            passagem e de encontro.
          </p>
        </div>
      </section>

      <section id="tecnical">
        <h2 className="text-5xl">Equipe Técnica</h2>

        <motion.div
          ref={carouselRef}
          className="cursor-grab active:cursor-grabbing "
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-6 px-5"
          >
            {membersData.map((member) => (
              <CardProfile key={member.id} member={member}></CardProfile>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <section id="trilogy">
        <h2 className="text-5xl">Trilogia do Bagaço</h2>
        <div>
          <p className="text-2xl">
            É o projeto que inaugura as atividades do grupo e tem como objetivo
            criar três espetáculos autorais pesquisando o teatro, a comicidade e
            a relação direta com o público
          </p>
        </div>
      </section>
      <section
        id="gallery"
        className="grid grid-flow-col grid-rows-12 grid-cols-6 gap-6 w-full h-[650px] px-8"
      >
        {gridItems.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl overflow-hidden relative ${item.className}`}
          >
            <Image src={item.image} alt="teste" fill className="object-fit" />
          </div>
        ))}
      </section>

      {/* <div className="overflow-hidden w-full">
        <span
          className="flex w-full"
          style={{ animation: "scroll 5s linear infinite" }}
        >
          Causar algum tipo de reação
        </span>
      </div> */}
    </main>
  );
}
