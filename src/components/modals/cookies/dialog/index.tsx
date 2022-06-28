// @ts-nocheck
import {Content, Title, Description, Button, Span,Linker } from './modal.styles';

const Dialog : FC <{setWantToChoose:boolean}> = ({setWantToChoose}) =>{

  return (
      <Content>
        <div style={{width:'80%',display:'flex',gap:10,alignItems:'center'}}>
           <img style={{height:'46px', width:'60px'}} src="/cookie.svg"/>
           <Title>Usamos Cookies</Title>
        </div>
        <Description>
          Nós nos importamos com a sua privacidade, e precisamos usar <Linker>políticas de cookies</Linker> para melhorar a sua experiência.
        </Description>

        <div style={{width:'80%',display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem'}}>
          <Span
          onClick={() => setWantToChoose(true)
          }>
            Me deixa escolher
          </Span>
          <Button onClick={() => handleShow(false)}>Aceitar</Button>
        </div>
      </Content>
  )

}

export default Dialog;
