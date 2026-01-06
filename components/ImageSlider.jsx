import { HeartIcon } from "@heroicons/react/solid";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import { format } from "number-currency-format";
import React, { useState } from "react";
import Image from "next/image";

function ImageSlider({
  slides,
  imagenes,
  slug,
  handleDetail,
  precio,
  tipoCambio,
}) {
  const [currentIndex, setcurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imagenes.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === imagenes.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };

  return (
    <>
      <div className="relative flex items-center overflow-hidden group">
        <div className="absolute top-2 right-2 bg-white rounded-md px-2 py-1 z-10">
          <div className="flex gap-2">
            <p className="font-gilmerHeavy text-red-digiliario ">
              {format(precio, {
                currency: "$",
                spacing: false,
                currencyPosition: "LEFT",
                decimalsDigits: 0,
                decimalSeparator: " ",
              })}

              <span className="font-gilmerHeavy text-red-digiliario ">
                {tipoCambio}{" "}
              </span>
            </p>
          </div>
        </div>

        <div className="absolute my-auto w-full flex justify-between z-10">
          {imagenes.length > 1 && (
            <div
              className="ml-2 cursor-pointer flex items-center w-7 h-7 justify-center rounded-full bg-white hover:bg-gray-50 shadow-md "
              onClick={goToPrevious}
            >
              <ArrowLeftRounded className="text-red-digiliario" />
            </div>
          )}

          {imagenes.length > 1 && (
            <div
              className="mr-2 cursor-pointer flex items-center w-7 h-7 justify-center  rounded-full bg-white hover:bg-gray-50 shadow-md"
              onClick={goToNext}
            >
              <ArrowRightRounded className="text-red-digiliario" />
            </div>
          )}
        </div>

        <div
          className="relative w-full h-[220px] sm:h-[200px] lg:h-[180px] xl:h-[170px] rounded-t-lg overflow-hidden cursor-pointer"
          onClick={() => handleDetail(slug)}
        >
          <Image
            src={imagenes[currentIndex].url}
            alt="Inmueble"
            layout="fill"
            className="object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-110"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 345px"
          />
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
