import React , {Component} from 'react';
import OfferServices  from './OfferServices';
import {Image} from "../assets/Assets";
import { render } from 'sass';

class Services extends Component {

  state = {
    showMoreServices : false
  }
   OfferedServices = [
    {
    OfferImg :Image.Serviceimg,
    ButtonText : "Boatel"
  },
  {
    OfferImg :Image.ship,
    ButtonText : "Charter"
  },
  {
    OfferImg :Image.Event,
    ButtonText : "Event"
  },
]
    onButotonClick = () => {
      // let UpdatedState = !this.state.showMoreServices;
      this.setState((prevState , prevProps) => {
        return{showMoreServices: prevState.showMoreServices} 
      })
    
     }
   

      showMoreServicesList= this.OfferedServices.map((item,key)=>  {
        return(
        
          <OfferServices ServiceImg ={item.OfferImg} ButtonText ={item.ButtonText}/>
          
        )
     })
    
     render(){
       return(
        <div className="services-offer section-padding">
        <div className="top-center-content">
          <h2 className="bold">Services we offer</h2>
          <p className="grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.</p>
        </div>
        <div className="row">
        {this.OfferedServices.map((item,key)=> <OfferServices ServiceImg ={item.OfferImg} ButtonText ={item.ButtonText}/>)}
        <div className="col-12">
          <div className="row">
          {this.state.showMoreServices ? this.showMoreServicesList :null}
            </div>
        </div>
        <div className="col-12 my-4">
          <div className="custom-flex-end">
            <button className="custom-btn blue big-btn" onClick={this.onButotonClick}><span>{this.state.showMoreServices ? "Show Less" : "Show More" }</span></button>
          </div>
        </div>
       
        </div>
      </div>
       );
}
}
export default Services;
