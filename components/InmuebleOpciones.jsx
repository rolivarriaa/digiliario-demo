import React from "react";
import {
  FaMapMarkerAlt,
  FaPaperclip,
  FaPrint,
  FaShare,
  FaStreetView,
} from "react-icons/fa";

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";

function InmuebleOpciones({ slug, titulo, tags, mobile }) {
  const opciones = [
    {
      icon: <FaPaperclip />,
      title: "Ficha técnica",
      action: "",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Mapa",
      action: "",
    },
    {
      icon: <FaStreetView />,
      title: "Street view",
      action: "",
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
  return (
    <div
      className={`${
        mobile === true
          ? "pb-4 md:flex flex-col items-end gap-2 justify-center md:justify-end hidden "
          : "pb-4 md:flex flex-col items-start gap-2 justify-center md:justify-end hidden"
      }`}
    >
      <div className=" font-gilmerBold text-red-digiliario mt-6">
        Compartir en redes sociales.
      </div>
      <div className="flex gap-2">
        <WhatsappShareButton
          url={"https://digiliario.com/propiedades/" + slug}
          title={titulo}
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <FacebookShareButton
          url={"https://digiliario.com/propiedades/" + slug}
          quote={titulo}
          hashtag={"#digiliario"}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <LinkedinShareButton url={"https://digiliario.com/propiedades/" + slug}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <TelegramShareButton
          url={"https://digiliario.com/propiedades/" + slug}
          title={titulo}
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>

        <TwitterShareButton
          url={"https://digiliario.com/propiedades/" + slug}
          title={titulo}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <EmailShareButton
          url={"https://digiliario.com/propiedades/" + slug}
          subject={titulo}
          body="body"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </div>
  );
}

export default InmuebleOpciones;
