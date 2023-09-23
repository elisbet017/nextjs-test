"use client";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import links from "../Header/links.json";

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
          {links.map(({ name, target, duration }) => (
            <li className="flex justify-center" key={name}>
              <Link
                href="/"
                to={target}
                className="text-et-n text-white tracking-s"
                onClick={() => toggleModalDisplay()}
                smooth={true}
                offset={50}
                duration={duration}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

MobMenu.propTypes = {
  toggleModalDisplay: PropTypes.func.isRequired,
};

export default MobMenu;
