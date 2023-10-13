"use client";

import { ButtonProps } from "@/types";
import React from "react";

const CustomButton = ({ title, onClick, styles }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles} px-2 py-2 rounded-md cursor-pointer`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
