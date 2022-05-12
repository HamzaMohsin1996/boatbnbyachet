import React from 'react'; 

const FooterLink = (props) => {
    return (
        <ul class="footer-links">
        <li><a href="#/" class="underline-link-blk">{props.name}</a></li>
        </ul>
      
       

    )
}

export default FooterLink;