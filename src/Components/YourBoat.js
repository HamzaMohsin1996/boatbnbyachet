import React from 'react';
import Boatimg from '../assets/images/bg-boat.png';


const YouBoat = () => {
return(
    <div class="your-boat section-padding">
<div class="bg-image-wrap no-hover" style={{backgroundImage: `url('${Boatimg}')`}}>
  <div class="custom-flex-start white-text h-100">
    <h2 class="bold">Earn on your boat</h2>
    <p>Become a host and start earning on your boat.</p>
    <a href="javascript:void(0)" class="custom-btn white">Learn More</a>
  </div>
</div>
</div>
)
}

export default YouBoat;