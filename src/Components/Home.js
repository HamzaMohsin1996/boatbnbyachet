import React from 'react';
// import bannerimg from '../assets/images/banner-img.png';
import Banner from './Banner';
import YourBoat from './YourBoat';
import Services from './Services';
import Offers from './Offers';
import ServicesOffer from './ServicesOffer';
import BlogPosts from './BlogPost';




const Home = () => {
    return(
        <>
          <Banner />
          <div className="container">
              <YourBoat />
              <Services />
              <Offers />
              <ServicesOffer />   
              <BlogPosts />       
        </div>
        </>
    )
}
export default Home;
