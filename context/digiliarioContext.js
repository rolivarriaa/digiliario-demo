import { createContext, useContext, useState, useEffect } from "react";

const DigiliarioContext = createContext();

export function DigiliarioProvider({ children }) {
  const [inmueblesLista, setInmueblesLista] = useState([]);
  const [inmueblesListaFiltered, setInmueblesListaFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar datos desde inmuebles.json
    const loadInmuebles = async () => {
      try {
        setLoading(true);
        const response = await fetch("/inmuebles.json");
        const data = await response.json();
        // console.log({ data });
        setInmueblesLista(data.result.inmuebles);
        setInmueblesListaFiltered(data.result.inmuebles);
      } catch (error) {
        console.error("Error cargando inmuebles:", error);
        setInmueblesLista([]);
        setInmueblesListaFiltered([]);
      } finally {
        setLoading(false);
      }
    };

    loadInmuebles();
  }, []);

  return (
    <DigiliarioContext.Provider
      value={{
        inmueblesLista,
        setInmueblesLista,
        inmueblesListaFiltered,
        setInmueblesListaFiltered,
        loading,
      }}
    >
      {children}
    </DigiliarioContext.Provider>
  );
}

export function useDigiliarioContext() {
  const context = useContext(DigiliarioContext);
  if (!context) {
    throw new Error(
      "useDigiliarioContext debe usarse dentro de DigiliarioProvider"
    );
  }
  return context;
}
