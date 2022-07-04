import {CustomButton } from './Button.style';


const Button : React.FC<{onClick:(isOpen:boolean)=>void}> =({children,onClick})=> {

  return(
    <CustomButton onClick={()=>onClick(true)}>
      {children}
    </CustomButton>
  )
}

export  default Button;





