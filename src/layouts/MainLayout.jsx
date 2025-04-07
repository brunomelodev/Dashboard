import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Initial from "../pages/Initial";
import BasicForm from "../pages/BasicForm";

import { useSidebar } from "../hooks/useSidebar";
import { Route, Routes } from "react-router-dom";
import BasicTable from "../pages/BasicTable";
import ModalForm from "../pages/ModalForm";
import Login from "../pages/Login";
import { Outlet } from "react-router-dom";

function Layout() {
  const { isOpen } = useSidebar();
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="content-area">
        <Header />
        <main
          className={`${
            isOpen ? "md:w-[calc(100%-256px)] md:ml-64" : "w-full"
          } bg-gray-50 min-h-screen transition-all duration-300 ease-in-out`}
          // "md:w-[calc(100%-256px)] md:ml-64" : "w-full"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
export default Layout;
