import Image from "next/image";
import Link from "next/link";
import React from "react";

function IndexCtas() {
  return (
    <>
      <div className="max-w-7xl bg-white">
        <div className="flex flex-col md:grid md:grid-cols-3 justify-center text-center">
          <div className="pb-20 md:pb-0">
            <Image src="/digiliario-platforms.svg" width={314} height={180} />
            <div className="mt-8 ">
              <p className="font-gilmerBold">Página web </p>
            </div>
            <Link href="#">
              <button
                type="button"
                className="text-white text-sm font-gilmerMedium bg-red-digiliario hover:bg-red-500   rounded-md text-md mt-5 px-10 py-2.5 text-center mr-2 mb-2"
              >
                Ver Planes
              </button>
            </Link>
          </div>
          <div className="pb-20 md:pb-0">
            <Image src="/digiliario-brokers.svg" width={314} height={180} />
            <div className="mt-8  ">
              <p className="font-gilmerBold">Red de Brokers Inmobililiarios </p>
            </div>
            <Link href="#">
              <button
                type="button"
                className="text-white text-sm font-gilmerMedium bg-red-digiliario hover:bg-red-500   rounded-md text-md mt-5 px-10 py-2.5 text-center mr-2 mb-2"
              >
                Ver Planes
              </button>
            </Link>
          </div>
          <div className="pb-20 md:pb-0">
            <Image src="/digiliario-buildings.svg" width={314} height={180} />
            <div className="mt-8  ">
              <p className="font-gilmerBold">Desarrollos Inmobiliarios </p>
            </div>
            <Link href="#">
              <button
                type="button"
                className="text-white text-sm font-gilmerMedium bg-red-digiliario hover:bg-red-500   rounded-md text-md mt-5 px-10 py-2.5 text-center mr-2 mb-2"
              >
                Ver Planes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexCtas;
