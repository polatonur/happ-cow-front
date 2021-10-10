import React, { ReactChildren, ReactChild } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: ReactChildren | ReactChild;
  user: string | null;
  setUser: (val: string) => void;
}
const Layout = (props: Props) => {
  return (
    <div>
      <Header user={props.user} setUser={props.setUser} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
