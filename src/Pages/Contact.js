import React, { Component } from 'react';
import ProfileCard from "../Components/ProfileCard/ProfileCard";
import Styles from "../styles.module.css";
import {Wrapper,Container} from '../Components/ProfileCard/ProfileCard.elements'
import Footer from "../Components/Footer/Footer";

const Contact = () => {
    return (
      <>
        <Container>
          <Wrapper>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />

            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </Wrapper>
        </Container>

        <Footer />
      </>
    );
}
 
export default Contact;