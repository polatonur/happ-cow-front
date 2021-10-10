import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Cookies from "js-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(Cookies.get("userToken") || null);

  return <Component {...pageProps} user={user} setUser={setUser} />;
}
export default MyApp;
