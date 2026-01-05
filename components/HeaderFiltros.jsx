export default function HeaderFiltros() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1600px] mx-auto px-4 py-4">
        <h1 className="text-2xl md:text-3xl font-gilmerBold text-black-digiliario">
          Propiedades en{" "}
          <span className="text-red-digiliario">Venta y Alquiler</span>
        </h1>
        <p className="text-gray-600 mt-1 font-gilmerMedium">
          Encuentra tu propiedad ideal
        </p>
      </div>
    </header>
  );
}
