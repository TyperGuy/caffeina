// @ts-nocheck
import { FC, useImperativeHandle, forwardRef, useState, useCallback, } from 'react';

import { Container, Content, Image, Title, Description, Button, Span } from './modal.styles';

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
          <Image src="/cookie.png"/>
          <Title>Este site usa cookies :)</Title>

          <Description>
          Armazenamos dados temporariamente para melhorar sua experiência de navegação e recomendar conteúdo de seu interesse.
          </Description>

          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
            <Button onClick={() => handleShow(false)}>Aceitar</Button>
            <Span>Declinar</Span>
          </div>
        </Content>
      </Container>
    )
  }

  return <></>

}

export default forwardRef(Modal);
