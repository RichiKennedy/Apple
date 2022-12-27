import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MyAuthContextProvider } from "../context/AuthContext";


function MyApp({ Component, pageProps }: AppProps) {
  return (<MyAuthContextProvider>
      <Component {...pageProps} />
    </MyAuthContextProvider>
  );
}

export default MyApp;
