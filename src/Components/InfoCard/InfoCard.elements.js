import styled from 'styled-components';

export const InfoCardContainer = styled.div`
color:black;
width:100%;
box-sizing: border-box;
`
export const InfoCardRow = styled.div`
`;

export const InfoCardWrapper = styled.div`
         height: 200px;
         width: 48%;
         /* margin: auto; */
         float: left;

         background-color: ${(props) => (props.bcolor ? props.bcolor : "blue")};
         margin: 5px;
         padding: 5px;
       `;
export const InfoCardPara = styled.h2`
text-align: center;
`
export const InfoCardContent = styled.p``;
export const InfoCardButton = styled.button`
         background-color: #e5989b;
         border: none;
         border-radius: 3px;
         display: block;
         margin: auto;
         padding: 7px;
         margin-top: 7px;
       `;
export const Container = styled.div`
height: 150vh;
`;