"use client";

import { FormEvent, useState } from "react";
// Import UI components
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { POST } from "../../../lib/mail";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [number, setNumber] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    

    const data = {
      name,
      email,
      number,
      subject,
      body,
    };
    console.log("Bateu no handle submit", data);


    const test = await POST(data);
    // console.log(test);
    

    // CREATE
  // create(data: Partial<Product>) {
  //   return api<Product>("/products", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   });
  // },
  }

  return (
        <div className="bg-black/60 shadow-sm sm:rounded-lg">
          <div className="relative p-4 py-8 sm:px-8">
            <h3 className="mb-1 inline-block text-3xl font-medium">
              <span className="mr-4">Fale conosco!</span>
              <span className="inline-block rounded-md bg-(--primary-color) px-2 py-1 text-sm sm:inline">
                Coisa rapida, pô
              </span>
            </h3>
            <p className="text-gray-500">
              Só precisamos de algumas informações
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <form
              onSubmit={handleSubmit}
              className="px-8 pb-8 border-r border-(--primary-color) max-w-3xl col-span-3"
            >
              <div className="grid gap-3 md:grid-cols-2">
                <Input
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Input>
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Input>
                <div className="peer-invalid:block mt-1 text-left text-xs text-rose-600">
                  Tá errado ai mermão! Tenta adicionar um &quot;@&quot;.
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <Input
                  placeholder="Celular"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                ></Input>
                <Input
                  placeholder="Assunto"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                ></Input>
              </div>

              <label className="mt-5 mb-2 inline-block max-w-full">
                Diga aí o que você quer
              </label>
              <textarea
                rows={4}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="mb-8 max-h-70 w-full resize-y overflow-auto rounded-lg border border-(--primary-color) px-4 py-2 shadow-sm focus:border-(--yellow-color) focus:outline-none hover:border-(--yellow-color)"
              ></textarea>
              <button className="w-full rounded-lg bg-(--primary-color) p-3 text-center font-bold text-white outline-none transition focus:ring hover:bg-(--yellow-color) hover:text-white">
                Enviar
              </button>
            </form>
            <div className="grid gap-3 col-span-2 col-end-6 p-4">
              <a
                href="https://www.instagram.com/variedadesdocorrego/"
                target="blanket"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="4x"
                  className="text-(--primary-color)/60"
                />
              </a>
              <a href="mailto:isabelle.ochini@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="4x"
                  className="text-(--primary-color)/60"
                />
              </a>
              <a href="https://wa.me/5511945491818" target="blanket">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  size="4x"
                  className="text-(--primary-color)/60"
                />
              </a>
            </div>
          </div>
          {/* <p className="text-center text-gray-600">
            Ou envie um email diretamente para{" "}
            <a
              href="mailto:contato@corregolaranja.com.br"
              className="text-blue-600"
            >
              contato@corregolaranja.com.br
            </a>
          </p> */}
        </div>
  );
}
