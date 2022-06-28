// @ts-nocheck
import { FC} from 'react';
import {Section,Content, Title, Description, Button, Span,Linker } from './modal.styles';
import Toogle from '../../../toogleButton';


const Settings: FC <{setWantToChoose:boolean}> = ({setWantToChoose}) => {

    return (
        <Content>
          <div style={{width:'80%',marginTop:'10px',display:'flex',gap:10,alignItems:'center'}}>
             <img style={{height:'46px', width:'60px'}} src="/cookie.svg"/>
             <Title>Definição de Cookies</Title>
          </div>
          <Section>
            <Description>
              Nós nos importamos com a sua privacidade, e precisamos usar
              <Linker> políticas de cookies </Linker> para melhorar a sua
              experiência.
            </Description>
          </Section>
          <div
            style={{
              width:'100%',
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              margin:'16px 0',
              padding:'16px 0',
              borderTop: '1px solid #ccc',
              borderBottom: '1px solid #ccc'
            }}>
            <Section>
              <p>Alguma coisa</p>
              <Toogle enable={true}/>
            </Section>
            <Section>
              <p>Alguma coisa</p>
              <Toogle enable={true}/>
            </Section>
            <Section>
              <p>Alguma coisa</p>
              <Toogle enable={true}/>
            </Section>
          </div>
          <div style={{width:'80%',display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem'}}>
            <Span
              onClick={() => setWantToChoose(false)
              }>
                Quero voltar
              </Span>
            <Button onClick={() => handleShow(false)}>Terminar</Button>
          </div>
        </Content>
    )


}

export default Settings;
