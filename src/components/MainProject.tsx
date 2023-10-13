"use client";

import Image from "next/image";
import React from "react";
import dashboard from "../../public/dashboard.png";
import github from "../../public/github.png";

const MainProject = () => {
  return (
    <div className=" w-[300px] md:w-[400px]">
      <div
        className="relative col-span-1 w-full rounded-2xl cursor-pointer bg-slate-800 p-5"
        onClick={() =>
          window.open("https://kenneth-dashboard.netlify.app", "_blank")
        }
      >
        <Image
          src={dashboard}
          alt="dashboard image"
          className="w-full  h-[230px] object-cover rounded-2xl"
        />
        <div className="absolute top-4 end-4 z-10 inset-0 flex justify-end m-3 ">
          <div
            onClick={() =>
              window.open("https://github.com/KennethMinn/dashboard", "_blank")
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
          <h1 className=" font-semibold text-xl">Dashboard</h1>
          <p className=" h-[100px] text-sm mt-2 opacity-80">
            This comprehensive Ecommerce Dashboard features pages for Orders,
            Employees, and Customers, along with versatile apps and a variety of
            charts.
          </p>
          <div className=" flex gap-3">
            <p className="blue-text-gradient">#react</p>
            <p className="green-text-gradient">#syncfusion</p>
            <p className="pink-text-gradient">#tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProject;
