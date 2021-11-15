import React from "react";

import IndexNavbar from "../components/Navbars/IndexNavbar";
import Footer from "../components/Footers/Footer";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px ">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                karaoke! v2.0
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              Somos el servicio número uno de streaming para karaoke.
              <br></br><br></br>
              <b>Inicie sesión en su cuenta en cualquier momento:</b> karaoke, tiene disponibilidad abierta de 99,99%. Lo tenemos cubierto sin importar dónde se encuentre. Todo lo que necesita es una conexión a Internet y un teléfono o computadora. <br></br>
              <b>Principales Servicios y Funciones:</b> Como usuario puede buscar y reproducir una canción para lo cual la aplicación Karaoke, hará streaming del audio y sincronizará la letra para que pueda cantar al ritmo de la música

              </p>
              <div className="mt-12" to='/auth/login'>
                <button 
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-spotify-green active:bg-spotify-dark-green uppercase text-sm shadow hover:shadow-lg"
                  type="button"
                >
                    <a href="/auth/login">
                        <i class="fas fa-sign-in-alt"></i> Iniciar Sesión
                    </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0  right-0  sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-600px"
          //src="https://www-growth.scdn.co/static/home/bursts-tablet.svg"
          //src={require("../assets/images/pattern.png").default}
          //src="https://res.cloudinary.com/dek4evg4t/image/upload/v1636948126/karaoke-app/pattern.png"
          alt="Background Image"
        />
      </section>  

      <section className="pb-16  relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
      </section>

      <Footer />
    </>
  );
}
