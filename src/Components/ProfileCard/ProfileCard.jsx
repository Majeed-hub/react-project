import React, { Component } from 'react';
import {Wrapper,Photo,Name,Position,Btn,Card} from './ProfileCard.elements';
import photo from './profile.png'
Photo.defaultProps = {
  src:
    "https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png",
};
const ProfileCard = ({name,description,link,imagelink}) => {
    return (
      <>
        <Card>
          <Photo src={imagelink}/>
          <Name>{name}</Name>
          <Position>{description}</Position>
          <Btn><a href={link}>Visit</a></Btn>
        </Card>
      </>
    );
}
 
export default ProfileCard;