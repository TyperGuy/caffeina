import { useState } from 'react';
import {Container} from './Toogle.styles';



const Button : React.FC <{enable: boolean}> = ({enable})=> {
  const [enabled,setEnabled] = useState(false);
  return(
    <Container
     onClick={() =>setEnabled(!enabled)}
     enable={enabled}>
      <div
        style={{
        width: '15px',
        height: '15px',
        position:'absolute',
        borderRadius: '50%',
        backgroundColor: enabled? '#FFC32B':'#fff',
        transform: enabled? 'translateX(22px)':'translateX(2px)',
        transition: 'all 0.3s ease-in-out'
      }}></div>
    </Container>
  )
}

export  default Button;





