"use client";

import { main_projects } from "@/constants";
import Image from "next/image";
import React from "react";
import github from "../../public/github.png";

const MainProjects = () => {
  return (
    <div className=" mb-6">
      <h1 className=" font-semibold text-2xl text-center mb-10">
        Main Projects
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 mt-3 gap-10 mx-[20px] md:mx-0 text-white">
        {main_projects.map((project, i) => (
          <div
            key={i}
            className="relative col-span-1 w-full rounded-2xl cursor-pointer bg-slate-800 p-5"
            onClick={() => window.open(project.project_link, "_blank")}
          >
            <Image
              src={project.image}
              alt="project_image"
              className="w-full  h-[230px] object-cover rounded-2xl"
            />
            <div className="absolute top-4 end-4 z-10 inset-0 flex justify-end m-3 ">
              <div
                onClick={() => window.open(project.source_code_link, "_blank")}
                className=" bg-slate-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className=" mt-3">
              <h1 className=" font-semibold text-xl">{project.name}</h1>
              <p className=" h-[110px] text-sm mt-2 opacity-80">
                {project.description}
              </p>
              <div className=" flex gap-3">
                {project.tags.map((tag, i) => (
                  <p key={i} className={`${tag.color}`}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainProjects;
