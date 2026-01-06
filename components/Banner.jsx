import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="flex items-center relative h-[500px] md:h-[400px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px]">
      <Image src="/hero.png" layout="fill" objectFit="cover" />
      <div className="absolute w-full text-center flex justify-center flex-col ">
        <h1 className=" text-4xl font-gilmerMedium my-4">
          <span className="font-gilmerBold bg-white text-red-digiliario px-4 py-2 rounded-md ">
            {" "}
            Digiliario{" "}
          </span>
        </h1>

        <h3 className="text-white text-3xl font-gilmerBold px-4 py-6">
          El portal del agente inmobiliario digital en México
        </h3>
        {/* <h4 className="font-gilmerBold text-2xl text-red-digiliario  flex items-center gap-2 justify-center">
          <div className=" bg-white px-4 py-2 rounded-md">
            <div className="flex items-center gap-2 ">
              <FaLaptop />{" "}
              <p className="font-gilmerBold text-xl">Online este próximo</p>
            </div>
          </div>
        </h4>
        <h5 className="font-gilmerBold text-2xl text-red-digiliario  flex items-center gap-2 justify-center my-4">
          <div className=" bg-white px-4 py-2 rounded-md">
            <div className="flex items-center gap-2 ">
              <FaCalendarCheck />{" "}
              <p className="font-gilmerBold text-xl">25 de Abril 2023!</p>
            </div>
          </div>
        </h5> */}

        {/* <div>
          <FiltrosIndex />
        </div> */}
      </div>
    </div>
  );
}

export default Banner;
