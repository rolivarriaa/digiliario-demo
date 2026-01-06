import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import HeaderFiltros from "../components/HeaderFiltros";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import DigiliarioPlanesComponent from "../components/DigiliarioPlanesComponent";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   // Redirigir automáticamente a la página de propiedades
  //   router.push("/propiedades");
  // }, []);
  return (
    <div>
      <HeaderComponent />
      <HeaderFiltros />
      <Banner show={true} />
      <DigiliarioPlanesComponent show={true} />
      <Footer />
    </div>
  );
}
