import CustomButton from "@/components/CustomButton";
import MainProject from "@/components/MainProject";
import MiniProject from "@/components/MiniProject";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className=" flex flex-col gap-10 mb-5  ">
      <div className=" justify-around flex flex-col md:gap-0 gap-5 md:flex-row items-center">
        <Link href="/projects/main-projects">
          <CustomButton
            styles=" border border-green-700 hover:translate-x-5 transition"
            title="See All Main Projects  ->"
          />
        </Link>
        <MainProject />
      </div>
      <div className=" justify-around flex md:flex-row gap-5 md:gap-0 flex-col-reverse items-center">
        <MiniProject />
        <Link href="/projects/mini-projects">
          <CustomButton
            styles=" border border-green-700 hover:translate-x-[-15px] transition"
            title="<- See All Mini Projects"
          />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
