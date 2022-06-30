// @ts-nocheck
import { FC} from 'react';
import {Section,Content, Title, Description, Button, Span,Linker } from './modal.styles';
import Toogle from '../../../toogleButton';


const Settings: React.FC <{setShowModal:(showModal:boolean) => void,setTargetModal:(status:string)=>void}> = ({setTargetModal,setShowModal})=> {

    return (
        <Content>
          <div style={{width:'80%',marginTop:'10px',display:'flex',gap:10,alignItems:'center'}}>
             <Title>Porquê usamos Cookies ?</Title>
          </div>
          <div
          style={{
              width:'100%',
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              borderTop: '1px solid #ccc',
              borderBottom: '1px solid #ccc'
            }}>
              <p
              style={{
                width:'80%',
                textAlign: 'justify'
              }}>
              Os cookies são uma parte essencial da Internet. Sem eles,
              as páginas da web seriam muito menos úteis e interativas. O comércio
               eletrônico seria impossível. Eles dão aos sites a capacidade de lembrar
               e melhorar. Nós usamos cookies para que a experiência de nossos usuários
               seja muito boa. Os cookies nos ajudam a fornecer informações úteis e
               úteis para nossos usuários.
              </p>
          </div>
          <div style={{width:'80%',display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem'}}>
            <Span
              onClick={() => setTargetModal('askModal')
              }>
                Quero voltar
              </Span>
            <Button onClick={() => setShowModal(false)}>Aceitar todos</Button>
          </div>
        </Content>
    )


}

export default Settings;
