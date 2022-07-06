import Button from 'components/button';
import Constants from 'international/pt-pt/constants.json';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import { A, ChildContainer as Child, Container } from './Banner.styles';
import Modal from '../modals/right-side';



const Banner : React.FC =()=>{
  const [active, setActive]  = useState('');
  const [isOpen,setIsOpen] =useState(false);
  return(
    <Container>
      <Child>
      </Child>
    </Container>
  )
}

export default Banner;
