"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const AnimationText = ({ strings }: { strings: string[] }) => {
  return (
    <span className="">
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  );
};

export default AnimationText;
