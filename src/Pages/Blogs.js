import React, { Component } from "react";
import Info from "../Components/Info";
import infoBlogs from "../Data/InfoBlogs";
import InfoCard from "../Components/InfoCard/InfoCard";
import {Container} from "../Components/InfoCard/InfoCard.elements";

import { article1, article2, article3, article4 } from "../Data/InfoArticle";
import Footer from "../Components/Footer/Footer";


const Blogs = (props) => {
  // const value = ;
  ;
  return (
    <>
      <Container>
        <h1>Blogs</h1>
        <Info {...infoBlogs} />
        <InfoCard {...article1} />
        <InfoCard {...article2} />
        <InfoCard {...article3} />
        <InfoCard {...article4} />
        <InfoCard {...article1} />
      </Container>
      {/* <Info value={props.value} /> */}

      {/* <button onClick={() => props.updateValue(" the value has been updated")}>click</button> */}
      {/* <Footer /> */}
    </>
  );

  
};

export default Blogs;
