import React from 'react'
import './Banner.css';
//import HomeBanner from "../images/banner.jpg";
const Banner = () => {
    return (
        <div className="Banner__container">
        {/* <img src={HomeBanner} alt="Banner" /> */}
          <div className="Banner">
             <img src="assets/images/banner.jpg" alt="Banner" className="HomeBanner" /> 
          </div>
          <div className="Categories__available">
              <div className="Categories__title">
                  <h2>All categories</h2>
              </div>
          <div className="Actual__categories">
             <h4 className="Categories__inStock">Cars</h4>    
             <h4 className="Categories__inStock">Mobiles</h4>   
             <h4 className="Categories__inStock">Gaming</h4> 
          </div>              
          </div> 
        </div>
    );
};

export default Banner
