import {FC, useState} from 'react';
import dynamic from 'next/dynamic';
import {Container, Content, Underlined,Image} from './Calltoaction.styles';
import Button from '../../components/button';
import PlayButton from '../../components/button/PlayButton';
import { PlayCircle } from 'phosphor-react';
import Modal from '../../components/modals/generic';
import Form from 'components/speaker-form';


const VideoWithNoSSR = dynamic(
  () => import('../../components/video'),
  { ssr: false }
)


const Calltoaction: FC = () => {

    const [isOpen,setIsOpen] =useState(false);
    const [isOpenVideo,setIsOpenVideo] =useState(false);
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
            <Button
              onClick={setIsOpen}>
              QUERO SER PALESTRANTE
            </Button>
            <PlayButton
              onClick={setIsOpenVideo}>
              <PlayCircle size={32} weight="fill" />
                QUERO SER
            </PlayButton>
          </div>
        </div>
        <Image src="protest.png" alt="Protest" />
        <Modal setShowModal={setIsOpen} isOpen={isOpen}>
          <Form/>
        </Modal>
        <Modal setShowModal={setIsOpenVideo} isOpen={isOpenVideo}>
          < VideoWithNoSSR/>
        </Modal>
      </Container>
    )
}

export default Calltoaction;
