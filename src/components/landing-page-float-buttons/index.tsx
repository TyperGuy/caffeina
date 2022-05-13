import { FC } from 'react';
import { Container } from './landing-page-float-buttons.styles'
import {BsFillArrowUpCircleFill as Arrow} from 'react-icons/bs';

export const FloatingButton: FC = () => {
  const sendToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return(
    <Container >
          <Arrow
            className="top"
            onClick={() => sendToTop()}
          />
    </Container>
  )
}

export default FloatingButton;
