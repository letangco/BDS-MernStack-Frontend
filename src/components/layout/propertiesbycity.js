import React from 'react';

import ImgOverLay1 from '../../img/overlay/1.png';
import ImgOverLay2 from '../../img/overlay/2.png';
import ImgOverLay3 from '../../img/overlay/3.png';
import ImgOverLay4 from '../../img/overlay/4.png';


function PropertiesByCity() {
  return (
    <section className="section-padding bg-white">
      <div className="section-title text-center mb-5">
        <h2>Property By City</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="card bg-dark text-white card-overlay">
              <a href="/">
                <img className="card-img" src={ImgOverLay1} alt="Card_image" />
                <div className="card-img-overlay">
                  <h3 className="card-title text-white">New York</h3>
                  <p className="card-text text-white">16 Properties</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="card bg-dark text-white card-overlay">
              <a href="/">
                <img className="card-img" src={ImgOverLay2} alt="card_image" />
                <div className="card-img-overlay">
                  <h3 className="card-title text-white">Los Angeles</h3>
                  <p className="card-text text-white">265 Properties</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="card bg-dark text-white card-overlay">
              <a href="/">
                <img className="card-img" src={ImgOverLay3} alt="Card_image" />
                <div className="card-img-overlay">
                  <h3 className="card-title text-white">Chicago</h3>
                  <p className="card-text text-white">620 Properties</p>
                </div>
              </a>
              .
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <div className="card bg-dark text-white card-overlay">
              <a href="/">
                <img className="card-img" src={ImgOverLay4} alt="Card_image" />
                <div className="card-img-overlay">
                  <h3 className="card-title text-white">Philadelphia</h3>
                  <p className="card-text text-white">28 Properties</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PropertiesByCity;