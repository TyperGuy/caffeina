// @ts-nocheck
import { FC, useImperativeHandle, forwardRef, useState, useCallback, } from 'react';
import { Container} from './modal.styles';
import Settings from './settings';
import Dialog from './dialog';
import Reasons from './reasons';


const typeModal ={
  ask : 'askModal',
  choose : 'chooseModal',
  information : 'infModal'
}
const Modal: FC<{ modalRef: any }> = ({ modalRef }) => {
  const [showModal, setShowModal] = useState(false);
  const [targetModal,setTargetModal] = useState(typeModal.ask);

  const handleShow = useCallback((show: boolean) => setShowModal(show), [])

  useImperativeHandle(modalRef, () => ({
    handleShow,
  }))

  if(showModal) {
    return (
      <Container>
        {
          (targetModal===typeModal.ask) &&
          <Dialog setTargetModal={setTargetModal}/>
        }
        {
          (targetModal===typeModal.information) &&
          <Reasons setTargetModal={setTargetModal}/>
        }
        {
          (targetModal===typeModal.choose) &&
          <Settings setTargetModal={setTargetModal}/>
        }
      </Container>
    )
  }

  return <></>

}

export default forwardRef(Modal);
