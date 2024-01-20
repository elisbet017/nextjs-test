'use client'
import Link from "next/link";
import links from "./links.json";

const NavList = () => {
  return (
    <nav className="hidden tablet:block">
      <ul className="flex gap-[24px] desktop:gap-[56px]">
        {links.map(({ name }) => (
          <li key={name}>
            <Link href={`#${name.toLowerCase()}`} className="text-ft-n text-white tracking-xxs" >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
