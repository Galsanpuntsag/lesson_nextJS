import React from "react";
import Navbar from "../Navbar";
import ParentFooter from "../FooterSection";
const Layout = ({ children, setSearchTitle }) => {
  return (
    <div className="bg-fixed">
      <Navbar setSearchTitle={setSearchTitle} />
      {children}
      <ParentFooter />
    </div>
  );
};

export default Layout;
