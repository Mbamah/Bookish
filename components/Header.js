import React from "react";
import * as RiIcons from "react-icons/ri";
const Header = () => {
  return (
    <header className="bg-[#FEC702]">
      <nav className="container mx-auto py-4 px-6 flex items-center justify-between">
        <h1 className="flex items-center underline decoration-double font-['Playfair_Display'] text-2xl">
          <RiIcons.RiBook2Line className="text-white text-2xl" />
          Bookish.
        </h1>

        <ul className="flex items-center font-['Numans'] md:text-xl">
          <li className="mr-7 ">
            <a href="googl.com">Contact</a>
          </li>
          <li className="bg-white px-4 py-2 ">
            <a href="google.com">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
