import React from "react";
import styled from "styled-components";
import Images from "../Images";

const ImgStyle = styled.img`
width: 150px;
  height: 150px;
  margin: 20px;
  border-style: double;
  border-radius: 50px;

`;

const Cardsimg = (props) => {
   return (
       <ImgStyle
        src={props.img.image} 
        alt={props.img.altt}
       />
   ) 
}






export default Cardsimg;