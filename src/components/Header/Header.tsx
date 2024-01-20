"use client";
import { useState } from "react";
import MobMenu from "../MobMenu/MobMenu";
import NavList from "./NavList";
import Link from "next/link";
import { karantina } from "@/app/ui/fonts";
import Image from "next/image";
import logo from '@/public/logo.png'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModalDisplay = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex justify-center">
      <header className="absolute only-mob:max-w-[480px] z-30 w-full flex justify-between px-5 mx-auto top-9 items-center tablet:max-w-[704px] tablet:px-0 desktop:max-w-[1280px] desktop:px-6">
        <Link href="/" className="cursor-pointer" aria-label="Logo">
          <Image src={logo}
            width={59}
            height={21}
            alt="Logo"/>
          <p className={`text-ft-n tracking-[2.59px] ${karantina.className} antialiased`}>
            CarpTravel
            </p>
        </Link>
        {isModalOpen && <MobMenu toggleModalDisplay={toggleModalDisplay} />}
        <NavList />
        <button
          className="text-white text-ft-n tracking-xxs uppercase tablet:hidden"
          onClick={() => toggleModalDisplay()}
          type="button"
        >
          Menu
        </button>
      </header>
    </div>
  );
};

export default Header;
