import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 py-20">
        My Project List
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 cursor-pointer hover:bg-opacity-80 transition-all duration-300">
        <ProjectCard
          src="/liqueapp.png"
          title="플러터 : 전통주 쇼핑몰 앱"
          description="전통주 쇼핑몰 앱 UI 그리기"
          date="2024.5.13~2024.5.20"
          link="https://github.com/croppedeyebrow/Flutter_GroceryShop"
          stack={["Flutter", "Dart"]}
        />
        <ProjectCard
          src="/chatapp.png"
          title="플러터 : 1:1채팅 어플"
          description="채팅 어플 만들기, Flutter + Firebase "
          date="2024.5.21~2024.5.24"
          link="https://github.com/croppedeyebrow/Flutter_chatApp"
          stack={["Flutter", "Firebase", "Dart"]}
        />
        <ProjectCard
          src="/webnotion.png"
          title="웹개발 노션 정리"
          description="웹개발 내용 노션 정리"
          date="2023.8.14~2024.2.21"
          link="https://www.notion.so/neulsom-insight/29b7a54ac56c46f7bf8a988e86c8ff3c"
          stack={["React", "MySql", "Java", "Spring Boot", "Python"]}
        />
      </div>
    </div>
  );
};

export default projects;
