import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar";
import BottomBar from "./BottomBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <Sidebar />
          <main className="relative flex-1 overflow-y-scroll p-3 h-[calc(100vh-20vh)] md:h-[calc(100vh-11vh)]">
            <div className="relative w-full h-full">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Layout;
