import React, { Component } from "react";
import Info from '../Components/Info.jsx';
import NavBar from "../Components/NavBar.jsx";
import infoHome from "../Data/InfoHome";
import Styles from '../styles.module.css'
import Footer from "../Components/Footer/Footer";
import image from './image.jpg'
import {Img,Row,Intro} from './Home.elements'
const Home = (props) => {
  return (
    <>
      <h1 className={Styles.center}>Home page</h1>
      {/* <Info {...infoHome} /> */}
      <Row>
        <Img src={image} alt="random image" />
        <Intro>
          
          <p>I'm</p>
          <p>Abdul Majeed</p>
        </Intro>
      </Row>
      <Footer />
    </>
  );
};

export default Home;
