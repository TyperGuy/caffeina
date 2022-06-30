
import {Content, Title, Description, Button, Span,Linker } from './modal.styles';

const Dialog : React.FC <{setShowModal:(showModal:boolean) => void,setTargetModal:(status:string)=>void}> = ({setTargetModal,setShowModal}) =>{

  return (
      <Content>
        <div style={{width:'80%',display:'flex',gap:10,alignItems:'center'}}>
           <img style={{height:'46px', width:'65px'}} src="/cookie.svg"/>
           <Title>Usamos Cookies</Title>
        </div>
        <Description>
          Nós nos importamos com a sua privacidade, e precisamos usar
          <Linker onClick={() => setTargetModal('infModal')}> políticas de cookies </Linker>
          para melhorar a sua experiência.
        </Description>

        <div style={{width:'80%',display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem'}}>
          <Span
          onClick={() => setTargetModal('chooseModal')
          }>
            Me deixa escolher
          </Span>
          <Button onClick={() => setShowModal(false)}>Aceitar</Button>
        </div>
      </Content>
  )

}

export default Dialog;
