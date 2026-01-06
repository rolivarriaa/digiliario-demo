import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { DigiliarioProvider } from "../context/digiliarioContext";

const variantOutlined = () => ({
  field: {
    _focus: {
      borderColor: "#D92332",
      borderWidth: "2px",
      boxShadow: "0 0 0 2px var(--chakra-ui-focus-ring-color)",
    },
    borderWidth: "2px",
    _placeholder: { color: "#bdbdbd" },
  },
});

const variantFilled = () => ({
  field: {
    _focus: {
      borderColor: "var(--chakra-ui-focus-ring-color)",
      boxShadow: "0 0 0 1px var(--chakra-ui-focus-ring-color)",
    },
  },
});

const variantFlushed = () => ({
  field: {
    _focus: {
      borderColor: "var(--chakra-ui-focus-ring-color)",
      boxShadow: "0 1px 0 0 var(--chakra-ui-focus-ring-color)",
    },
  },
});

const theme = extendTheme({
  colors: {
    brand: {
      100: "#D92332",
      // ...
      900: "#1a202c",
    },
    primary: {
      100: "#D92332",
    },
  },
  components: {
    Input: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed,
      },
    },
    Select: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed,
      },
    },
    Textarea: {
      variants: {
        outline: () => variantOutlined().field,
        filled: () => variantFilled().field,
        flushed: () => variantFlushed().field,
      },
    },
  },
});

const progress = new ProgressBar({
  size: 6,
  color: "#D92332",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <DigiliarioProvider>
      <ThemeProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </DigiliarioProvider>
  );
}

export default MyApp;
