import Lottie from "lottie-react";
import React from "react";
import animationData from "../../../public/about-animation.json";
import Svg from "@/components/Svg";
import CustomButton from "@/components/CustomButton";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JS",
    "TypeScript",
    "ReactJs",
    "NextJs",
    "Redux",
    "React Query",
    "Php",
    "Laravel",
    "Mysql",
  ];
  return (
    <div>
      {/* <h1 className=" text-center font-bold text-5xl mb-8">Introduction</h1> */}
      <div className=" flex md:flex-row flex-col items-center md:justify-between ">
        <div className=" md:inline-block hidden">
          <Svg
            animationData={animationData}
            styles="  w-[250px] md:w-[450px]"
          />
        </div>

        <div className=" p-5 bg-slate-900 rounded-lg w-[325px] md:w-[800px] md:h-550px] font-medium text-xs md:text-[14px]">
          <div>
            <span className=" text-red-500 me-2">class </span>
            <span className=" text-white">Kenneth</span>
          </div>
          <div className=" mt-1">{"{"}</div>
          <div className=" ms-[30px]">
            <div className=" mt-[7px] text-white">
              <span className=" text-red-500">constructor</span> {"( ) {"}
              <div className=" ms-[30px]">
                <div className=" ">
                  this.<span className=" text-red-500">name</span> =
                  &quot;Kenneth Minn&quot;
                  <span className=" font-semibold text-xs">；</span>
                </div>
                <div className="">
                  this.<span className=" text-red-500">email</span> =
                  &quot;minthukha2472005@gmail.com&quot;
                  <span className=" font-semibold text-xs">；</span>
                </div>
              </div>
              <div className=" ms-[15px]">{"}"}</div>
            </div>

            <div className=" mt-[30px] text-white">
              <span className=" text-red-500">workExperience</span> {"( ) {"}
              <div className=" ms-[30px]">
                <div className="">
                  <span className=" text-red-500">return </span> {"["}
                </div>
                <div className=" ms-[20px]">
                  {"{"}{" "}
                  <span>
                    internship : &apos;Developed Kanote web application together
                    with the team at Tee Htwin&apos;
                  </span>
                  {"}"}
                </div>
                <div>{"]"}</div>
              </div>
              <div className=" ms-[15px]">{"}"}</div>
            </div>

            <div className=" mt-[30px] text-white">
              <span className=" text-red-500">certificates</span> {"( ) {"}
              <div className=" ms-[30px]">
                <div className="">
                  <span className=" text-red-500">return </span> {"["}
                </div>
                <div className="  ms-[20px]">
                  <div className="">
                    {"{"}{" "}
                    <span>
                      Udemy : &quot;The Complete JavaScript Course&quot;
                    </span>
                    {" } ,"}
                  </div>
                  <div className="">
                    {"{"}{" "}
                    <span>
                      Udemy : &quot;The Complete ReactJs Developer Course&quot;
                    </span>
                    {" } ,"}
                  </div>
                  <div className="">
                    {"{"}{" "}
                    <span>
                      CreativeCoder MM : &quot;Php + Laravel Deep Dive
                      Course&quot;
                    </span>
                    {" } ,"}
                  </div>
                  <div className="">
                    {"{"}{" "}
                    <span className="">
                      MMSIT : &quot;FullStack Development&quot;
                    </span>
                    {" } ,"}
                  </div>
                </div>
                <div>{"]"}</div>
              </div>
              <div className=" ms-[15px]">{"}"}</div>
            </div>

            <div className=" mt-[30px] text-white">
              <span className=" text-red-500">skills</span> {"( ) {"}
              <div className=" ms-[30px]">
                <div className="">
                  <span className=" text-red-500">return </span> {"["}
                </div>
                <div className=" ms-[20px]">
                  {skills.map((skill, i) => (
                    <span className=" font-semibold" key={i}>
                      {" "}
                      &apos; {skill} &apos; ,
                    </span>
                  ))}
                </div>
                <div>{"]"}</div>
              </div>
              <div className=" ms-[15px]">{"}"}</div>
            </div>
          </div>
          <div>{"}"}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
