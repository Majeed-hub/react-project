import styled from 'styled-components'
export const Container = styled.div`
         background-color: #ff6347;
         margin: 0;
         padding: 15px;
         height: 100px;
         position: static;
         /* bottom: 0; */
         width: 100%;
         /* display: block; */
         text-align: center;
         /* margin-top:90vh ; */
         margin-top:20px ;
       `;
export const ContactList = styled.ul`
        width:40%;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        margin: auto;
        text-align: center;
        /* justify-content: space-around; */
`;
export const Listitems = styled.li`
        padding: 5px !important;
        margin: 20px !important;
        justify-content: space-around;
`