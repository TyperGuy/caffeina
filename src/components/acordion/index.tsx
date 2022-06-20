import { FC, useState } from 'react';
import { AcordionContainer } from './acordion.style';
import {MdOutlineKeyboardArrowDown as Arrow} from 'react-icons/md';


const Style ={
  fontSize:'1.4rem',
  fontWeight:'bold'
}

const Acordion: FC = () => {
  const [isActive, setIsActive] = useState<number>();
  return(
    <>
      <AcordionContainer>
       <div style={{
         display:'flex',
         justifyContent:'space-between',
         alignItems:'center',
         width:'100%'
        }}>
          <span style={Style}>{'Aqui vai o titulo'}</span>
          <Arrow size='2em'/>
       </div>
      </AcordionContainer>
    </>
  )
}

export default Acordion
