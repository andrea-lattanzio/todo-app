import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <NavLink to="/" className="flex items-center">
      <i className="bi bi-check2-circle text-2xl font-extrabold"></i>
      <h1 className="text-lg font-bold ml-2">Todo App</h1>
    </NavLink>
  );
};

export default Header;
