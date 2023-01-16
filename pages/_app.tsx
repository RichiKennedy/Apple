import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MyAuthContextProvider } from "../context/AuthContext";
import { MyCategoryContextProvider } from "../context/CategoryContext";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";


function MyApp({ Component, pageProps }: AppProps) {
  return (<MyAuthContextProvider>
    <ShoppingCartProvider>
    <MyCategoryContextProvider>
      <Component {...pageProps} />
    </MyCategoryContextProvider>
    </ShoppingCartProvider>
    </MyAuthContextProvider>
  );
}

export default MyApp;
