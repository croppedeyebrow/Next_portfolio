"use client";

import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[-2]">
        <motion.div
          variants={slideInFromTop}
          className="text-[50px] font-medium text-center text-gray-300"
        >
          Project focusing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">
            <br />
            {""} 문제해결력 & 브랜드다움{""}
          </span>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-80px] absolute z-[0] w-auto h-auto ">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto hover-move">
          <Image
            src="/spaceman.svg"
            alt="spaceman"
            width={240}
            height={240}
            className="z-12"
          />
        </div>

        <div className="Welcome-box px-[16px] py-[4px] z-[-2] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Develope Point</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Code is just a tool to solve problems in the market
        </div>
      </div>

      <div className=" w-[80%] flex items-start justify-center absolute z-[-3]">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
