import {FC} from 'react'
import img from '../../assets/images/girls.jpg';
import Image from 'next/image';
import {Container, Content, Underlined} from './Calltoaction.styles';
import Button from '../../components/button/Button';
import {ButtonType} from 'myButton';
import { Horse, Heart, Cube } from "phosphor-react";

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
          <Button {...Props}/>
        </div>
        <Image width={500} height={350} src={img}/>
        <Horse/>
      </Container>
    )


}

export default Calltoaction;
