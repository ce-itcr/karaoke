import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-black-2 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-black-2 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">┬íMantente en contacto!</h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Para cualquier duda acerca de la plataforma: ce-itcr@gmail.com
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                 <a href='mailto:celabscr@gmail.com'
                     target="_blank"
                     rel="noreferrer">
                    <i className="fas fa-envelope"></i>
                  </a>
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"                  
                >
                  <a href='https://github.com/ce-labs'
                     target="_blank"
                     rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-300 text-sm font-semibold mb-2">
                    Enlaces ├Ütiles
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/ce-labs"
                      >
                        CE ITCR
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/ce-labs"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-300 text-sm font-semibold mb-2">
                    Otros Recursos
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/ce-labs/labs-reservation/blob/main/LICENSE.md"
                      >
                        Licencia 
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/ce-labs/labs-reservation/blob/main/LICENSE.md"
                      >
                        T├ęrminos y Condiciones
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/ce-labs/labs-reservation/blob/main/LICENSE.md"
                      >
                        Politica de Privacidad
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="mailto:celabscr@gmail.com"
                      >
                        Contacto
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright ┬ę {new Date().getFullYear()} karaoke! por{" "}
                <a
                  href="https://github.com/ce-itcr"
                  className="text-white hover:text-blueGray-200"
                >
                  ce-itcr
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
