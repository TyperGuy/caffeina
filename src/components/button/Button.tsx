import React from 'react';
import styled from "styled-components";
import {ButtonType} from 'myButton';





const Button : React.FC<ButtonType> =(props) => {


  const CustomButton = styled.button`
  height: 50px;
  max-width: 200px;
  background: ${props.background};
  color: ${props.color};
  border: none;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 0 1.5rem;
  cursor: pointer;
  &:hover{
    transform: scale(1.05, 1.05);
    background: ${props.hoverBackground};
    color: ${props.hoverColor};
  }
  `

  return(
    <>
      <CustomButton>
        {props.title}
      </CustomButton>
    </>

  )
}

export  default Button;





