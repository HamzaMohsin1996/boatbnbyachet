import React,{useState} from 'react';
import CustomModal from 'react-bootstrap/Modal';

const AppModal = (props) => {
    const { handleShow, handleClose } = props;

    const [show, setShow] = useState(false);
  
    // const handleEmailClose = () => setShow(false);
    const handleEmailShow = () => {
        setShow(true);
        handleClose(true);
    }
    return(
        <CustomModal
        show={handleShow}
        onHide={handleClose}
        open={handleShow}
        onClose={handleClose}
        backdrop="static"
        keyboard={false}
        centered='true'
        size='xl'
        className="custom-modal custom-large-modal"
      >
          {props.children}
          </CustomModal>
        
    )
}
export default AppModal;
