import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="w-[20%] min-w-40 h-screen bg-[#3c3d38] text-white p-4 hidden md:flex flex-col">
        <ul className="space-y-2 font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                const baseStyles =
                  "block py-3 px-4 rounded-lg hover:bg-[#31332e]";
                const activeStyles = isActive
                  ? "text-[#ffa552] font-semibold bg-[#31332e]"
                  : "hover:text-[#fcde9c]";
                return `${baseStyles} ${activeStyles}`;
              }}
            >
              <div className="flex items-center">
                <i className="bi bi-house text-2xl mr-3"></i>
                <p>Home</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) => {
                const baseStyles =
                  "block py-3 px-4 rounded-lg hover:bg-[#31332e]";
                const activeStyles = isActive
                  ? "text-[#ffa552] font-semibold bg-[#31332e]"
                  : "hover:text-[#fcde9c]";
                return `${baseStyles} ${activeStyles}`;
              }}
            >
              <div className="flex items-center">
                <i className="bi bi-file-earmark-plus text-2xl mr-3"></i>
                Add Task
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) => {
                const baseStyles =
                  "block py-3 px-4 rounded-lg hover:bg-[#31332e]";
                const activeStyles = isActive
                  ? "text-[#ffa552] font-semibold bg-[#31332e]"
                  : "hover:text-[#fcde9c]";
                return `${baseStyles} ${activeStyles}`;
              }}
            >
              <div className="flex items-center">
                <i className="bi bi-folder text-2xl mr-3"></i>
                <p>Categories</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => {
                const baseStyles =
                  "block py-3 px-4 rounded-lg hover:bg-[#31332e]";
                const activeStyles = isActive
                  ? "text-[#ffa552] font-semibold bg-[#31332e]"
                  : "hover:text-[#fcde9c]";
                return `${baseStyles} ${activeStyles}`;
              }}
            >
              <div className="flex items-center">
                <i className="bi bi-person-circle text-2xl mr-3"></i>
                Profile
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
