import React from "react";
import Header from "./Header";
import Nav from "./Nav";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white sticky top-0 flex-wrap z-[20] mx-auto flex w-screen items-center justify-between p-8">
      <Header />
      <Nav />
    </nav>
  );
};

export default Navbar;

{
  /* <div className="mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center">
          <i className="bi bi-check2-circle text-2xl font-extrabold"></i>
          <h1 className="text-lg font-bold ml-2">Todo App</h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }
            >
              Get to know me
            </NavLink>
          </li>
        </ul>
      </div> */
}
