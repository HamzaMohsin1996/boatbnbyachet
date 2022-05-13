import React,{useState} from 'react';
import logoimg from '../assets/images/logo.png';
import SignupModal from '../Components/Modal/SignupModal';


const Header = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
          <header>
                <div className="header-top-bar">
                <div className="header-bg-blue bg-blue white-text">
                    <p className="small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun
                    </p>
                </div>
                <div className="header-grey-clr grey-clr">
                    <p className="small-text">laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </div>
                <div className="header-wrap">
                <div className="container">
                    <div className="custom-flex-between">
                    <div className="left-content">
                        <div className="logo-wrapper">
                        <a href="home.html" className="logo-btn"><img src={logoimg} alt=""/></a>
                        </div>
                    </div>
                    <div className="right-content">
                        <button className="underline-link-blk active" ><span>Earn with us</span></button>
                        <button className="underline-link-blk"  onClick={handleShow}><span>Sign-up/Sign-in</span></button>
                        <a href="" className="underline-link-blk"><span>Help</span></a>

                    </div>
                    </div>
                </div>
                </div>
            </header>
            <SignupModal handleShow={show} handleClose={handleClose}/>
        </>
    )
}
export default Header;

