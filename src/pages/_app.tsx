import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Cookies from "js-cookie";
import { AuthProvider } from "../assets/useContext/AuthProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;
