import React, { useState } from "react";
import * as yup from "yup";
import InputMask from "react-input-mask";

import { FaClock, FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import Link from "next/link";
import { useFormik } from "formik";

function SolicitarInformaciónModalComponent({
  agenteNombre,
  agenteApellidos,
  inmuebleTitulo,
  ubicacion,
  agenteEmail,
  slugInmueble,
  slugAgente,
}) {
  const [showCompleted, setShowCompleted] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().max(50).required("El nombre es obligatorio."),
    phone: yup.string().required("Teléfono / WhatsApp requerido."),
    email: yup
      .string()
      .email("Correo electrónico inválido")
      .max(50)
      .required("El correo electrónico es requerido."),
    contacttime: yup
      .string()
      .required("Es necesario seleccionar el momento para contactar"),
    message: yup.string().required("El mensaje es requerido"),
  });

  const formik = useFormik({
    enableReinitialize: false,
    initialValues: {
      name: "",
      phone: "",
      email: "",
      contacttime: "Durante la mañana",
      agenteemail: agenteEmail,
      slugAgente: slugAgente,
      slugInmueble: slugInmueble,

      message:
        "Hola " +
        agenteNombre +
        " Me gustaría saber mas detalles sobre el siguiente inmueble: " +
        "https://digiliario.com/propiedades/" +
        slugInmueble +
        " " +
        inmuebleTitulo +
        " ,espero respuesta pronta, muchas gracias!",
    },
    onSubmit: (values) => {
      console.log({ values });
    },
    validationSchema: schema,
  });

  return (
    <div>
      <div className="flex items-center flex-col">
        {showCompleted === false ? (
          <div className="m-auto mx-auto justify-center w-full">
            <div className="flex items-center gap-4  justify-start">
              <h1 className="font-gilmerBold ">
                Solicitar Información a{" "}
                <span className="text-red-digiliario font-gilmerBold">
                  {agenteNombre} {agenteApellidos}
                </span>
              </h1>
            </div>
            <form onSubmit={formik.handleSubmit} className="m-auto">
              <div className="flex m-auto items-center bg-white border-2 border-gray-300 rounded-lg px-3 py-2 w-full mt-2 text-red-digiliario">
                <FaUser size={15} className="ml-2 mr-2 text-red-digiliario" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nombre completo"
                  size={30}
                  className="outline-none text-sm text-gray-700"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <p className="text-xs text-red-digiliario ">
                {formik.errors.name && (
                  <span className="font-gilmerBold pt-2 ">
                    {formik.errors.name}
                  </span>
                )}
              </p>

              <div className="flex m-auto items-center bg-white border-2 border-gray-300 rounded-lg mt-4 px-3 py-2 w-full  text-red-digiliario">
                <FaPhone size={15} className="ml-2 mr-2  text-red-digiliario" />

                <InputMask
                  mask="99 (+999) 999 9999"
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Telefono / WhatsApp"
                  size={30}
                  className="outline-none text-sm text-gray-700 font-gilmerMedium"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></InputMask>
              </div>
              <p className="text-xs text-red-digiliario  ">
                {formik.errors.phone && (
                  <span className="font-gilmerBold pt-2">
                    {formik.errors.phone}
                  </span>
                )}
              </p>
              <p className="hidden md:block text-xs font-gilmerBold mt-2 text-black-digiliario">
                Es importante agregar el Código de país, para México es el 52.
              </p>
              <div className="flex m-auto items-center bg-white border-2 border-gray-300 rounded-lg mt-4 px-3 py-2 w-full  text-red-digiliario">
                <FaEnvelope
                  size={15}
                  className="  ml-2 mr-2  text-red-digiliario "
                />
                <input
                  id="email"
                  name="email"
                  placeholder="Correo electrónico"
                  size={30}
                  className="outline-none text-sm text-gray-700 font-gilmerMedium"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <p className="text-xs text-red-digiliario">
                {formik.errors.email && (
                  <span className="font-gilmerBold  pt-2">
                    {formik.errors.email}
                  </span>
                )}
              </p>
              <p className="text-sm font-gilmerBold mt-2 font-bold pt-3 text-left  ">
                Mejor momento para contactar?{" "}
              </p>
              <div className="flex m-auto items-center bg-white border-2  rounded-lg mt-2 px-3 py-2 w-full  text-red-digiliario">
                <FaClock
                  size={15}
                  className=" text-red-digiliario ml-2 mr-2 "
                />

                <select
                  id="contacttime"
                  name="contacttime"
                  className="w-full h-5 text-sm font-gilmerMedium "
                  value={formik.values.contacttime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="Durante la mañana">Durante la mañana</option>
                  <option value="Al medio día">Al medio día</option>
                  <option value="Por la tarde">Por la tarde </option>
                </select>
              </div>
              <p className="text-xs text-red-digiliari ">
                {formik.errors.contacttime && (
                  <span className="font-gilmerBold pt-2">
                    {formik.errors.contacttime}
                  </span>
                )}
              </p>
              <p className="text-sm font-gilmerBold mt-4 text-left ">
                Tu mensaje{" "}
              </p>
              <div className="flex m-auto items-center bg-white border-2 border-gray-300 rounded-lg p-3 mt-2 mb-2 w-full ">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  cols={55}
                  className="outline-none text-sm text-black-digiliario font-gilmerBold"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <p className="text-xs text-red-digiliario ">
                {formik.errors.message && (
                  <span className="font-gilmerBold pt-2">
                    {formik.errors.message}
                  </span>
                )}
              </p>
              <div className="flex flex-col">
                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-red-digiliario px-3 py-2.5 flex text-sm font-gilmerBold hover:bg-red-500 rounded-lg text-white"
                  >
                    Enviar mensaje
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-gilmerMedium text-black-digiliario">
                    Al solicitar información autorizas a digiliario y al broker
                    asociado con el inmueble a contactarte vía teléfono ó email.
                    <Link href="/privacidad">
                      <a>
                        <span className="text-red-digiliario ">
                          política de términos y uso de digiliario.
                        </span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-gilmerBold  text-xl text-red-digiliario">
              Mensaje enviado
            </h3>
            <p className="text-center">
              Próximamente nos comunicaremos contigo
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SolicitarInformaciónModalComponent;
