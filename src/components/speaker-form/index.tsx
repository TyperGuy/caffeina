import React, { useState } from 'react';
import {Container,Input,Textarea,Button} from './Form.styles';
import {ButtonType} from 'myButton';

const Props : ButtonType = {
  color: "#FFF",
  hoverColor:"#FFF",
  background: "#222",
  hoverBackground:"#222",
  title : 'SEJA MEMBRO'
}


const Form : React.FC =()=>{

  const [chars,setChars] = useState(0);
  const controlChars = (chars:number) =>{
    if(chars<=300)
      setChars(chars)
    else
      console.log("está lá")
       
  }

  return(
    <Container>
        <h2 style={{alignSelf:'start',marginTop:50}}>Vem fazer parte!</h2>
        <div style={{marginTop:-12}}>
          Que tal fazer parte da nossa comunidade?
          Gostaríamos muito que cá estivesses 😍
        </div>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        width:'100%', height:'100%',
        margin:20,
        gap:'1.5rem',
        boxSizing: 'border-box'
        }}
        action=""
      >
        <Input type="text" placeholder='Nome Completo' />
        <Input type="text" placeholder='Email' />
        <Textarea
         placeholder="Sobre ti..."
         name="" id=""
         cols={30}
         rows={7}
         maxLength={300}
         onChange={(e)=>controlChars(e.target.value.length)}
         />
        <span 
          style={{
              alignSelf:'end',
              marginTop:'-21px',
              fontSize:'.8rem'
          }}>
            {chars + '/300'}
        </span>
        <Button>Enviar</Button>
      </form>
    </Container>
  )
}

export default Form;
