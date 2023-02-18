import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

function NavBar(props) {
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
            className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
            href="public/ShingHimYipCV.pdf"
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
