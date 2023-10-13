import AnimationText from "@/components/AnimationText";
import CustomButton from "@/components/CustomButton";
import Svg from "@/components/Svg";
import animationData from "../../../public/coder-animation.json";

const Home = () => {
  return (
    <div className=" items-center flex md:flex-row flex-col-reverse justify-around">
      <div className=" w-[400px] md:text-start text-center">
        <h1 className=" md:ps-0 ps-[100px] flex gap-3 font-bold text-2xl md:text-6xl mb-5">
          Hi!
          <span id="name" className=" flex gap-3 text-green-400">
            I&apos;m
            <AnimationText strings={["Kenneth"]} />
          </span>
        </h1>
        <div className="text-2xl font-semibold">
          <p>I&apos;m a passionate & hardworking</p>
          <p>web developer from myanmar</p>
        </div>
        <CustomButton styles=" bg-green-500 mt-5" title="See my Work" />
      </div>
      <Svg animationData={animationData} styles="md:w-[700px] w-[400px]" />
    </div>
  );
};

export default Home;
