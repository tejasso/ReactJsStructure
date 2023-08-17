// src/routes/Router.js or src/Router.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  DashbordContainer,
  UsersContainer,
  ProductsContainer,
} from "../containers";
import { NavigationBar } from "../components";

const AppRouter = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/products" element={<ProductsContainer />} />
        <Route path="/" element={<DashbordContainer />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
