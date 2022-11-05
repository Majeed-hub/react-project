import React, { Component } from 'react';
import { Container, ContactList, Listitems } from "./Footer.elements";
const Footer = () => {
    return (
      <Container>
        <ContactList>
          <Listitems>instagram</Listitems>
          <Listitems>Facebook</Listitems>
          <Listitems>telephone</Listitems>
        </ContactList>
      </Container>
    );
}
 
export default Footer;