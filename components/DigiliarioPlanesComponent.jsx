import React from "react";
import IndexCtas from "./IndexCtas";

function DigiliarioPlanesComponent() {
  return (
    <main className="mx-auto sm:px-16 pt-4 ">
      <section className="p-6 text-center ">
        <h2 className="text-xl md:text-2xl font-gilmerMedium">
          ¿Eres agente inmobiliario? Digitalízate con{" "}
          <span className="text-red-digiliario font-gilmerBold">
            Digiliario
          </span>{" "}
        </h2>
        <p className="text-sm font-gilmerMedium pb-3 pt-1 text-black-digiliario">
          {" "}
          <span className="text-red-digiliario font-gilmerBold text-lg">
            Todo tu negocio inmobiliario totalmente digitalizado.
          </span>
        </p>
        <div className="pt-12 flex justify-center">
          <IndexCtas />
        </div>
      </section>
    </main>
  );
}

export default DigiliarioPlanesComponent;
