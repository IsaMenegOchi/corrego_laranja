import Image from "next/image";
import photo from "../../../assets/logo_laranja_branco.svg";
import { Member } from "@/app/interfaces/Member";

interface CardProps {
  member: Member;
}

export default function CardProfile({ member }: CardProps) {

  return (
    <div className="m-4 max-w-sm">
      <div className="rounded-lg border px-4 pt-8 pb-10 w-70 h-100">
        <div className="relative mx-auto w-36 rounded-full">
          <span className="absolute right-0 m-3 h-3 w-3 rounded-full"></span>
          <Image
            src={member.img}
            alt={member.alt}
            width={200}
            height={200}
            className="mx-auto h-auto w-full rounded-full"
          ></Image>
        </div>
        <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
          {member.name}
        </h1>
        <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
          {member.role}
        </h3>
        <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
          {member.description}
        </p>
        <button className="mx-auto block h-12 rounded-full bg-blue-600 px-6 font-medium tracking-wide text-white shadow-md outline-none transition duration-200 focus:ring hover:bg-blue-500">
          Get Started
        </button>
      </div>
    </div>
  );
}
