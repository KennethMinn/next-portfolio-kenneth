"use client";

import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { link } from "fs";
import { AiOutlineClose } from "react-icons/ai";
import { ModeToggle } from "./ui/DarkMode";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface UserProps {
  name: string;
  email: string;
  image: string | StaticImport;
}

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Projects",
      url: "/projects",
    },
    {
      id: 4,
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div className=" flex items-center justify-between py-5">
      <Link href={"/"} className="font-bold cursor-pointer text-xl">
        Kenneth | developer
      </Link>
      <div className=" flex gap-4 items-center">
        <div
          className=" text-2xl cursor-pointer md:hidden relative"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <AiOutlineClose /> : <CgMenu />}
          {isOpen && (
            <div className=" bg-slate-800 text-sm py-2 px-4 absolute left-[-90px] top-[40px] rounded-lg z-50">
              {links.map((link) => (
                <Link
                  href={link.url}
                  key={link.id}
                  className={`flex flex-col mb-3 text-slate-400 ${
                    active === link.title ? " font-extrabold" : ""
                  }`}
                  onClick={() => setActive(link.title)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          )}
        </div>
        {links.map((link) => (
          <Link
            href={link.url}
            onClick={() => setActive(link.title)}
            className={` text-slate-400 hidden md:inline-block ${
              active === link.title ? "font-extrabold" : ""
            }`}
            key={link.id}
          >
            {link.title}
          </Link>
        ))}
        <ModeToggle />
        {!session && (
          <CustomButton
            title="Sign In"
            onClick={() => signIn()}
            styles=" bg-green-600"
          />
        )}
        {session && (
          <div className=" flex gap-4 items-center">
            <CustomButton
              title="Logout"
              onClick={() => signOut()}
              styles=" bg-green-600"
            />
            {session?.user?.name}
          </div>
        )}
        {session && session?.user?.image && (
          <div>
            <Image
              width={35}
              className=" rounded-full"
              height={10}
              src={session?.user?.image}
              alt="user_image"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
