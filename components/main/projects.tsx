import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 py-20">
        My Project List
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/liqueapp.png"
          title="플러터 : 전통주 쇼핑몰 앱"
          description="전통주 쇼핑몰 앱 UI 그리기, 5.13~5.20"
        />

        <ProjectCard
          src="/chatapp.png"
          title="플러터 : 1:1채팅 어플"
          description="채팅 어플 만들기, Flutter + Firebase 5.21~5.24"
        />

        <ProjectCard
          src="/webnotion.png"
          title="웹개발 노션 정리"
          description="웹개발 내용 노션 정리"
        />
      </div>
    </div>
  );
};

export default projects;
