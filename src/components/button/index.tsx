import {CustomButton } from './Button.style';
import {ButtonType} from 'myButton';


const Props : ButtonType={
  color: '#fff',
  hoverColor:'black',
  background: '#222',
  hoverBackground: '#FFC32B',
  title: 'SomeThing'
}


const Button : React.FC=({children})=> {

  return(
    <CustomButton {...Props}>
      {children}
    </CustomButton>
  )
}

export  default Button;





