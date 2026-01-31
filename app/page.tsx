"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LightBlob } from "./components/shared/LightBlob";
import CardProfile from "./components/layout/CardProfile/CardProfile";
import BannerCarousel from "./components/shared/BannerCarousel";
import FloatingCircle from "./components/shared/FloatingCircle";

import appData from "./datas.json";

const members = appData.members;
const gridItems = appData.gallery;
const banners = appData.banners;

export default function Home() {
  // ----------------------- MEMBERS CAROUSEL -----------------------
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

  return (
    <main className="relative bg-black overflow-hidden">
      {/* Carousel gallery */}
      <section id="presentation" className="flex justify-center">
        <BannerCarousel banners={banners}></BannerCarousel>

        {/* caso queiram deixar vídeos */}
        {/* <iframe
          className="w-1/2 aspect-video rounded-lg"
          src="https://www.youtube.com/embed/wr_ds1RQxEA"
          title="YouTube video player"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        /> */}
      </section>

      <div className="relative flex flex-col items-center size-full">
        {/* About the group */}
        <div className="flex flex-col justify-between py-30 px-20 max-w-7xl h-650">
          <section id="about-group" className="flex flex-row items-center">
            <div className="mr-20">
              <h2 className="text-6xl pb-8">
                SOBRE O <span className="text-(--red-color)">GRUPO</span>
              </h2>
              <p className="text-2xl">
                A Variedades do Córrego da Laranja Azeda é um grupo formado por
                artistas moradores da Zona Oeste de São Paulo.
                <br />
                <br />
                Pesquisamos o teatro e a relação com o público, refletindo sobre
                o território, os seus problemas.
                <br />
                <br />
                Nossa estratégia é pensar o riso como ferramenta para a criação
                de um teatro popular, acessível e crítico.
              </p>
            </div>
            <LightBlob
              color="var(--red-color)"
              duration={10}
              delay={0}
              side="right"
            />

            <Image
              src="/sobre_grupo.png"
              width={400}
              height={400}
              alt="localização do córrego"
              className="basis-1/3 z-10"
            ></Image>
          </section>

          {/* About the name of the group */}
          <section
            id="about-name"
            className="relative flex flex-row items-center"
          >
            <LightBlob
              color="var(--primary-color)"
              duration={10}
              delay={0}
              side="left"
            />
            <Image
              src="/sobre_nome.png"
              width={420}
              height={420}
              alt="localização do córrego"
              className="z-10"
            ></Image>

            <div className="ml-20 text-right">
              <h2 className="text-6xl pb-8">
                SOBRE O <span className="text-(--primary-color)">NOME</span>
              </h2>
              <p className="text-2xl">
                O Córrego da Laranja Azeda é um afluente do rio Tietê localizado
                na cidade de Barueri/SP, cruzando os bairros do Jardim Belval e
                Jardim Silveira, chegando até o município de Jandira.
                <br />
                <br />
                Este território esta presente na vida do grupo, sendo um espaço
                de passagem e de encontro.
              </p>
            </div>
          </section>

          <section
            id="trilogy"
            className="relative w-full h-screen bg-black overflow-hidden flex items-center pr-20"
          >
            {/* Texto Lateral */}
            <div className="z-10 max-w-md">
              <h2 className="text-6xl mb-8">
                <span className="text-(--primary-color)">T</span>
                <span className="text-(--yellow-color)">r</span>
                <span className="text-(--red-color)">i</span>logia do Bagaço
              </h2>
              <p className="text-2xl col-span-1">
                É o projeto que inaugura as atividades do grupo e tem como
                objetivo criar três espetáculos autorais pesquisando o teatro, a
                comicidade e a relação direta com o público
              </p>
              {/* <button className="text-yellow-500 font-bold hover:brightness-125 transition-all text-left">
                  CLIQUE E CONHEÇA CADA UM <br /> DOS ATOS
                </button> */}
            </div>

            {/* Área das Bolinhas - Posicionamento absoluto */}
            <div className="relative flex-1 h-full">
              {/* Bolinha 1 - Grande (Ato 1) */}
              <FloatingCircle
                title="Primeiro"
                image="/caminho-da-imagem-palhaco.jpg"
                size="300px"
                className="bottom-[25%] right-[10%]"
                delay={0}
              />

              {/* Bolinha 2 - Média (Ato 2) */}
              <FloatingCircle
                title="Segundo"
                size="180px"
                className="top-[10%] right-[0%]"
                delay={1} // Começa a animação em tempo diferente
              />

              {/* Bolinha 3 - Pequena (???) */}
              <FloatingCircle
                title="Terceiro"
                size="100px"
                className="top-[25%] right-[60%]"
                delay={2}
              />
            </div>
          </section>
        </div>
      </div>

      {/* About equip */}
      <section id="tecnical">
        <h2 className="text-6xl align-middle">Equipe Técnica</h2>

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
            {members.map((member) => (
              <CardProfile key={member.id} member={member}></CardProfile>
            ))}
          </motion.div>
        </motion.div>
      </section>
      {/* Gallery */}
      <section
        id="gallery"
        className="mx-50 grid grid-flow-col grid-rows-12 grid-cols-6 gap-6 h-130 px-8"
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

      {/* Phrase */}
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
