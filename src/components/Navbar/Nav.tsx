import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "../../data/animationConfig";

interface NavLinksProps {
  onToggle: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onToggle }) => {
  return (
    <>
      <NavLink
        to="/about"
        onClick={onToggle}
        className={({ isActive }) => {
          const baseStyles = "text-xl";
          const activeStyles = isActive
            ? "text-[#ffa552] font-semibold"
            : "hover:text-[#fcde9c]";
          return `${baseStyles} ${activeStyles}`;
        }}
      >
        About me
      </NavLink>
      <a href="" className="text-xl">
        Blog
      </a>
      <a
        href="https://github.com/andrea-lattanzio"
        className="text-xl hover:text-[#fcde9c] flex items-center"
      >
        <i className="bi bi-github mr-2 text-xl"></i>
        Github Profile
      </a>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = (isMobile: boolean) => {
    if (isMobile) setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-1/4 sm:w-1/3 flex justify-end">
        <div className="hidden w-full justify-between md:flex">
          <NavLinks onToggle={() => toggleNavbar(false)} />
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
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            className="mt-4 basis-full md:hidden text-center space-y-2"
          >
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink
                to="/about"
                onClick={() => toggleNavbar(true)}
                className={({ isActive }) => {
                  const baseStyles = "text-xl";
                  const activeStyles = isActive
                    ? "text-[#ffa552] font-semibold"
                    : "";
                  return `${baseStyles} ${activeStyles}`;
                }}
              >
                About me
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <a href="" className="text-xl">
                Blog
              </a>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <a href="https://github.com/andrea-lattanzio" className="text-xl">
                <i className="bi bi-github mr-2 text-xl"></i>
                Github Profile
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
