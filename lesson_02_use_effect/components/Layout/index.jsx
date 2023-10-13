import React from "react";
import Navbar from "../Navbar";
import ParentFooter from "../FooterSection";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <ParentFooter />
    </>
  );
};

export default Layout;
