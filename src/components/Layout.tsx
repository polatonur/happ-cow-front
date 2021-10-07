import React, { ReactChildren, ReactChild } from "react";
import Header from "./Header";

interface Props {
  children: ReactChildren | ReactChild;
}
const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
