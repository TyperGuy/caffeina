import React from 'react';
import {Container} from './Form.styles';
import {ButtonType} from 'myButton';

const Props : ButtonType = {
  color: "#FFF",
  hoverColor:"#FFF",
  background: "#222",
  hoverBackground:"#222",
  title : 'SEJA MEMBRO'
}


const Form : React.FC =()=>{

  return(
    <Container>
      <form action="">
        <p>
          No credit card needed, 15-days free.
          This trial gives you all features from the
        </p>
        <input type="text" placeholder='alguma coisa' />
        <textarea name="" id="" cols={30} rows={10}></textarea>
      </form>
    </Container>
  )
}

export default Form;
