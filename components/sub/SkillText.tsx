"use client";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[14px]">크로스플랫폼 개발자</h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.4)}
        className="text-[30px] text-white text-bold font-medium mt-[10px] text-center mb-[16px]"
      >
        시장의 문제를 해결하는 앱을 만드는 기술을 습득합니다.
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.4)}
        className=" Monospace  text-[20px] text-gray-200 mb-10 mt-[12px] text-center "
      >
        기술만이 아니라, 시장과 사용자까지 고려합니다.
      </motion.div>
    </div>
  );
};

export default SkillText;
