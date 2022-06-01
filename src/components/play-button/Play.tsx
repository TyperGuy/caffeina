import React from 'react';
import styled, { keyframes } from "styled-components";
import { Play } from 'phosphor-react';

const PlayButton : React.FC =()=> {

  const pulse = keyframes`
    to {box-shadow: 0 0 0 20px rgba(232, 76, 61, 0);}
  `

  const CustomButton = styled.button`
  height: 55px;
  width: 55px;
  display: grid;
  place-items: center;
  border: none;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(232, 76, 61, 0.7);
  background: rgba(0,0,0,0) linear-gradient(to right,#cc3333,#cc00ff);
  -webkit-animation: ${pulse} 1.5s infinite;
  `



  return(
      <CustomButton>
        <Play size={32} weight="fill" color='#fff'/>
      </CustomButton>

  )
}

export  default PlayButton;





