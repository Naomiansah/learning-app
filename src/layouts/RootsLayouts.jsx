import React from "react";

import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootsLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1"></main>

      <Outlet />
      <Footer />
    </div>
  );
};

export default RootsLayouts;
