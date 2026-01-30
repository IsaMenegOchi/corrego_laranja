"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LightBlob } from "./components/shared/LightBlob";
import CardProfile from "./components/layout/CardProfile/CardProfile";
import BannerCarousel from "./components/shared/BannerCarousel";

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

      {/* About the group */}
      <section id="about-group" className="relative flex flex-row m-10">
        <div className="mt-15 items-center z-10">
          <h2 className="text-7xl mb-15">
            SOBRE O <span className="text-(--red-color)">GRUPO</span>
          </h2>
          <p className="text-4xl pr-30 ">
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
        </div>
        <LightBlob
          color="var(--red-color)"
          duration={10}
          delay={0}
          side="right"
        />

        <Image
          src="/sobre_grupo.png"
          width={500}
          height={500}
          alt="localização do córrego"
          className="basis-1/3 z-10"
        ></Image>
      </section>

      {/* About the name of the group */}
      <section id="about-name">
        <h2 className="text-5xl m-15">Sobre o nome</h2>
        <div className="flex row mx-15">
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

      {/* About equip */}
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
            {members.map((member) => (
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

      {/* Gallery */}
      <section
        id="gallery"
        className="grid grid-flow-col grid-rows-12 grid-cols-6 gap-6 w-full h-162.5 px-8"
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
