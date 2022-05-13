import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import {Image} from "../assets/Assets";
import City from './Cities';


 class ServicesOffer extends Component {
     state = {
         showMoreCities : false
     }
     Cities = [
        {
        buttonText: 'Lahore',
        image:Image.ship
       },
       {
        buttonText: 'Karachi',
        image:Image.ship
       },
       {
        buttonText: 'Islamabad',
        image:Image.ship
       },
       
]   
showCitiesList = () => {
           this.setState((prevState , prevProps) => {
               return{ showMoreCities: !prevState.showMoreCities}  
           })
          
       }
     CitiesList = this.Cities.map((item , pos) => {
        // console.log(item);
        return(
            <City image={item.image} buttonText={item.buttonText} key={pos}/>
        )
    })
    render(){
        return(
            <div className="services-offer section-padding">
            <div className="top-left-content ">
              <h2 className="bold">Featured Cities</h2>
              <p className="me-auto grey medium-container text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="row">
            {this.Cities.map((item,key) => <City image={item.image} buttonText={item.buttonText} />)}
                {this.state.showMoreCities ? this.CitiesList : null}
            </div>
            <div className="row">
                <div className="col-12 custom-flex-end">
                    <button className="custom-btn blue big-btn" onClick={this.showCitiesList}>{this.state.showMoreCities ? "Show Less" : "Show More"}</button>
                </div>
            </div>
          </div>
        )
    }
    
}
export default ServicesOffer;
