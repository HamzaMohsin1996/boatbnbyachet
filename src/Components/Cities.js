import React from 'react';

const Cities =  ({image,buttonText}) => {
    return(
         <div className="col-sm-4 col-xs-12 py-2">
            <a href="#/" className="big-img-link text-left">
                <img src={image} alt="" /><span className="underline-link-blk">{buttonText}</span> </a>
          </div>
    )
}
export default Cities;