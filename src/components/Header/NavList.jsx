import { Link } from "react-scroll";
import links from "./links.json";

const NavList = () => {
  return (
    <nav className="hidden tablet:block">
      <ul className="flex gap-[24px] desktop:gap-[56px]">
        {links.map(({ name, target, duration }) => (
          <li key={name}>
            <Link
              href="/"
              to={target}
              className="text-ft-n text-white tracking-xxs"
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
  );
};

export default NavList;
