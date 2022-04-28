import {FC} from 'react'
import img from '../../assets/images/feature-1@2x.webp';
import Image from 'next/image';
import {Container, Content, Underlined} from './Calltoaction.styles';
import Button from '../../components/button/Button';

const Calltoaction: FC = () => {
    return (
      <Container>
        <div>
          <Content>Ouvimos de quem melhor sabe dizer onde está o <Underlined> Sucesso</Underlined></Content>
          <Button title={"Tenho algo incrivel para contar"}/>
        </div>
        <Image width={651} height={513} src={img}/>
      </Container>
    )


}

export default Calltoaction;
