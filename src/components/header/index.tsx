import React from 'react';
import {Container,ChildContainer as Child} from './Header.styles';
import Image from 'next/image';
import Logo from '../../assets/images/logo.png';
import Button from 'components/button';
import Constants  from 'international/pt-pt/constants.json';
import Link from 'next/link';
import {ButtonType} from 'myButton';


const Header : React.FC =()=>{

  return(
    <Container>
      <Child>
        <Image height="60px" width="60px" src={Logo} alt="logo" />
        <span>Apoios</span>
        <span>FQA</span>
        <span>Nossa Equipe</span>
      </Child>
      <Button>SEJA UM APOIADOR</Button>
    </Container>
  )
}

export default Header;
