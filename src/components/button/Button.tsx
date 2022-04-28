import React from 'react';
import CustomButton from './Button.styles';

const Button : React.FC<{title:string}> =(props)=>{

  return(
    <>
      <CustomButton>
        {props.title}
      </CustomButton>
    </>

  )
}

export  default Button;





