import styled from 'styled-components';

export const Wrapper = styled.div`

display:grid;
grid-template-columns:repeat(auto-fit,minmax(12rem,16rem));
gap:2rem;
justify-content: center;    
/* background-color: bisque; */
box-sizing: border-box;
`;
export const Card = styled.div`
overflow:hidden;
box-shadow: 0 2px 20px gray;
display: flex;
box-sizing: border-box;
flex-direction: column;
justify-content: space-between;
cursor:pointer;
padding: 4px;;
transition: transform 200ms ease-in;
&:hover{
    transform: scale(1.02);
};

`;


export const Photo =styled.img `width:82%;height:12rem; object-fit:cover; display:block;margin:auto;`;
export const Name = styled.p`
         padding: 0 1rem;
         margin: auto;
       `;
export const Position = styled.p`
         padding: 0 1rem;
         margin: auto;
       `;
export const Btn = styled.button`
margin:1rem;
font-size: 1rem;
border: 2px solid red;
background: transparent;
color:red;
transition: background 200ms ease-in, color 200ms ease-in;
&:hover {
    color: white;
    background-color: red;
}
`;



export const Container =styled.div`
padding-top: 50px;

`
