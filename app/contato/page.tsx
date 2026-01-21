"use client";
import { ContactForm } from "../components/shared/contactForm";
import { LightBlob } from "../components/shared/LightBlob";

export default function ContactPage() {
  return (
    <>
     {/* <div className="relative"> */}
      <main className="relative bg-transparent z-10 flex justify-center items-center h-full px-4">
        <ContactForm />
      </main>
      <LightBlob
        color="var(--primary-color)"
        duration={35}
        delay={0}
        side="left"
        />

      <LightBlob
        color="var(--primary-color)"
        duration={20}
        delay={5}
        side="right"
        />
    {/* // </div> */}
        </>
  );
}
