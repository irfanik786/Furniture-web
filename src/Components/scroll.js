import styled from "styled-components";

// export const Heading = styled.h1`
// text-align: right;
// color: green;
// `;

// export const Content = styled.div`
// overflowY: scroll;
// height: 2500px;
// `;

export const Button = styled.div`
  ${
    "" /* position: fixed; 
width: 100%; 
left: 95%; 
bottom: 40px; 
height: 20px; 
font-size: 2.5rem; 
z-index: 1; 
cursor: pointer; 
color: white;  */
  }

  background: #FD8F5F;
  height: 50px;
  width: 50px;
  right: 31px;
  bottom: 18px;
  position: fixed;
  color: #fff;
  font-size: 20px;
  text-align: center;
  border-radius: 50%;
  line-height: 48px;
  border: 2px solid transparent;
  box-shadow: 0 0 10px 3px rgba(108, 98, 98, 0.2);  
  cursor: pointer; 

  @media screen and (max-width: 920px) {
    left: 90%;
  }
  @media screen and (max-width: 550px) {
    left: 85%;
  }
`;
