import React from "react";


export default function AppNavbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href=""
            onClick={(e) => e.preventDefault()}
          >
            karaoke! v2.0 por @ce-itcr
          </a>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
