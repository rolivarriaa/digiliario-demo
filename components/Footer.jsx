import { MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="mt-10 mb-10 md:mt-20">
      {/* <hr className="h-2 m-auto mt-32 mb-2"></hr> */}
      <footer className="items-center text-center ">
        <div className="items-center h-10 cursor-pointer ">
          <Image src="/digiliario-footer.png" width={90} height={21} />
        </div>
        {/*  center contenet menu */}
        <div className="justify-center block gap-4 m-auto text-center align-middle md:flex lg:flex ">
          <p className="cursor-pointer md:pb-2 text-digiblackprimary">
            <Link href="/privacidad">
              <a
                target="_blank"
                className="text-xs hover:text-red-digiliario font-gilmerMedium"
              >
                Politica de privacidad
              </a>
            </Link>
          </p>
          <p className="cursor-pointer md:pb-2 text-digiblackprimary">
            <Link href="/terminos">
              <a
                target="_blank"
                className="text-xs hover:text-red-digiliario font-gilmerMedium "
              >
                Términos y condiciones
              </a>
            </Link>
          </p>
          {/* <p className="p-2 cursor-pointer ">
            <Link href="/contacto">
              <a
                target="_blank"
                className="text-xs hover:text-red-digiliario font-gilmerMedium "
              >
                Información
              </a>
            </Link>
          </p> */}
          {/* <p className="p-2 cursor-pointer ">
            <Link href="#">
              <a className="text-xs hover:text-red-digiliario font-gilmerMedium ">
                Soporte
              </a>
            </Link>
          </p> */}
          <p className="cursor-pointer md:p-2 ">
            <Link href="/contacto">
              <a className="text-xs hover:text-red-digiliario font-gilmerMedium ">
                Contacto
              </a>
            </Link>
          </p>
        </div>
        {/* Termina links  */}
        {/* redes sociales */}
        <div className="items-center h-10 mt-4 ">
          <span className="p-4 text-black-digiliario hover:text-red-digiliario">
            <Link href="https://facebook.com/digiliario">
              <a target="_blank">
                <Facebook />
              </a>
            </Link>
          </span>
          <span className="p-4 text-black-digiliario hover:text-red-digiliario">
            <Link href="https://instagram.com/digiliario">
              <a target="_blank">
                <Instagram />
              </a>
            </Link>
          </span>
          <span className="p-4 text-black-digiliario hover:text-red-digiliario">
            <Link href="https://twitter.com/digiliario">
              <a target="_blank">
                <Twitter />
              </a>
            </Link>
          </span>
        </div>
        {/* termina redes sociales */}
        <div className="items-center mt-2">
          <p className="text-xs font-gilmerBold">
            Digiliario © {new Date().getFullYear()} - Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
