import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
     <div className="min-h-screen pt-20">
     <Outlet />
     </div>
      <Footer />
    </div>
  );
};

export default Main;
