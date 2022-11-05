import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';
import styles from "../styles.module.css";


const Layout = () => {
  return (
    <>
      <nav className={styles.bgColor}>
        <h3 className={styles.logo}>
          my<span className={styles.logoColor}>Blogs</span>
        </h3>
        <ul className={styles.ul}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">projects</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">ContactUs</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
