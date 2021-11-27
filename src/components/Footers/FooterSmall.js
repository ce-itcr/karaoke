import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-black-2"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-white font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://github.com/ce-itcr"
                  className="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
                >
                  karaoke! por ce-itcr
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">

                <li>
                  <a
                        href="https://github.com/ce-labs/labs-reservation/blob/main/LICENSE.md"
                        className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Licencia
                  </a>
                </li>
                <li>
                  <a
                        href="mailto:ceitcr@gmail.com"
                        className="text-white hover:text-blueGray-300 text-sm font-semibold block py-1 px-3"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
