import * as React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Root: React.FC = () => {
  return <>
    <Navbar />
    <React.Suspense>
      <Outlet />
    </React.Suspense>
  </>
}

export default Root;