"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "next-themes";

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div
        className={` flex flex-col justify-between min-h-screen px-[5px]  md:px-[280px] transition`}
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default SessionWrapper;
