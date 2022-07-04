import Button from 'components/button';
import Constants from 'international/pt-pt/constants.json';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png';
import { A, ChildContainer as Child, Container, Item, Mylink } from './Header.styles';
import Modal from '../modals/right-side';



const Header : React.FC =()=>{
  const [active, setActive]  = useState('');
  const [isOpen,setIsOpen] =useState(false);
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
      <Button
       onClick={setIsOpen}>
         SEJA UM APOIADOR
      </Button>
      <Modal setShowModal={setIsOpen} isOpen={isOpen}>
      </Modal>
    </Container>
  )
}

export default Header;
