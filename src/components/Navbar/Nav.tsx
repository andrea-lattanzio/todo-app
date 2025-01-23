import { useState } from "react";
import { NavLink } from "react-router-dom";

interface NavLinksProps {
  onToggle: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onToggle }) => {
  return (
    <>
      <NavLink
        to="/blog"
        onClick={onToggle}
        className={({ isActive }) => {
          const baseStyles = "text-xl font-semibold";
          const activeStyles = isActive
            ? "text-yellow-300 underline"
            : "hover:text-yellow-300";
          return `${baseStyles} ${activeStyles}`;
        }}
      >
        Blog
      </NavLink>
      <NavLink
        to="/about"
        onClick={onToggle}
        className={({ isActive }) => {
          const baseStyles = "text-xl font-semibold";
          const activeStyles = isActive
            ? "text-yellow-300 underline"
            : "hover:text-yellow-300";
          return `${baseStyles} ${activeStyles}`;
        }}
      >
        About me
      </NavLink>
      <NavLink
        to="/github"
        onClick={onToggle}
        className={({ isActive }) => {
          const baseStyles = "text-xl font-semibold";
          const activeStyles = isActive
            ? "text-yellow-300 underline"
            : "hover:text-yellow-300";
          return `${baseStyles} ${activeStyles}`;
        }}
      >
        Github profile
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = (isMobile: boolean) => {
    if(isMobile)
      setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-1/3 flex justify-end">
        <div className="hidden w-full justify-between md:flex">
          <NavLinks onToggle={() => toggleNavbar(false)}/>
        </div>
        <div className="md:hidden">
          <button onClick={() => toggleNavbar(true)}>
            {isOpen ? (
              <i className="bi bi-x text-3xl font-extrabold"></i>
            ) : (
              <i className="bi bi-list text-3xl font-extrabold"></i>
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="mt-4 flex flex-col items-center basis-full space-y-4">
          <NavLinks onToggle={() => toggleNavbar(true)}></NavLinks>
        </div>
      )}
    </>
  );
};

export default Nav;
