import React from "react";
import Navbar from "../Navbar";
import ParentFooter from "../FooterSection";
const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      {children}
      <ParentFooter />
    </div>
  );
};

export default Layout;
