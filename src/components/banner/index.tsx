import Button from 'components/button';
import Constants from 'international/pt-pt/constants.json';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import { A, ChildContainer as Child, Container, Stats } from './Banner.styles';
import Modal from '../modals/right-side';



const Styles = {
  title:{
    fontSize: 56,
    fontWeigth:600,
    color : '#222'
  },
  content:{
    fontSize: 20,
    opacity: 0.7,
    color : '#222'
  }
}



const Banner : React.FC =()=>{
  return(
    <Container>
      <Child>
        <Stats>
          <div>
            <div style={Styles.title}>US$ 309 bi</div>
            <div style={Styles.content}>Em receitas feitas com palestras</div>
          </div>
          <div>
            <div style={Styles.title}>100+</div>
            <div style={Styles.content}>Países atendidos</div>
          </div>
          <div>
            <div style={Styles.title}>98M+</div>
            <div style={Styles.content}>Clientes verificados</div>
          </div>
        </Stats>
      </Child>
    </Container>
  )
}

export default Banner;
