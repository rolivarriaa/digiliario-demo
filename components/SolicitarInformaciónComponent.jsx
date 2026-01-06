import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import InputMask from "react-input-mask";
import Link from "next/link";

import { FaClock, FaEnvelope, FaHome, FaPhone, FaUser } from "react-icons/fa";

function SolicitarInformaciónComponent({
  agenteNombre,
  agenteApellidos,
  inmuebleTitulo,
  ubicacion,
  agenteEmail,
  slugInmueble,
  slugAgente,
  modalDetalleMobile,
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
      contacttime: "",
      agenteemail: agenteEmail,
      slugAgente: slugAgente,
      slugInmueble: slugInmueble,
      message:
        "Hola Usuario Demo Me gustaría saber mas detalles sobre el siguiente inmueble: " +
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
    <div
      className={`${
        modalDetalleMobile ? "" : "rounded-lg shadow-md border-2"
      } p-6  border-gray-100`}
    >
      <div className="flex items-center flex-col ">
        {showCompleted === false ? (
          <div className="m-auto mx-auto justify-center mt-2 w-full">
            <div className="flex items-center gap-4 pb-4  justify-center">
              <FaHome className="text-red-digiliario" />
              <h1 className="font-gilmerBold ">Solicitar Información</h1>
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
                  className="outline-none text-sm text-black-digiliario font-gilmerBold"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <p className="text-sm text-red-digiliario">
                {formik.errors.name && <span>{formik.errors.name}</span>}
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
                  className="outline-none text-sm  text-black-digiliario font-gilmerBold"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></InputMask>
              </div>
              <p className="text-sm text-red-digiliario">
                {formik.errors.phone && <span>{formik.errors.phone}</span>}
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
                  className="outline-none text-sm  text-black-digiliario font-gilmerBold"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <p className="text-sm text-red-digiliario">
                {formik.errors.email && <span>{formik.errors.email}</span>}
              </p>
              <p className="text-sm font-gilmerBold mt-2 font-bold pt-3 text-center md:text-center  ">
                Mejor momento para contactar?{" "}
              </p>
              <div className="flex m-auto items-center bg-white border-2 border-gray-300 rounded-lg mt-2 px-3 py-2 w-full  text-red-digiliario">
                <FaClock
                  size={15}
                  className=" text-red-digiliario ml-2 mr-2 "
                />

                <select
                  id="contacttime"
                  name="contacttime"
                  className="w-full h-5 text-sm  "
                  value={formik.values.contacttime}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="Durante la mañana">Durante la mañana</option>
                  <option value="Al medio día">Al medio día</option>
                  <option value="Por la tarde">Por la tarde </option>
                </select>
              </div>
              <p className="text-sm text-red-digiliario">
                {formik.errors.contacttime && (
                  <span>{formik.errors.contacttime}</span>
                )}
              </p>
              <p className="text-sm font-gilmerBold mt-4 pt-3 text-left ">
                Tu mensaje{" "}
              </p>
              <div className="flex m-auto items-center bg-white border-2 border-gray-300 rounded-lg p-3 mt-4 mb-2 w-full ">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  cols={45}
                  className="outline-none text-sm  text-black-digiliario font-gilmerBold"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <p className="text-sm text-red-digiliario">
                {formik.errors.message && <span>{formik.errors.message}</span>}
              </p>
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
                  (agente inmobiliario) asociado con el inmueble a contactarte
                  vía teléfono ó email, también podrías recibir correos
                  electrónicos automatizados sobre inmuebles relacionados con tu
                  búsqueda. También aceptas nuestra{" "}
                  <Link href="/privacidad">
                    <a>
                      <span className="text-red-digiliario ">
                        política de términos y uso de digiliario.
                      </span>
                    </a>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="m-auto mx-auto justify-center mt-2 w-full h-[300px] flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-gilmerBold  text-xl text-red-digiliario">
                Mensaje enviado
              </h3>
              <p className="text-center">
                Próximamente nos comunicaremos contigo
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SolicitarInformaciónComponent;
