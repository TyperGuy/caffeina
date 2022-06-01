import {FC} from 'react'
import {Container, Content, Underlined} from './Calltoaction.styles';
import {ButtonType} from 'myButton';
import PlayButton from 'components/play-button/Play';
import Form from 'components/speaker-form/Form';
const Props : ButtonType = {
  color: "#222",
  hoverColor:"#222",
  background: "#FFC32B",
  hoverBackground:"#FFC32B",
  title : "Seja Palestrante"
}

const Calltoaction: FC = () => {
    return (
      <Container>
        <div style={{display: 'flex', flexDirection:'column', gap:'2rem',maxWidth:"500px"}}>
          <Content>Ouvimos de quem melhor sabe dizer onde está o <Underlined> Sucesso</Underlined></Content>
          <PlayButton/>
        </div>
        <Form/>
      </Container>
    )


}

export default Calltoaction;
