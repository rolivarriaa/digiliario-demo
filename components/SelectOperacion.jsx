export default function SelectOperacion({ value, onChange }) {
  const operaciones = [
    { value: "1", label: "Venta" },
    { value: "2", label: "Alquiler" },
    { value: "3", label: "Alquiler Temporal" },
  ];

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      className="w-full md:w-auto md:min-w-[200px] px-4 py-2.5 bg-white border border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 font-gilmerMedium"
    >
      <option value="">Tipo de operación</option>
      {operaciones.map((operacion) => (
        <option key={operacion.value} value={operacion.value}>
          {operacion.label}
        </option>
      ))}
    </select>
  );
}
