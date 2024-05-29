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
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[16px] z-[20]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[21] ">
            <div className="font-bold text-[16px]">Community</div>

            <p className="flex flex-row items-center my-[16px] cursor-pointer hover:cursor-pointer hover:scale-110 ">
              <RxNotionLogo />
              <a
                href="https://www.notion.so/neulsom-insight/29b7a54ac56c46f7bf8a988e86c8ff3c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] ml-[8px] hover-effect"
              >
                Notion
              </a>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer hover:scale-110 ">
              <RxGithubLogo />
              <a
                href="https://github.com/croppedeyebrow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] ml-[8px] hover-effect"
              >
                깃허브
              </a>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer hover:scale-110 ">
              <RxDiscordLogo />
              <a
                href="https://discord.gg/JbByKDk7JW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] ml-[8px] hover-effect"
              >
                디스코드
              </a>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[21]">
            <div className="font-bold text-[16px]">Social Media</div>

            <p className="flex flex-row items-center my-[16px] cursor-pointer hover:scale-110  ">
              <FaBlog />
              <a
                href="https://cut-eyebrow.tistory.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] ml-[8px] hover-effect"
              >
                티스토리 블로그
              </a>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer hover:scale-110  ">
              <RxInstagramLogo />
              <a
                href="https://www.instagram.com/dev_cordinate_spa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] ml-[8px]  hover-effect "
              >
                인스타그램
              </a>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer hover:scale-110 ">
              <RxLinkedinLogo />
              <a
                href="https://www.linkedin.com/in/lid-eye-90719b284/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] ml-[8px] hover-effect"
              >
                링크드인
              </a>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[21]">
            <div className="font-bold text-[16px]">About me</div>

            <p className="flex flex-row items-center my-[16px] ">
              <FaGoogle />
              <a
                href="https://litt.ly/coding_direction_center"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] ml-[8px]"
              >
                Contact Me
              </a>
            </p>

            <p className="flex flex-row items-center my-[16px] cursor-pointer hover-effect  ">
              <a
                href="https://www.google.com/intl/ko/gmail/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] ml-[8px]"
              >
                lee940706@gmail.com
              </a>
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
