import type { Dispatch, SetStateAction } from "react";

export type NavBarProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

function NavBar(props: NavBarProps) {
  return (
    <nav className=" py-10 mb-12 flex justify-between dark:text-gray-300">
      <h1 className="text-xl font-burtons">Hello World</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => props.setDarkMode(!props.darkMode)}
            className=" cursor-pointer text-2xl"
          />
        </li>
        <li>
          <Link
            className=" bg-linear-to-r/srgb from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
            href="/ShingHimYipCV.pdf"
            target="_blank"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
