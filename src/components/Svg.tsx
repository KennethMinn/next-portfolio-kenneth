"use client";

import React from "react";
import Lottie from "lottie-react";

interface SvgProps {
  animationData: any;
  styles: string;
}

const Svg = ({ animationData, styles }: SvgProps) => {
  return (
    <div>
      <Lottie className={`${styles}`} animationData={animationData} />
    </div>
  );
};

export default Svg;
