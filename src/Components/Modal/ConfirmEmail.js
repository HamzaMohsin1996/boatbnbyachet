import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import email from '../../assets/images/email.png';

const ConfirmEmail = (props) => {
    const { handleEmailShow, handleEmailClose } = props;
    return(
        <Modal
        show={handleEmailShow}
        onHide={handleEmailClose}
        open={handleEmailShow}
        onClose={handleEmailClose}
        backdrop="static"
        keyboard={false}
        centered='true'
        size='md'
        className="custom-modal "
      >
        <div class="modal-content">
      <div class="modal-header no-border">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" closeBtn><i class="fa fa-times"></i></button>
      </div>
      <div class="modal-body">
        <div class="custom-text-center">
          <h4 class="bold">Confirm email address</h4>
          <p class="py-2">To verify your email, we've sent you a confirmation link. Click on that link to verify your account.</p>
          <div class="img-wrapper">
            <img src={email} alt="" />
          </div>
          <div class="bottom-btn">
            <button class="custom-btn blue big-btn" data-bs-toggle="modal" data-bs-target="#login-modal" data-bs-dismiss="modal">Login</button>
          </div>
        </div>
      </div>
     
    </div>
      </Modal>
    )
}

export default ConfirmEmail;