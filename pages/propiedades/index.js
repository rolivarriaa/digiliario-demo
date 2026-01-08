import Head from "next/head";
import React, { useEffect, useState } from "react";
import DropdownHabitaciones from "../../components/DropdownHabitaciones";
import DropdownPrecios from "../../components/DropdownPrecios";
import HeaderFiltros from "../../components/HeaderFiltros";
import SelectInmuebleTipo from "../../components/SelectInmuebleTipo";
import SelectOperacion from "../../components/SelectOperacion";
import CardInmueble from "../../components/CardInmueble";
import { FaEraser } from "react-icons/fa";
import { useDigiliarioContext } from "../../context/digiliarioContext";
import Footer from "../../components/Footer";

export default function Propiedades() {
  const {
    inmueblesLista,
    inmueblesListaFiltered,
    setInmueblesListaFiltered,
    loading,
  } = useDigiliarioContext();

  const [filters, setFilters] = useState({
    operacion: "",
    tipo: "",
    habitaciones: "",
    precioMin: "",
    precioMax: "",
    moneda: "",
  });

  const applyFilters = () => {
    let filtered = [...inmueblesLista];

    if (filters.operacion) {
      filtered = filtered.filter(
        (inmueble) =>
          inmueble.inmuebles_operaciones_id === String(filters.operacion)
      );
    }

    if (filters.tipo) {
      filtered = filtered.filter(
        (inmueble) => inmueble.inmuebles_tipos_id === String(filters.tipo)
      );
    }

    if (filters.habitaciones) {
      filtered = filtered.filter(
        (inmueble) => inmueble.habitaciones >= parseInt(filters.habitaciones)
      );
    }

    if (filters.precioMin) {
      filtered = filtered.filter(
        (inmueble) => inmueble.precio >= parseFloat(filters.precioMin)
      );
    }

    if (filters.precioMax) {
      filtered = filtered.filter(
        (inmueble) => inmueble.precio <= parseFloat(filters.precioMax)
      );
    }

    if (filters.moneda) {
      filtered = filtered.filter(
        (inmueble) => inmueble.tipo_cambio_short === filters.moneda
      );
    }

    setInmueblesListaFiltered(filtered);
  };

  const updateFilter = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      operacion: "",
      tipo: "",
      habitaciones: "",
      precioMin: "",
      precioMax: "",
      moneda: "",
    });
  };

  useEffect(() => {
    if (inmueblesLista.length > 0) {
      applyFilters();
    }
  }, [filters, inmueblesLista]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen m-auto max-w-screen-2xl bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 border-t-4 border-b-4 border-red-500 rounded-full animate-spin"></div>
          <p className="font-semibold text-gray-600">Cargando propiedades...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen m-auto bg-gray-50">
      <Head>
        <title>Digiliario : Propiedades</title>
        <meta
          name="description"
          content="Encuentra tu propiedad ideal en Digiliario"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderFiltros />

      <main className="px-4 m-auto mx-auto mt-2 md:max-w-fit ">
        <div>
          <div className="flex flex-col content-center justify-start gap-3 pb-4 mx-auto mt-5 md:flex-row center">
            <SelectOperacion
              value={filters.operacion}
              onChange={(value) => updateFilter("operacion", value)}
            />
            <SelectInmuebleTipo
              value={filters.tipo}
              onChange={(value) => updateFilter("tipo", value)}
            />
            <DropdownHabitaciones
              value={filters.habitaciones}
              onChange={(value) => updateFilter("habitaciones", value)}
            />
            <DropdownPrecios
              precioMin={filters.precioMin}
              precioMax={filters.precioMax}
              onChangePrecioMin={(value) => updateFilter("precioMin", value)}
              onChangePrecioMax={(value) => updateFilter("precioMax", value)}
              onChangeMoneda={(value) => updateFilter("moneda", value)}
            />
          </div>

          <div className="hidden mt-4 text-left md:block">
            <h3 className="pb-1 font-bold text-black text-md">
              Inmuebles{" "}
              <span className="font-bold text-red-500">
                Disponibles ({inmueblesListaFiltered?.length || 0})
              </span>
            </h3>

            {inmueblesListaFiltered?.length === 0 && (
              <div className="mt-3">
                <p className="font-medium text-gray-600 text-md">
                  No se encontraron inmuebles basados en la búsqueda
                </p>
                <div className="bg-red-500 px-3 py-2.5 flex hover:bg-red-600 rounded-md w-[200px] mt-2 transition-colors">
                  <button
                    className="flex items-center gap-2 mx-auto text-center"
                    onClick={clearFilters}
                  >
                    <FaEraser className="w-5 h-5 text-white" />
                    <p className="text-sm font-bold text-white">
                      Eliminar filtros
                    </p>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mb-4 md:hidden">
            <p className="font-medium text-left text-red-digiliario font-gilmerBold">
              {inmueblesListaFiltered?.length || 0} propiedades encontradas
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 mt-2 mb-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {inmueblesListaFiltered?.map((inmueble, i) => (
              <CardInmueble key={inmueble.codigo || i} inmueble={inmueble} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
