import React from 'react';
import {Container,Btn,ChildContainer as Child,a as A} from './Header.styles';
import Image from 'next/image';
import Logo from '../../assets/images/logo.png';
import Button from 'components/button/Button';
import Constants  from 'international/pt-pt/constants.json';
import Link from 'next/link';
import {ButtonType} from 'myButton';

const Props : ButtonType = {
  color: "#FFF",
  hoverColor:"#FFF",
  background: "#222",
  hoverBackground:"#222",
  title : Constants.buttons.signup
}


const Header : React.FC =()=>{

  return(
    <Container>
      <Child>
        <Image height="60px" width="60px" src={Logo} alt="logo" />
        <span>Apoios</span>
        <span>FQA</span>
        <span>Nossa Equipe</span>
      </Child>
      <Button {...Props}/>
    </Container>
  )
}

export default Header;
