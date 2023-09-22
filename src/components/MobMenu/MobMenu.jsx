"use client";
import { Link } from "react-scroll";

const MobMenu = ({ toggleModalDisplay }) => {
  return (
    <div className="w-[100vw] h-[100vh] fixed menu top-0 left-0 z-10 px-[20px] py-[44px]">
      <button
        type="button"
        className="text-ft-n tracking-xxs uppercase block ml-auto"
        onClick={() => toggleModalDisplay()}
      >
        Close
      </button>
      <nav className="top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex gap-[48px] flex-col">
          <li className="flex justify-center">
            <Link
              to="about"
              className="text-et-n text-white tracking-s"
              onClick={() => toggleModalDisplay()}
              smooth={true}
              offset={50}
              duration={600}
            >
              About
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              to="gallery"
              className="text-et-n text-white tracking-s"
              onClick={() => toggleModalDisplay()}
              smooth={true}
              offset={50}
              duration={700}
            >
              Gallery
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              to="contacts"
              className="text-et-n text-white tracking-s"
              onClick={() => toggleModalDisplay()}
              smooth={true}
              offset={50}
              duration={800}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobMenu;
