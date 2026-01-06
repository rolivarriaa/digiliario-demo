import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  FaBath,
  FaBed,
  FaCar,
  FaHome,
  FaMapMarkerAlt,
  FaRulerCombined,
} from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import { useDigiliarioContext } from "../context/digiliarioContext";

export default function CardInmueble({ inmueble }) {
  const router = useRouter();

  const { selectedInmuebleDetalle, setSelectedInmuebleDetalle } =
    useDigiliarioContext();

  const {
    imagenes,
    precio,
    titulo,
    direccion,
    habitaciones,
    banos,
    superficie_total,
    inmuebles_tipos_nombre,
    tipo_cambio_short,
    codigo,
  } = inmueble || {};

  const formatPrice = (price) => {
    if (!price) return "Consultar";
    return new Intl.NumberFormat("es-AR").format(price);
  };

  const handleDetail = (value) => {
    setSelectedInmuebleDetalle(inmueble);

    router.push(`/propiedades/detalle/${value}`);
  };

  return (
    <div className="cursor-pointer">
      {/* <div className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)] xl:w-[380px] rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"> */}
      <div className="w-[340px] rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <ImageSlider
          imagenes={inmueble.imagenes}
          slug={inmueble.slug}
          handleDetail={handleDetail}
          precio={inmueble.precio}
          tipoCambio={inmueble.tipo_cambio_short}
        />

        <div className="px-4 py-4" onClick={() => handleDetail(inmueble.slug)}>
          <div className="flex flex-col justify-between">
            <div className="flex items-center justify-start gap-2">
              <p className="text-md">
                <span className="font-gilmerBold">{inmueble.tipo}</span>
                <span className="font-gilmerBold"> / </span>
                <span className="font-gilmerBold text-red-digiliario">
                  {inmueble.operacion}
                </span>
              </p>
            </div>
          </div>

          <div className="flex justify-between ">
            <div className="flex items-center justify-start gap-2 pt-2">
              <div
                className={`flex items-center gap-2 ${
                  inmueble.terreno ? "block" : "hidden"
                }`}
              >
                <FaRulerCombined className="text-red-digiliario " />
                <span className="text-sm font-gilmerBold">
                  {inmueble.terreno} {inmueble.unidad_medida_short}
                </span>
              </div>
              <div
                className={`flex items-center gap-2 ${
                  inmueble.construccion ? "block" : "hidden"
                }`}
              >
                <FaHome className="text-red-digiliario " />
                <span className="text-sm font-gilmerBold">
                  {inmueble.construccion} {inmueble.unidad_medida_short}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 pt-2">
              <div
                className={`flex items-center gap-2 ${
                  inmueble.habitaciones ? "block" : "hidden"
                }`}
              >
                <FaBed className="text-red-digiliario" size={15} />{" "}
                <p className="text-sm font-gilmerBold">
                  {inmueble.habitaciones}
                </p>
              </div>

              <div
                className={`flex items-center gap-2 ${
                  inmueble.banos ? "block" : "hidden"
                }`}
              >
                <FaBath className="text-red-digiliario" size={13} />{" "}
                <p className="text-sm font-gilmerBold">{inmueble.banos}</p>
              </div>

              {inmueble.autos != null ? (
                <div className="flex items-center gap-2">
                  <FaCar className="text-red-digiliario " />
                  <span className="text-sm font-gilmerBold">
                    {inmueble.autos}
                  </span>
                </div>
              ) : null}
            </div>
          </div>

          <hr className="w-full m-auto my-2 border border-gray-100" />

          <div>
            <div className="flex items-center justify-star">
              <FaMapMarkerAlt className="w-3 h-3 mr-1 text-red-digiliario" />
              <p className="text-sm font-gilmerBold">Hermosillo, Sonora</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
