import React from "react";
import Footer from "../features/navbar/Footer";

import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";

const App = () => {
  const localStorage = window.localStorage;

	localStorage.products = localStorage.products
		? localStorage.products
		: JSON.stringify([]);
	localStorage.amount = localStorage.amount ? localStorage.amount : '0';
  
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
