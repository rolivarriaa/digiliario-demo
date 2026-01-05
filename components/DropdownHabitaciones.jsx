import { useState } from "react";

export default function DropdownHabitaciones({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const opciones = [
    { value: "1", label: "1+ Habitación" },
    { value: "2", label: "2+ Habitaciones" },
    { value: "3", label: "3+ Habitaciones" },
    { value: "4", label: "4+ Habitaciones" },
    { value: "5", label: "5+ Habitaciones" },
  ];

  const handleSelect = (opcion) => {
    onChange(opcion.value);
    setIsOpen(false);
  };

  const selectedOption = opciones.find((op) => op.value === value);

  return (
    <div className="relative w-full md:w-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full md:min-w-[200px] px-4 py-2.5 text-left bg-white border border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 font-gilmerMedium"
      >
        {selectedOption ? selectedOption.label : "Habitaciones"}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {opciones.map((opcion) => (
              <button
                key={opcion.value}
                onClick={() => handleSelect(opcion)}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 first:rounded-t-md last:rounded-b-md font-gilmerMedium ${
                  value === opcion.value ? "bg-gray-100" : ""
                }`}
              >
                {opcion.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
