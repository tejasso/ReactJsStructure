import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  DashbordContainer,
  // UsersContainer,
  // ProductsContainer,
} from "../containers";
import { NavigationBar } from "../components";
import styles from "./Router.module.scss";

const AppRouter = () => {
  return (
    <Router>
      <div className={styles.layout}>
        <NavigationBar />
        <div className={styles.content}>
          <Routes>
            {/* <Route path="/users" element={<UsersContainer />} />
            <Route path="/products" element={<ProductsContainer />} /> */}
            <Route path="/report" element={<div>This is Report Page</div>} />
            <Route path="/" element={<DashbordContainer />} />
          </Routes>
        </div>
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} ICR Portal</p>
        </footer>
      </div>
    </Router>
  );
};

export default AppRouter;
