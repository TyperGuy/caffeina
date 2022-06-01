import { FC } from 'react';
import { Container } from './landing-page-float-buttons.styles'
import {ArrowUp} from 'phosphor-react';

export const FloatingButton: FC = () => {
  const sendToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return(
    <Container >
      <ArrowUp
       className='top'
       onClick={()=>sendToTop()}
       size={20}
      />
    </Container>
  )
}

export default FloatingButton;
