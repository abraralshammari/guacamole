import React, { useState } from "react";
import styled from "styled-components";
import Images from "../Images";
import Flippy, {FrontSide,BackSide} from "react-flippy";


const ImgStyle = styled.img`
width: 150px;
  height: 150px;
  margin: 20px;
  border-style: double;
  border-radius: 50px;

`;

const Cardsimg = (props) => {
  //  const [isFlipped, setIsFlipped] = useState(false);
  //  const handleClick = () => {
  //    setIsFlipped(!isFlipped);
  //  }
  
  return (
    <Flippy>
    <FrontSide>
      <ImgStyle 
      src={props.img.backimg}
      />
    </FrontSide>
    <BackSide>
    <ImgStyle
        src={props.img.image} 
        alt={props.img.altt}
       />
    </BackSide>
  </Flippy>
       
 
   ) 
}






export default Cardsimg;