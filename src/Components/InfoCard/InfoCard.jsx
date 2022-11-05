import React from 'react';
import {
  InfoCardContainer,
  InfoCardWrapper,
  InfoCardPara,
  InfoCardContent,
  InfoCardButton
} from "./InfoCard.elements";
import { Outlet, Link } from "react-router-dom";


const InfoCard = ({id,heading, content}) => {
    return (
      <>
        <InfoCardContainer>
          <InfoCardWrapper bcolor="antiquewhite">
            <InfoCardPara>{heading}</InfoCardPara>
            <InfoCardContent>{content}</InfoCardContent>
            <InfoCardButton>
              <Link to={`/DetailArticles/${id}`}>View details</Link>
            </InfoCardButton>
          </InfoCardWrapper>
        </InfoCardContainer>
      </>
    );
}

export default InfoCard;
