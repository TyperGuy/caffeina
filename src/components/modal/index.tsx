// @ts-nocheck
import { FC, useImperativeHandle, forwardRef, useState, useCallback, } from 'react';
import { Container, Content, Title, Description, Button, Span,Linker } from './modal.styles';


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
          <div style={{width:'80%',display:'flex',gap:10,alignItems:'center'}}>
             <img style={{height:'46px', width:'60px'}} src="/cookie.svg"/>
             <Title>Usamos Cookies</Title>
          </div>
          <Description>
            Nós nos importamos com a sua privacidade, e precisamos usar <Linker>políticas de cookies</Linker> para melhorar a sua experiência.
          </Description>

          <div style={{width:'80%',display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem'}}>
            <Span>Ver políticas</Span>
            <Button onClick={() => handleShow(false)}>Aceitar</Button>
          </div>
        </Content>
      </Container>
    )
  }

  return <></>

}

export default forwardRef(Modal);
