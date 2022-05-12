import React from 'react';

const OfferServices = (props) => {
    return (
        <>
      <div class="col-sm-4 col-xs-12 py-2"> 
         <div class="bg-image-wrap small-img bottom-center-btn" style={{backgroundImage: `url(${props.ServiceImg})`}}>
              <div class="custom-flex-start h-100 ">
                <a href="" class="custom-btn white">{props.ButtonText}</a>
              </div>
         </div>
     </div>
        </>
    )
}

export default OfferServices;