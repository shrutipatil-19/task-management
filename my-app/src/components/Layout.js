// src/components/Layout.js
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="page-wrapper flex-grow-1">
        <Navbar />
        <Outlet /> {/* Will show Dashboard, AddTask, etc. */}
      </div>
    </>
  );
};

export default Layout;
