import { useState } from "react";

export default function DropdownPrecios({
  precioMin,
  precioMax,
  onChangePrecioMin,
  onChangePrecioMax,
  onChangeMoneda,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [moneda, setMoneda] = useState("");

  const handleMonedaChange = (e) => {
    const value = e.target.value;
    setMoneda(value);
    onChangeMoneda(value);
  };

  const displayText = () => {
    if (precioMin || precioMax) {
      const min = precioMin || "0";
      const max = precioMax || "∞";
      const currencySymbol =
        moneda === "USD" ? "$" : moneda === "ARS" ? "$" : "";
      return `${currencySymbol}${min} - ${currencySymbol}${max}`;
    }
    return "Precio";
  };

  return (
    <div className="relative w-full md:w-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full md:min-w-[200px] px-4 py-2.5 text-left bg-white border border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 font-gilmerMedium"
      >
        {displayText()}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 w-full md:w-80 mt-1 bg-white border border-gray-300 rounded-md shadow-lg p-4">
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-700 mb-1 font-gilmerMedium">
                  Moneda
                </label>
                <select
                  value={moneda}
                  onChange={handleMonedaChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 font-gilmerMedium"
                >
                  <option value="">Seleccionar moneda</option>
                  <option value="USD">USD - Dólar</option>
                  <option value="ARS">ARS - Peso Argentino</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1 font-gilmerMedium">
                  Precio mínimo
                </label>
                <input
                  type="number"
                  value={precioMin}
                  onChange={(e) => onChangePrecioMin(e.target.value)}
                  placeholder="Min"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 font-gilmerMedium"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1 font-gilmerMedium">
                  Precio máximo
                </label>
                <input
                  type="number"
                  value={precioMax}
                  onChange={(e) => onChangePrecioMax(e.target.value)}
                  placeholder="Max"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 font-gilmerMedium"
                />
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full px-4 py-2 bg-red-digiliario text-white rounded-md hover:bg-red-500 font-gilmerBold"
              >
                Aplicar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
