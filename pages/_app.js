import "../styles/globals.css";
import { DigiliarioProvider } from "../context/digiliarioContext";

function MyApp({ Component, pageProps }) {
  return (
    <DigiliarioProvider>
      <Component {...pageProps} />
    </DigiliarioProvider>
  );
}

export default MyApp;
