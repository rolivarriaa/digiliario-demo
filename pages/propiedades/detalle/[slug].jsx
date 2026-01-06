import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Footer from "../../../components/Footer";
import InmuebleOpciones from "../../../components/InmuebleOpciones";
import SolicitarInformaciónComponent from "../../../components/SolicitarInformaciónComponent";

//iconos
import { HeartIcon, HomeIcon } from "@heroicons/react/solid";

import {
  FaArrowLeft,
  FaBath,
  FaBed,
  FaEnvelope,
  FaHome,
  FaImages,
  FaMapMarkedAlt,
  FaMapMarker,
  FaMapMarkerAlt,
  FaMarker,
  FaPaperclip,
  FaPhone,
  FaPrint,
  FaShare,
  FaStreetView,
  FaWhatsapp,
} from "react-icons/fa";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { BiChevronRight, BiShapeSquare } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { MdGridOn } from "react-icons/md";

// import SolicitarInformaciónModalComponent from "../../../components/SolicitarInformaciónModalComponent";
import ImageSliderMobile from "../../../components/ImageSliderMobile";
import Head from "next/head";
import { format } from "number-currency-format";
import HeaderFiltros from "../../../components/HeaderFiltros";
import { useDigiliarioContext } from "../../../context/digiliarioContext";
import SolicitarInformaciónModalComponent from "../../../components/SolicitarInformaciónModalComponent";

function propiedad() {
  const router = useRouter();
  const { selectedInmuebleDetalle, setSelectedInmuebleDetalle } =
    useDigiliarioContext();

  const [imagenPrincipal, setImagenPrincipal] = useState({});

  useEffect(() => {
    // console.log({ selectedInmuebleDetalle });

    // Redirigir si selectedInmuebleDetalle está vacío o es null
    if (
      !selectedInmuebleDetalle ||
      Object.keys(selectedInmuebleDetalle).length === 0
    ) {
      router.push("/propiedades");
    }
  }, [selectedInmuebleDetalle, router]);

  const [ciudadEstado, setCiudadEstado] = useState("");
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  const MapComponent = ({ text }) => <div>{text}</div>;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const modalMapViews = useDisclosure();
  const modalShare = useDisclosure();
  const modalDetalleMobile = useDisclosure();

  const opciones = [
    {
      icon: <FaPaperclip />,
      title: "Ficha técnica",
      action: "",
    },

    {
      icon: <FaMapMarkedAlt />,
      title: "Mapa",
      action: modalMapViews.onOpen,
    },

    {
      icon: <FaPrint />,
      title: "Imprimir",
      action: "",
    },
    {
      icon: <FaShare />,
      title: "Compartir",
      action: "",
    },
  ];

  const handleDetail = (value) => {
    router.push(`/propiedades/${value}`);
  };

  return (
    <>
      <div>
        <HeaderFiltros />
        {/* <HeaderBroker /> */}
        <div className="max-w-screen-2xl m-auto h-auto sm:mb-20">
          <div className="hidden md:flex md:gap-2 md:pb-4 md:items-center md:mt-6">
            <Link href={`/propiedades`}>
              <a href={`/propiedades`}>
                <div className="flex items-center gap-1 mr-2">
                  <FaArrowLeft className="text-red-digiliario mr-2 items-center" />
                  <p className="text-sm font-gilmerBold text-red-digiliario">
                    Regresar
                  </p>
                </div>
              </a>
            </Link>
            <div className="flex ">
              <div>
                <p className="text-sm font-gilmerBold underline">
                  {selectedInmuebleDetalle?.operacion}
                </p>
              </div>
              <div>
                <BiChevronRight size={20} />
              </div>

              <div className="w-auto md:w-[625px] ">
                <p className="text-sm font-gilmerBold truncate ">
                  {selectedInmuebleDetalle?.titulo}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:relative  md:h-[250px] lg:rounded-md lg:h-auto lg:bg-cover lg:bg-center bg-cover">
            <div className="grid grid-cols-3 justify-between gap-4 h-[416px] ">
              <div className="absolute w-full h-[416px] justify-between">
                <div className=" h-full flex flex-col justify-between  ">
                  <div className="flex flex-row justify-between">
                    <div className="flex justify-end p-4">
                      <div className="flex items-center gap-2 bg-white rounded-lg p-2 shadow-md hover:text-red-digiliario cursor-pointe md:px-2 md:py-2 ">
                        <span className="text-black-digiliario text-xs md:text-sm font-gilmerHeavy uppercase">
                          {selectedInmuebleDetalle?.operacion}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end p-4 cursor-pointer gap-4 ">
                      <div
                        className="flex items-center p-2 gap-2 bg-white rounded-lg"
                        onClick={onOpen}
                      >
                        <MdGridOn
                          size={15}
                          className="text-black-digiliario "
                        />
                        <span className="text-black-digiliario text-2xs md:text-sm font-gilmerBold  hover:text-red-digiliario">
                          todas las fotos
                        </span>
                      </div>
                      <div
                        className="flex items-center p-2 gap-2 bg-white rounded-lg"
                        onClick={onOpen}
                      >
                        <FaImages
                          size={15}
                          className="text-black-digiliario "
                        />
                        <span className="text-black-digiliario text-xs md:text-sm font-gilmerBold hover:text-red-digiliario">
                          {selectedInmuebleDetalle?.total_imagenes}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end p-4 gap-4">
                    <div className="flex items-center gap-2 bg-white rounded-lg p-2 shadow-md hover:text-red-digiliario cursor-pointer">
                      <FiHeart size={15} className="text-black-digiliario " />
                      <span className="text-sm font-gilmerBold">Guardar</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Imágen principal */}

              {selectedInmuebleDetalle.imagenes?.map(
                (imagen, i) =>
                  imagen.principal == 1 && (
                    <div
                      key={i}
                      className={` ${
                        selectedInmuebleDetalle?.imagenes.total_imagenes == 1
                          ? "col-span-3 "
                          : " col-span-2  "
                      } w-full rounded-lg bg-cover bg-center `}
                      style={{ backgroundImage: `url(${imagen.url})` }}
                    ></div>
                  )
              )}

              {/* Imágenes de un lado */}
              <div
                className={` ${
                  selectedInmuebleDetalle?.total_imagenes == 1
                    ? "hidden"
                    : " col-span-1 h-[400px] "
                }`}
              >
                <div className="flex flex-col gap-4 justify-between ">
                  {selectedInmuebleDetalle?.imagenes?.map(
                    (imagen, i) =>
                      i < 3 &&
                      imagen.principal != 1 && (
                        <div
                          key={i}
                          className="h-[200px] rounded-lg bg-cover bg-center "
                          style={{ backgroundImage: `url(${imagen.url})` }}
                        ></div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Images */}
          <div className="md:hidden">
            <ImageSliderMobile
              imagenes={selectedInmuebleDetalle?.imagenes}
              slug={selectedInmuebleDetalle?.slug}
              handleDetail={handleDetail}
              precio={selectedInmuebleDetalle?.precio}
              tipoCambio={selectedInmuebleDetalle?.tipo_cambio_short}
            />

            <div className="relative flex items-center">
              <div className="absolute top-2 left-2 bg-white rounded-md px-2 py-1 ">
                <p className="font-gilmerHeavy text-red-digiliario uppercase">
                  {selectedInmuebleDetalle?.operacion}
                </p>
              </div>
              <div className="absolute top-2 right-2 bg-white rounded-md px-2 py-1 ">
                <div className="flex gap-1">
                  <p className="font-gilmerHeavy text-red-digiliario  text-right">
                    {format(selectedInmuebleDetalle?.precio, {
                      currency: "$",
                      spacing: false,
                      currencyPosition: "LEFT",
                      decimalsDigits: 0,
                      decimalSeparator: " ",
                    })}
                  </p>

                  <p className="font-gilmerHeavy text-red-digiliario ">
                    {selectedInmuebleDetalle?.tipo_cambio_short}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-2 right-2 bg-white rounded-md px-2 py-1 flex items-center gap-2">
                <FaImages size={15} className="text-black-digiliario " />
                <span className="text-black-digiliario text-sm md:text-sm font-gilmerBold hover:text-red-digiliario">
                  {selectedInmuebleDetalle?.total_imagenes}
                </span>
              </div>

              <div
                className="bg-cover bg-center w-full h-[220px] xl:w-[345px] xl:h-[170px]  "
                // onClick={() => handleDetail(slug)}
                onClick={() => modalDetalleMobile.onOpen()}
                style={{
                  backgroundImage: `url(${imagenPrincipal?.url})`,
                }}
              ></div>
            </div>
          </div>

          {/* End Mobile Images  */}

          {/* Inicia descripcion */}

          <div>
            {/* Top Descripcion */}
            <div className="w-full px-2 lg:px-0 ">
              <div className="flex items-center justify-between lg:pt-2 lg:pb-2">
                <p className="hidden md:block text-xs font-gilmerBold pt-2 text-gray-600">
                  #{selectedInmuebleDetalle?.inmueble_codigo}
                </p>
                <div></div>
              </div>

              {/* Desktop */}
              <div className="md:flex items-center justify-between hidden">
                <div>
                  <h1 className="text-xl font-gilmerBold">
                    {selectedInmuebleDetalle?.titulo}
                  </h1>

                  <p className="  font-gilmerBold  text-red-digiliario py-2  rounded-md text-md font-medium flex items-center gap-2">
                    {selectedInmuebleDetalle?.tipo}
                  </p>
                </div>

                <div>
                  <div className="flex flex-col justify-end">
                    <div className="flex gap-2">
                      <p className="font-gilmerHeavy text-2xl text-red-digiliario  text-right">
                        {format(selectedInmuebleDetalle?.precio, {
                          currency: "$",
                          spacing: false,
                          currencyPosition: "LEFT",
                          decimalsDigits: 0,
                          decimalSeparator: " ",
                        })}
                      </p>
                      <span className="font-gilmerHeavy text-2xl text-red-digiliario  text-right">
                        {selectedInmuebleDetalle?.tipo_cambio_short}
                      </span>
                    </div>

                    <Link href="/#">
                      <a
                        target="_blank"
                        className="text-sm font-gilmerBold text-gray text-right cursor-pointer lg:pt-2 lg:font-gilmerBold hover:text-red-digiliario"
                      >
                        Solicitar Precalificación
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Desktop */}

              {/* Mobile */}
              <div className="md:hidden ">
                <div className="flex flex-wrap mt-2 pt-2">
                  <h1 className="text-lg font-gilmerBold">
                    {selectedInmuebleDetalle?.titulo}
                  </h1>
                </div>
                <p className="  font-gilmerBold  text-red-digiliario pb-2  rounded-md text-md  flex items-center gap-2">
                  {selectedInmuebleDetalle?.tipo}
                </p>

                <div className="flex items-center justify-between ">
                  <div className="hidden   flex-col justify-end">
                    <span className="text-sm md:text-base font-gilmerMedium text-gray text-right cursor-pointer lg:pt-2 lg:font-gilmerBold hover:text-red-digiliario">
                      Solicitar Precalificación
                    </span>
                  </div>
                </div>
              </div>

              <hr className="border w-full my-4 border-gray-100 " />

              <div className="flex flex-col w-full md:flex-row">
                {/* Columna de contenido */}
                <main className="w-full  md:pr-6">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        selectedInmuebleDetalle?.habitaciones
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <FaBed className=" text-red-digiliario" />
                        <span className="text-sm font-gilmerBold md:text-base">
                          {selectedInmuebleDetalle?.habitaciones} Habitaciones
                        </span>
                      </div>

                      <div
                        className={`flex flex-wrap items-center gap-2 ${
                          selectedInmuebleDetalle?.banos ? "block" : "hidden"
                        }`}
                      >
                        <FaBath size={12} className=" text-red-digiliario" />
                        <span className="text-sm font-gilmerBold md:text-base">
                          {selectedInmuebleDetalle?.banos} Baños
                        </span>
                      </div>

                      <div className={`flex flex-wrap items-center gap-2`}>
                        <BiShapeSquare className="text-red-digiliario" />
                        <span className="text-sm md:text-base font-gilmerBold">
                          {selectedInmuebleDetalle?.terreno}
                          {
                            selectedInmuebleDetalle.inmueble
                              ?.unidad_medida_short
                          }
                        </span>
                      </div>
                      <div
                        className={`flex flex-wrap items-center gap-2 ${
                          selectedInmuebleDetalle?.construccion
                            ? "block"
                            : "hidden"
                        }`}
                      >
                        <FaHome className=" text-red-digiliario" />
                        <span className="text-sm md:text-base font-gilmerBold">
                          {selectedInmuebleDetalle?.construccion}
                          {
                            selectedInmuebleDetalle.inmueble
                              ?.unidad_medida_short
                          }
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 ">
                    <h2 className="text-lg font-gilmerBold text-red-digiliario">
                      Descripción
                    </h2>
                    <div className="py-2">
                      <div className="whitespace-pre-wrap text-md font-gilmerMedium">
                        {selectedInmuebleDetalle?.descripcion}
                      </div>
                    </div>

                    {/* social sharing */}
                    <InmuebleOpciones
                      slug={selectedInmuebleDetalle?.slug}
                      titulo={selectedInmuebleDetalle?.titulo}
                      mobile={false}
                    />
                  </div>

                  <div className="md:grid md:grid-cols-2 md:bg-gray-50 items-center px-2 rounded-md my-4 sm:mb-10 lg:mb-0">
                    <div>
                      <div className="md:flex  md:items-start gap-2 items-center justify-center md:justify-start py-2 md:ml-4">
                        <div className="pb-2 ">
                          <p className="font-gilmerBold text-center  text-red-digiliario">
                            {selectedInmuebleDetalle?.nombre}{" "}
                            {selectedInmuebleDetalle?.apellidos}
                          </p>
                          <p className="text-xs md:text-left text-center font-gilmerMedium">
                            Agente Inmobiliario
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-right flex md:justify-end justify-center cursor-pointer">
                      <Link href="/propiedades">
                        <a className="flex text-white items-center text-sm bg-red-digiliario hover:bg-red-500 rounded-lg  px-10 py-2.5 text-center ">
                          <HomeIcon className="h-4 w-4 text-white mr-2 text-right " />
                          <p className="font-gilmerBold">Ver inventario</p>
                        </a>
                      </Link>
                    </div>
                  </div>
                </main>
                {/* Columna de la Derecha */}

                <aside className="w-full md:w-1/3">
                  <InmuebleOpciones
                    slug={selectedInmuebleDetalle?.slug}
                    titulo={selectedInmuebleDetalle?.titulo}
                    mobile={true}
                  />

                  <SolicitarInformaciónComponent
                    agenteNombre={selectedInmuebleDetalle?.nombre}
                    agenteApellidos={selectedInmuebleDetalle?.apellidos}
                    inmuebleTitulo={selectedInmuebleDetalle?.titulo}
                    ubicacion={ciudadEstado}
                    agenteEmail={selectedInmuebleDetalle?.email}
                    slugAgente={selectedInmuebleDetalle?.agente_slug}
                    slugInmueble={selectedInmuebleDetalle?.slug}
                  />
                </aside>
                {/* Termina Columna de la Derecha */}
              </div>
            </div>
          </div>
          {/* Termina descripcion */}
        </div>
        <Footer />
      </div>

      {/* Termina Botones de CTA Footer */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="6xl"
        scrollBehavior={scrollBehavior}
        allowPinchZoom="true"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody className="overflow-x-auto w-full">
            <div>
              <div className="flex gap-2 pb-4 items-center mt-6">
                <div className="flex ">
                  <div>
                    <p className="text-md font-gilmerBold underline text-red-digiliario">
                      {selectedInmuebleDetalle?.operacion}
                    </p>
                  </div>
                  <div>
                    <BiChevronRight size={20} />
                  </div>

                  <div className="w-[625px]">
                    <p className="text-md font-gilmerBold truncate ">
                      {selectedInmuebleDetalle?.titulo}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-5">
                <div className="flex flex-col gap-4 h-auto s mb-4 col-span-3">
                  <div className="h-[580px] overflow-auto">
                    {selectedInmuebleDetalle?.imagenes?.map((imagen, i) => (
                      <div
                        key={i}
                        className=" h-[350px] w-full  mb-2 rounded-lg bg-cover bg-center"
                        style={{ backgroundImage: `url(${imagen.url})` }}
                      ></div>
                    ))}
                  </div>
                  <div
                    className={`${
                      selectedInmuebleDetalle?.inmueble?.glat != ""
                        ? "block"
                        : "hidden"
                    } pt-4`}
                  >
                    <h2 className="text-lg font-gilmerBold text-red-digiliario pb-2 ">
                      Ubicación
                    </h2>
                  </div>
                </div>
                <div className="col-span-2 ml-4 ">
                  <SolicitarInformaciónModalComponent
                    agenteNombre={selectedInmuebleDetalle?.nombre}
                    agenteApellidos={selectedInmuebleDetalle?.apellidos}
                    inmuebleTitulo={selectedInmuebleDetalle?.titulo}
                    ubicacion={ciudadEstado}
                    agenteEmail={selectedInmuebleDetalle?.email}
                    slugAgente={selectedInmuebleDetalle?.agente_slug}
                    slugInmueble={selectedInmuebleDetalle?.slug}
                  />
                </div>
              </div>

              <p>{selectedInmuebleDetalle?.descripcion}</p>
            </div>

            <div>
              <div>
                <div className="flex w-full">
                  <p className="font-gilmerBold text-sm pb-2 ">
                    Imágenes ({selectedInmuebleDetalle?.total_imagenes})
                  </p>
                </div>
              </div>
              <div>
                <div className="flex overflow-y-auto"></div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={modalDetalleMobile.isOpen}
        onClose={modalDetalleMobile.onClose}
        size="full"
        allowPinchZoom="true"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton className="bg-white shadow-md text-red-digiliario" />
          <ModalBody className="m-0 p-0">
            <div className="flex flex-col gap-2 h-auto pt-2 mb-4 ">
              <h2 className="text-lg font-gilmerBold text-red-digiliario px-4 ">
                Imágenes ({selectedInmuebleDetalle?.total_imagenes})
              </h2>
              <div className="h-auto overflow-auto">
                {selectedInmuebleDetalle?.imagenes?.map((imagen, i) => (
                  <div
                    key={i}
                    className=" h-[300px] w-full  mb-2  bg-cover bg-center"
                    style={{ backgroundImage: `url(${imagen.url})` }}
                  ></div>
                ))}
              </div>
              <div className="pt-4  ">
                <h2 className="text-lg font-gilmerBold text-red-digiliario pb-2 px-4">
                  Ubicación
                </h2>
              </div>
              <SolicitarInformaciónComponent
                modalDetalleMobile={true}
                agenteNombre={selectedInmuebleDetalle?.nombre}
                agenteApellidos={selectedInmuebleDetalle?.apellidos}
                inmuebleTitulo={selectedInmuebleDetalle?.titulo}
                ubicacion={ciudadEstado}
                agenteEmail={selectedInmuebleDetalle?.email}
                slugAgente={selectedInmuebleDetalle?.agente_slug}
                slugInmueble={selectedInmuebleDetalle?.slug}
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default propiedad;
