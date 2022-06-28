// @ts-nocheck
import { FC, useImperativeHandle, forwardRef, useState, useCallback, } from 'react';
import { Container} from './modal.styles';
import Settings from './settings';
import Dialog from './dialog';
import Reasons from './reasons';


const Modal: FC<{ modalRef: any }> = ({ modalRef }) => {
  const [showModal, setShowModal] = useState(false);
  const [wantToChoose,setWantToChoose] = useState(false)

  const handleShow = useCallback((show: boolean) => setShowModal(show), [])

  useImperativeHandle(modalRef, () => ({
    handleShow,
  }))

  if(showModal) {
    return (
      <Container>
        {
          wantToChoose?
          <Settings setWantToChoose={setWantToChoose}/>:
          <Reasons setWantToChoose={setWantToChoose}/>
        }

      </Container>
    )
  }

  return <></>

}

export default forwardRef(Modal);
