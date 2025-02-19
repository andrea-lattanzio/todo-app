import React from "react";
import Header from "./Header";
import Nav from "./Nav";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#697565] text-white sticky top-0 left-0 flex-wrap z-[20] mx-auto flex w-screen items-center justify-between p-8">
      <Header />
      <Nav />
    </nav>
  );
};

export default Navbar;
