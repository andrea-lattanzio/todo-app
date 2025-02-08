import { NavLink } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#3c3d38] text-white md:hidden h-16 flex items-center justify-evenly">
      <ul className="flex space-x-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              const baseStyles = "block py-2 px-3 rounded-lg font-semibold";
              const activeStyles = isActive
                ? "text-[#ffa552] font-semibold bg-[#31332e]"
                : "";
              return `${baseStyles} ${activeStyles}`;
            }}
          >
            <i className="bi bi-house-fill text-xl"></i>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) => {
              const baseStyles = "block py-2 px-3 rounded-lg font-semibold";
              const activeStyles = isActive
                ? "text-[#ffa552] font-semibold bg-[#31332e]"
                : "";
              return `${baseStyles} ${activeStyles}`;
            }}
          >
            <i className="bi bi-plus-circle-fill text-xl"></i>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className={({ isActive }) => {
              const baseStyles = "block py-2 px-3 rounded-lg font-semibold";
              const activeStyles = isActive
                ? "text-[#ffa552] font-semibold bg-[#31332e]"
                : "";
              return `${baseStyles} ${activeStyles}`;
            }}
          >
            <i className="bi bi-folder-fill text-xl"></i>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => {
              const baseStyles = "block py-2 px-3 rounded-lg font-semibold";
              const activeStyles = isActive
                ? "text-[#ffa552] font-semibold bg-[#31332e]"
                : "";
              return `${baseStyles} ${activeStyles}`;
            }}
          >
            <i className="bi bi-person-circle text-xl"></i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BottomBar;
