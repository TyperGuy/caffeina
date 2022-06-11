import {FC} from 'react';
import {Container, Content, Underlined,Image} from './Calltoaction.styles';
import Button from '../../components/button';
import PlayButton from '../../components/button/PlayButton';
import { PlayCircle } from 'phosphor-react';


const Calltoaction: FC = () => {
    return (
      <Container>
        <div style={{display: 'flex', flexDirection:'column', gap:'2rem'}}>
          <Content>Ouvimos de quem melhor sabe dizer onde está o <Underlined> Sucesso</Underlined></Content>
          <div 
            style={{
              display: 'flex',
              gap: '1rem'
            }}
          >
            <Button>QUERO SER PALESTRANTE</Button>
            <PlayButton>
              <PlayCircle size={32} weight="fill" />
              QUERO SER
            </PlayButton>
      
          </div>
        </div>
        <Image src="_BLM_PROTESTS.svg" alt="Protest" />
      </Container>
    )
}

export default Calltoaction;
