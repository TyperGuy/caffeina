import FQA from 'components/fqa';
import React from 'react';
import {Container,ChildContainer} from './Events.styles';



const Events : React.FC =()=>{

  return(
    <Container>
      <ChildContainer>
        <h1>Eventos futuros</h1>
      </ChildContainer>

      <FQA/>
    </Container>
  )
}

export default Events;
