
import {Container,ChildContainer,CardContainer,Slider} from './Events.styles';
import {ChatTeardropDots} from 'phosphor-react'


const Events : React.FC =()=>{

  return(
    <Container>
      <ChildContainer>
        <h1>Eventos futuros</h1>
        <Slider>
          
          <CardContainer>

          </CardContainer>
        </Slider>
      </ChildContainer>
      
    </Container>
  )
}
  
export default Events;
