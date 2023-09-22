"use client";
import { useState } from "react";
import MobMenu from "../MobMenu/MobMenu";
import { Logo } from "../svgs";
import { Link } from "react-scroll";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModalDisplay = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="flex justify-center">
      <header className="absolute only-mob:max-w-[480px] z-30 w-full flex justify-between px-5 mx-auto top-9 items-center tablet:max-w-[704px] tablet:px-0 desktop:max-w-[1280px] desktop:px-[24px]">
        <div>
          <Logo />
          <p className="font-kar font-normal text-ft-n tracking-[2.59px]">
            CarpTravel
          </p>
        </div>
        {isModalOpen && <MobMenu toggleModalDisplay={toggleModalDisplay} />}
        <nav className="hidden tablet:block">
          <ul className="flex gap-[24px] desktop:gap-[56px]">
            <li>
              <Link
                to="about"
                className="text-ft-n text-white tracking-xxs"
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-ft-n text-white tracking-xxs"
                to="gallery"
                smooth={true}
                offset={50}
                duration={700}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                className="text-ft-n text-white tracking-xxs"
                smooth={true}
                offset={50}
                duration={800}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="text-white text-ft-n tracking-xxs uppercase tablet:hidden"
          onClick={() => toggleModalDisplay()}
        >
          Menu
        </button>
      </header>
    </div>
  );
};

export default Header;
