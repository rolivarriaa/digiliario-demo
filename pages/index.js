import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir automáticamente a la página de propiedades
    router.push("/propiedades");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Head>
        <title>Digiliario Demo APP</title>
        <meta name="description" content="Portal inmobiliario Digiliario" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Cargando propiedades...</p>
      </div>
    </div>
  );
}
