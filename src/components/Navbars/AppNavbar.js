import React, { useEffect, useState } from "react";
import UserDropdown from "../Dropdowns/UserDropdown";


export default function AppNavbar() {

  const [navbarTitle, setNavbarTitle] = useState('');

  useEffect(() => {
    getTitle();
  });

  const getTitle = () => {
    setNavbarTitle(window.location.pathname);
  }

  return (
    <>
      {/* Navbar */}
      <nav className=" top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            {navbarTitle}
          </a>

          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
