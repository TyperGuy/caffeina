import {CustomButton } from './Button.style';
import {ButtonType} from 'myButton';


const Button : React.FC <{onClick:ButtonType}> =({children,onClick})=> {

  return(
    <CustomButton onClick={()=>onClick}>
      {children}
    </CustomButton>
  )
}

export  default Button;





