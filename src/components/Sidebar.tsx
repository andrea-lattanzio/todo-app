import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="fixed top-15 left-0 w-[20%] min-w-10 h-full bg-[#3c3d38] text-white p-6 hidden md:block">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                const baseStyles = "block p-2 rounded-lg hover:bg-[#31332e]";
                const activeStyles = isActive
                  ? "text-[#ffa552] font-semibold bg-[#31332e]"
                  : "hover:text-[#fcde9c]";
                return `${baseStyles} ${activeStyles}`;
              }}
            >
              Task List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) => {
                const baseStyles = "block p-2 rounded-lg hover:bg-[#31332e]";
                const activeStyles = isActive
                  ? "text-[#ffa552] font-semibold bg-[#31332e]"
                  : "hover:text-[#fcde9c]";
                return `${baseStyles} ${activeStyles}`;
              }}
            >
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tags"
              className={({ isActive }) => {
                const baseStyles = "block p-2 rounded-lg hover:bg-[#31332e]";
                const activeStyles = isActive
                  ? "text-[#ffa552] font-semibold bg-[#31332e]"
                  : "hover:text-[#fcde9c]";
                return `${baseStyles} ${activeStyles}`;
              }}
            >
              Tags
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => {
                const baseStyles = "block p-2 rounded-lg hover:bg-[#31332e]";
                const activeStyles = isActive
                  ? "text-[#ffa552] font-semibold bg-[#31332e]"
                  : "hover:text-[#fcde9c]";
                return `${baseStyles} ${activeStyles}`;
              }}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-[#3c3d38] text-white p-4 md:hidden">
        <ul className="flex justify-around space-x-4">
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
              <i className="bi bi-list-check text-xl"></i>
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
              to="/tags"
              className={({ isActive }) => {
                const baseStyles = "block py-2 px-3 rounded-lg font-semibold";
                const activeStyles = isActive
                  ? "text-[#ffa552] font-semibold bg-[#31332e]"
                  : "";
                return `${baseStyles} ${activeStyles}`;
              }}
            >
              <i className="bi bi-tags-fill text-xl"></i>
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
    </>
  );
};

export default Sidebar;
