import React, { ReactChildren, ReactChild } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: ReactChildren | ReactChild;
}
const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
