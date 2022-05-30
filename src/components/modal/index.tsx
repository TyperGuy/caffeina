// @ts-nocheck
import { FC, useImperativeHandle, forwardRef, useState, useCallback, } from 'react';

import { Container, Content, Title, Description, Button, Span } from './modal.styles';
import Image from 'next/image';
import img from '../../../public/cookie.svg';

const Modal: FC<{ modalRef: any }> = ({ modalRef }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = useCallback((show: boolean) => setShowModal(show), [])

  useImperativeHandle(modalRef, () => ({
    handleShow,
  }))

  if(showModal) {
    return (
      <Container>
        <Content>
          <div style={{marginTop:-65}}>
             <Image  height={90} width={120} src="/cookie.svg"/>
          </div>
          <Description>
            Nós nos importamos com a sua privacidade, e gostariamos usar cookies para melhorar a sua experiência.
          </Description>

          <div style={{width:'80%',display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem'}}>
            <Span>Ver privacidade</Span>
            <Button onClick={() => handleShow(false)}>Aceitar</Button>
          </div>
        </Content>
      </Container>
    )
  }

  return <></>

}

export default forwardRef(Modal);
