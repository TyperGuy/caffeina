import { ButtonType } from 'myButton';
import {PlayButton } from './Button.style';

const Button : React.FC<{onClick:(isOpen:boolean)=>void}> =({children,onClick})=>  {

  return(
    <PlayButton onClick={()=>onClick(true)}>
      {children}
    </PlayButton>
  )
}

export  default Button;





