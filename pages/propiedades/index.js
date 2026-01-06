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
      <div className="max-w-screen-2xl m-auto min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-semibold">Cargando propiedades...</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" m-auto min-h-screen bg-gray-50">
      <Head>
        <title>Digiliario : Propiedades</title>
        <meta
          name="description"
          content="Encuentra tu propiedad ideal en Digiliario"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderFiltros />

      <main className="max-w-fit m-auto mx-auto px-4 mt-2 ">
        <div>
          <div className="flex gap-3 mt-5 flex-col md:flex-row mx-auto content-center center justify-start">
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

          <div className="mt-4 text-left hidden md:block">
            <h3 className="text-black font-bold text-md pb-1">
              Inmuebles{" "}
              <span className="text-red-500 font-bold">
                Disponibles ({inmueblesListaFiltered?.length || 0})
              </span>
            </h3>

            {inmueblesListaFiltered?.length === 0 && (
              <div className="mt-3">
                <p className="font-medium text-md text-gray-600">
                  No se encontraron inmuebles basados en la búsqueda
                </p>
                <div className="bg-red-500 px-3 py-2.5 flex hover:bg-red-600 rounded-md w-[200px] mt-2 transition-colors">
                  <button
                    className="text-center mx-auto flex gap-2 items-center"
                    onClick={clearFilters}
                  >
                    <FaEraser className="h-5 w-5 text-white" />
                    <p className="font-bold text-sm text-white">
                      Eliminar filtros
                    </p>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
            {inmueblesListaFiltered.map((inmueble) => (
              <CardInmueble key={inmueble.id} inmueble={inmueble} />
            ))}
          </div>

          <div className="md:hidden mb-4">
            <p className="text-center font-medium text-gray-600">
              {inmueblesListaFiltered?.length || 0} propiedades encontradas
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
