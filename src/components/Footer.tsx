import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" flex justify-center">
      <p className=" text-xs">@developed by Kenneth</p>
      {/* <div className=" flex gap-3">
        <Image
          src="/1.png"
          className="img"
          width={10}
          height={1}
          alt="fb"
        ></Image>
        <Image
          src="/2.png"
          className="img"
          width={25}
          height={5}
          alt=""
        ></Image>
        <Image
          src="/3.png"
          className="img"
          width={25}
          height={5}
          alt=""
        ></Image>
        <Image
          src="/4.png"
          className="img"
          width={25}
          height={5}
          alt=""
        ></Image>
      </div> */}
    </div>
  );
};

export default Footer;
