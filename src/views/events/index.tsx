
import {Container,ChildContainer,CardContainer,Slider} from './Events.styles';
import { ArrowUpRight } from 'phosphor-react';
import Card from '../../components/meetupcard';


const Events : React.FC =()=>{

  return(
    <Container>
      <ChildContainer>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 400
          }}>
          <h1>Eventos futuros</h1>
          <span style={{marginTop:-16}}>
          Aqui oportunidade de falar é dada para aqueles
          que são um caso de sucesso e que tenham algo a
          agregar aos outros
          </span>
        </div>
        <Slider>
          <CardContainer>
            <Card/>
            <Card/>
            <Card/>
          </CardContainer>
        </Slider>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap:'.3rem',
            color:'#2b79b4',
            marginBottom:40
          }}>
          <span>Ver mais</span>
          <ArrowUpRight size={18}/>
        </div>
      </ChildContainer>

    </Container>
  )
}

export default Events;
