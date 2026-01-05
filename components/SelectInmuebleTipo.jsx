export default function SelectInmuebleTipo({ value, onChange }) {
  const tipos = [
    { value: "1", label: "Casa" },
    { value: "2", label: "Departamento" },
    { value: "3", label: "Terreno" },
    { value: "4", label: "Local Comercial" },
    { value: "5", label: "Oficina" },
    { value: "6", label: "Cochera" },
    { value: "7", label: "Galpón" },
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
      <option value="">Tipo de inmueble</option>
      {tipos.map((tipo) => (
        <option key={tipo.value} value={tipo.value}>
          {tipo.label}
        </option>
      ))}
    </select>
  );
}
