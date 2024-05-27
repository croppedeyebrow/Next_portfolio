import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[66px] fixed top-0 shadow-lg shadow-[#2a0361]/50  bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row  items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="로고"
            width={72}
            height={72}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Cross-platform mobile Dev
          </span>
        </a>

        <div className=" w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[16px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about me" className="cursor-pointer ">
              About Me
            </a>
            <a href="#skilltree" className="cursor-pointer ">
              SkillTree
            </a>
            <a href="#project" className="cursor-pointer ">
              Project
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={26}
              height={26}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
