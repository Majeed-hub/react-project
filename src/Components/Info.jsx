import React, { useState, useEffect } from "react";
import styles from "../styles.module.css";
import {InfoWrapper, InfoContent} from './Info.elements'
function Info({title, description}) {
  
  return (
    <InfoWrapper>
      <InfoContent>
        {/* {props.value} */}
        {title}
      </InfoContent>
      <InfoContent>{description}</InfoContent>
    </InfoWrapper>
  );
}

export default Info;
