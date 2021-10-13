import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRef, useState } from "react";
import { AuthProvider } from "../assets/useContext/AuthProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const [ok, setstate] = useState("onur");

  return (
    <AuthProvider>
      <Component {...pageProps} ok={ok} />
    </AuthProvider>
  );
}
export default MyApp;
