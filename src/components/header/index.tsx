import Button from 'components/button';
import Constants from 'international/pt-pt/constants.json';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import { A, ChildContainer as Child, Container, Item, Mylink } from './Header.styles';
import { useRouter } from 'next/router'



const Header : React.FC =()=>{
  const [active, setActive]  = useState('');
  const router = useRouter();
  return(
    <Container>
      <Child>
        <Mylink href='/'>
          <A>
            <Image onClick={()=>setActive('')} height="60px" width="60px" src={Logo} alt="logo" />
          </A>
        </Mylink>
        
        
        <div 
          style={
            {
              display:'flex',
              height: '95%'
            }
          }>
          {
            Constants.menu.map(menu =>
              <Mylink href={menu.id}>
                <A>
                  <Item
                    key={menu.id}
                    onClick={() =>setActive(menu.title)}
                    isActive={active===menu.title
                  }>
                    {menu.title}
                  </Item>
                </A>
              </Mylink>
            )
          }
        </div>
      </Child>
      <Button>SEJA UM APOIADOR</Button>
    </Container>
  )
}

export default Header;
