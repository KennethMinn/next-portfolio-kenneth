import React from "react";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import Email from "@/components/Email";

const page = () => {
  return (
    <div className=" flex flex-col md:gap-0 gap-10 md:flex-row justify-around items-center">
      <div className=" flex flex-col gap-2 items-center md:items-start md:gap-10">
        <div className=" flex gap-4">
          <GoLocation className="text-xl font-bold" />
          <p>Myanmar (Yangon) , Shwe Pauk Kan</p>
        </div>
        <div className=" flex gap-4">
          <BsTelephone className="text-lg font-bold" />
          <p>+959 740841241</p>
        </div>
        <div className=" flex gap-4">
          <HiOutlineMail className="text-xl font-bold" />
          <p>minthukha2472005@gmail.com</p>
        </div>
        <div className=" flex  gap-4">
          <VscGithubInverted className="text-xl font-bold" />
          <p>KennethMinn</p>
        </div>
      </div>
      <div className="">
        <Email />
      </div>
    </div>
  );
};

export default page;
