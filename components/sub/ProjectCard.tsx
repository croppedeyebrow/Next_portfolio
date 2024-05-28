import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  date: string;
  link: string;
  stack: string[];
  onClick?: () => void;
}

const ProjectCard = ({ src, title, description, date, link, stack }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-2xl border-4 border-[#2a0361] bg-gradient-to-b from-[#ffffff20] to-[#2a0361]/50 backdrop-blur-md  ">
      <Image
        src={src}
        alt={title}
        width={1500}
        height={1500}
        className="w-full object-contain"
      />

      <div className="relative p-4 top-2.2">
        <h1 className="text-2xl font-semibold  text-white hover:text-blue-500 hover:underline ">
          {title}
        </h1>

        <p className="mt-2 text-gray-300">{description}</p>
        <p className="mt-2 text-gray-300">{date}</p>
        <p className="mt-2 text-gray-300">{stack}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
