"use client";
import { useState } from "react";
import { Logo } from "../svgs";
import MobMenu from "../MobMenu/MobMenu";
import NavList from "./NavList";
import Link from "next/link";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModalDisplay = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="flex justify-center">
      <header className="absolute only-mob:max-w-[480px] z-30 w-full flex justify-between px-5 mx-auto top-9 items-center tablet:max-w-[704px] tablet:px-0 desktop:max-w-[1280px] desktop:px-[24px]">
        <Link href="/" className="cursor-pointer" aria-label="Logo">
          <Logo />
          <p className="font-kar font-normal text-ft-n tracking-[2.59px]">
            CarpTravel
          </p>
        </Link>
        {isModalOpen && <MobMenu toggleModalDisplay={toggleModalDisplay} />}
        <NavList />
        <button
          className="text-white text-ft-n tracking-xxs uppercase tablet:hidden "
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
