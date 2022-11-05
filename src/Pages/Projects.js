import React, { Component } from 'react';
import ProfileCard from '../Components/ProfileCard/ProfileCard';
import { Wrapper,Container } from "../Components/ProfileCard/ProfileCard.elements";
import Footer from "../Components/Footer/Footer";


import {
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
} from "../Data/InfoProjects";
const Project = () => {
    return (
      <>
        <Container>
          <Wrapper>
            <ProfileCard {...project_1} />
            <ProfileCard {...project_2} />
            <ProfileCard {...project_3} />

            <ProfileCard {...project_4} />

            <ProfileCard {...project_5} />
          </Wrapper>
        </Container>
        <Footer/>
      </>
    );
}
 
export default Project;