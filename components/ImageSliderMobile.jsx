import { HeartIcon } from "@heroicons/react/solid";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

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
    const newIndex = isFirstSlide ? imagenes?.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === imagenes?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };

  return (
    <>
      <div className="relative flex items-center">
        <div className="absolute px-2 py-1 bg-white rounded-md bottom-2 right-2 ">
          <p className="font-gilmerHeavy text-red-digiliario ">
            {precio} {tipoCambio}
          </p>
        </div>
        {/* <div className="absolute top-0">
          <div className="flex items-center w-8 h-8 bg-white rounded-full shadow-lg cursor-pointer ">
            <HeartIcon className="w-5 h-5 m-auto hover:text-red-digiliario" />
          </div>
        </div> */}
        <div className="absolute flex justify-between w-full my-auto">
          {imagenes?.length > 1 ? (
            <div
              className="flex items-center justify-center w-5 h-5 ml-2 rounded-full cursor-pointer bg-black-digiliario hover:bg-gray-700 "
              onClick={goToPrevious}
            >
              <ArrowLeftRounded className="text-white" />
            </div>
          ) : (
            ""
          )}

          {imagenes?.length > 1 ? (
            <div
              className="flex items-center justify-center w-5 h-5 mr-2 rounded-full cursor-pointer bg-black-digiliario hover:bg-gray-700"
              onClick={goToNext}
            >
              <ArrowRightRounded className="text-white" />
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className="bg-cover bg-center w-full h-[220px] xl:w-[345px] xl:h-[170px]"
          onClick={() => handleDetail(slug)}
          style={{
            backgroundImage: imagenes?.[currentIndex]?.url
              ? `url(${imagenes[currentIndex].url})`
              : "none",
          }}
        ></div>
      </div>
    </>
  );
}

export default ImageSlider;
