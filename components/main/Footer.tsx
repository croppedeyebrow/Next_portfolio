import React from "react";

import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxDiscordLogo,
  RxNotionLogo,
} from "react-icons/rx";

import { FaBlog, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[16px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <RxNotionLogo />
              <span className="text-[14px] ml-[8px]">Notion</span>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[14px] ml-[8px]">깃허브</span>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[14px] ml-[8px]">디스코드</span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>

            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <FaBlog />
              <span className="text-[14px] ml-[8px]">티스토리 블로그</span>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[14px] ml-[8px]">인스타그램</span>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[14px] ml-[8px]">링크드인</span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About me</div>

            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <FaGoogle />
              <span className="text-[14px] ml-[8px]">Contact Me</span>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer">
              <span className="text-[14px] ml-[8px]">lee940706@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[16px] text-center">
          &copy; Cross-platform mobile Dev 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
