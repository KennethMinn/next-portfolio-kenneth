"use client";

import Image from "next/image";
import React from "react";
import mapty from "../../public/mapty.png";
import github from "../../public/github.png";

const MiniProject = () => {
  return (
    <div className=" w-[300px] md:w-[400px]">
      <div
        className="relative col-span-1 w-full rounded-2xl cursor-pointer bg-slate-800 p-5"
        onClick={() =>
          window.open("https://leafy-moxie-ba2bf4.netlify.app", "_blank")
        }
      >
        <Image
          src={mapty}
          alt="dashboard image"
          className="w-full  h-[230px] object-cover rounded-2xl"
        />
        <div className="absolute top-4 end-4 z-10 inset-0 flex justify-end m-3 ">
          <div
            onClick={() =>
              window.open("https://github.com/KennethMinn/Mapty-App", "_blank")
            }
            className=" bg-slate-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <Image
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
        <div className=" mt-3 text-white">
          <h1 className=" font-semibold text-xl">Mapty</h1>
          <p className=" h-[100px] text-sm mt-2 opacity-80">
            The location track web app empowers users to mark favorite running
            and cycling areas on a map, making fitness tracking seamless.
          </p>
          <div className=" flex gap-3">
            <p className="blue-text-gradient">#JS</p>
            <p className="green-text-gradient">#Geolocation</p>
            <p className="pink-text-gradient">#Scss</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniProject;
