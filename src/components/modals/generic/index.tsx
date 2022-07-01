import { X } from 'phosphor-react';
import { FC, useImperativeHandle, forwardRef, useState, useCallback, } from 'react';
import { Container,ContentContainer as Child, Row,CloseBtn} from './modal.styles';

const typeModal ={
  ask : 'askModal',
  choose : 'chooseModal',
  information : 'infModal'
}
const Modal: FC <{isOpen:boolean}> = ({children,isOpen}) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [targetModal,setTargetModal] = useState(typeModal.ask);

 if(showModal)
  return (
    <Container>
      <Child>
        <Row/>
        <CloseBtn onClick={() =>setShowModal(false)}>
          <X size={16} />
        </CloseBtn>
      </Child>
    </Container>
  )

  return null

}

export default Modal;
