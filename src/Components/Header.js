import React from 'react';
import logoimg from '../assets/images/logo.png';

const Header = () => {
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
                        <a href="" className="underline-link-blk active"  data-bs-toggle="modal" data-bs-target="#become-host-modal"><span>Earn with us</span></a>
                        <a href="" className="underline-link-blk" data-bs-toggle="modal" data-bs-target="#signup-modal"><span>Sign-up/Sign-in</span></a>
                        <a href="" className="underline-link-blk"><span>Help</span></a>

                    </div>
                    </div>
                </div>
                </div>
            </header>
        </>
    )
}
export default Header;
