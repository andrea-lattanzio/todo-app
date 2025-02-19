import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar";
import BottomBar from "./BottomBar";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="relative flex-1 p-3 pb-20 md:pb-3 overflow-auto">
            <Outlet />
          </main>
        </div>
        <BottomBar />
      </div>
    </>
  );
};

export default Layout;
