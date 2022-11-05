import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from './Pages/Contact';
import DetailArticles from "./Pages/DetailArticles";
import Footer from './Components/Footer/Footer'
import Projects from './Pages/Projects'


function App(){

const [value, setValue] = useState("Hi this is majeed trying learn react");

           


  return (
    <React.Fragment>
      {/* <NavBar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home value={value} />} />
            <Route
              path="blogs"
              element={<Blogs value={value} updateValue={setValue} />}
            />
            <Route path="contact" element={<Contact value={value} />} />
            <Route path="projects" element={<Projects value={value} />} />

            <Route path="/DetailArticles/:id" element={<DetailArticles />} />
          </Route>
        </Routes>
      </Router>
      {/* <Footer/> */}
    </React.Fragment>
  );
};
export default App;

