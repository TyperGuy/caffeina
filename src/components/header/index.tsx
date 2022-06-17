import Button from 'components/button';
import Constants from 'international/pt-pt/constants.json';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import { ChildContainer as Child, Container, Item } from './Header.styles';


const Header : React.FC =()=>{
  const [active, setActive]  = useState('');
  return(
    <Container>
      <Child>
        <Image height="60px" width="60px" src={Logo} alt="logo" />
        {
          Constants.menu.map(menu =>
            <Item
             key={menu.id}
             onClick={() =>setActive(menu.title)}
             isActive={active===menu.title}>
              {menu.title}
            </Item>
          )
        }
      </Child>
      <Button>SEJA UM APOIADOR</Button>
    </Container>
  )
}

export default Header;
