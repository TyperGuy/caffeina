import { FC, useState } from 'react';
import { AcordionContainer } from './acordion.style';
import {BsChevronDown as Arrow} from 'react-icons/bs';


const Style ={
  fontSize:'1.4rem',
  fontWeight:'bold'
}

export type QuestionType = {
  question: string,
  answer:string,
  id:number,
};

const Acordion: FC <QuestionType> = ({...props}) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.id===1?true:false);
  return(
    <>
      <AcordionContainer>
       <div style={{
         display:'flex',
         justifyContent:'space-between',
         alignItems:'center',
         width:'100%',
         cursor: 'pointer'
        }}
        onClick={() =>setIsOpen(!isOpen)}
        >
          <span style={Style}>{props.question}</span>
          <Arrow
           style={{
            transition: 'all 0.2s ease-in-out',
            transform: isOpen ? `rotateX(180deg)` : 'rotateY(-180deg)'
           }}
           size='1em'/>
       </div>
       { isOpen&&
        <div style={{
          width:'90%'
          }}>
            <p
             style={{
              fontSize:'1.2em'
              }}
            >
              {props.answer}
            </p>
        </div>
       }
       <div style={{
        content: '',
        width: '100%',
        height: '1px',
        marginTop: '1rem',
        transition: 'all 0.5s ease-in-out',
        backgroundColor: isOpen ? '#F34747' : '#ccc'
        }}>
        </div>
      </AcordionContainer>
    </>
  )
}

export default Acordion
