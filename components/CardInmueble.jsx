import { useRouter } from "next/router";
import { useEffect } from "react";

export default function CardInmueble({ inmueble }) {
  const router = useRouter();

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

  const handleClick = () => {
    if (codigo) {
      router.push(`/propiedades/${codigo}`);
    }
  };

  const formatPrice = (price) => {
    if (!price) return "Consultar";
    return new Intl.NumberFormat("es-AR").format(price);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
    >
      <div className="relative h-48 md:h-56">
        <img
          src={imagenes[0].url || "/placeholder.jpg"}
          alt={titulo}
          className="w-full h-full object-cover"
        />
        {inmuebles_tipos_nombre && (
          <span className="absolute top-2 right-2 bg-red-digiliario text-white px-3 py-1 rounded-full text-sm font-gilmerBold">
            {inmuebles_tipos_nombre}
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-xl font-gilmerBold text-red-digiliario">
            {tipo_cambio_short} {formatPrice(precio)}
          </span>
        </div>

        <h3 className="text-gray-900 font-gilmerBold text-lg mb-1 line-clamp-1">
          {titulo}
        </h3>

        <p className="text-gray-600 text-sm mb-3 font-gilmerMedium line-clamp-1">
          📍 {direccion}
        </p>

        <div className="flex gap-4 text-sm text-gray-600 font-gilmerMedium">
          {habitaciones && (
            <span className="flex items-center gap-1">🛏️ {habitaciones}</span>
          )}
          {banos && <span className="flex items-center gap-1">🚿 {banos}</span>}
          {superficie_total && (
            <span className="flex items-center gap-1">
              📏 {superficie_total} m²
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
