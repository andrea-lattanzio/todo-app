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
          <main className="flex-1 p-5 overflow-y-scroll h-[calc(100vh-20vh)] md:h-[calc(100vh-11vh)]">
            <Outlet />
          </main>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Layout;
