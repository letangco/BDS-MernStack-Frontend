import React, { useEffect, useState } from 'react';
import productApi from '../../api/productApi';

import ImgOverLay1 from '../../img/overlay/1.png';
import ImgOverLay2 from '../../img/overlay/2.png';
import ImgOverLay3 from '../../img/overlay/3.png';
import ImgOverLay4 from '../../img/overlay/4.png';


function PropertiesByCity() {
  const [countProduct, setCountProduct] = useState([]);

  const fetchApiFunc = async () => {
    try {
      const res = await productApi.getTop4CountProductByCity();
      // console.log(res)
      setCountProduct(res.payload);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiFunc();
  }, []);

  function listCountProduct() {
    if (countProduct.length === 1) {
      return (
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="card bg-dark text-white card-overlay">
              <a href="/">
                <img className="card-img" src={ImgOverLay1} alt="Card_image" />
                <div className="card-img-overlay">
                  <h3 className="card-title text-white">{countProduct[0].wardId.name_with_type}</h3>
                  <p className="card-text text-white">{`${countProduct[0].count} Sản phẩm`}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      );
    } else if (countProduct.length === 2) {
      return (
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="card bg-dark text-white card-overlay">
              <a href="/">
                <img className="card-img" src={ImgOverLay1} alt="Card_image" />
                <div className="card-img-overlay">
                  <h3 className="card-title text-white">{countProduct[0].wardId.name_with_type}</h3>
                  <p className="card-text text-white">{`${countProduct[0].count} Sản phẩm`}</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="card bg-dark text-white card-overlay">
              <a href="/">
                <img className="card-img" src={ImgOverLay2} alt="card_image" />
                <div className="card-img-overlay">
                  <h3 className="card-title text-white">{countProduct[1].wardId.name_with_type}</h3>
                  <p className="card-text text-white">{`${countProduct[1].count} Sản phẩm`}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      );
    } else if (countProduct.length === 3) {
      return (
        <span>
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="card bg-dark text-white card-overlay">
                <a href="/">
                  <img className="card-img" src={ImgOverLay1} alt="Card_image" />
                  <div className="card-img-overlay">
                    <h3 className="card-title text-white">{countProduct[0].wardId.name_with_type}</h3>
                    <p className="card-text text-white">{`${countProduct[0].count} Sản phẩm`}</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card bg-dark text-white card-overlay">
                <a href="/">
                  <img className="card-img" src={ImgOverLay2} alt="card_image" />
                  <div className="card-img-overlay">
                    <h3 className="card-title text-white">{countProduct[1].wardId.name_with_type}</h3>
                    <p className="card-text text-white">{`${countProduct[1].count} Sản phẩm`}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="card bg-dark text-white card-overlay">
                <a href="/">
                  <img className="card-img" src={ImgOverLay3} alt="Card_image" />
                  <div className="card-img-overlay">
                    <h3 className="card-title text-white">{countProduct[2].wardId.name_with_type}</h3>
                    <p className="card-text text-white">{`${countProduct[2].count} Sản phẩm`}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </span>
      );
    } else if (countProduct.length === 4) {
      return (
        <span>
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="card bg-dark text-white card-overlay">
                <a href="/">
                  <img className="card-img" src={ImgOverLay1} alt="Card_image" />
                  <div className="card-img-overlay">
                    <h3 className="card-title text-white">{countProduct[0].wardId.name_with_type}</h3>
                    <p className="card-text text-white">{`${countProduct[0].count} Sản phẩm`}</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card bg-dark text-white card-overlay">
                <a href="/">
                  <img className="card-img" src={ImgOverLay2} alt="card_image" />
                  <div className="card-img-overlay">
                    <h3 className="card-title text-white">{countProduct[1].wardId.name_with_type}</h3>
                    <p className="card-text text-white">{`${countProduct[1].count} Sản phẩm`}</p>
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
                  <h3 className="card-title text-white">{countProduct[2].wardId.name_with_type}</h3>
                  <p className="card-text text-white">{`${countProduct[2].count} Sản phẩm`}</p>
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
                  <h3 className="card-title text-white">{countProduct[3].wardId.name_with_type}</h3>
                  <p className="card-text text-white">{`${countProduct[3].count} Sản phẩm`}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        </span>
      );
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="section-title text-center mb-5">
        <h2>Property By City</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="container">
        {listCountProduct()}
        {/* <div className="row">
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
        </div> */}
      </div>
    </section>
  );
}
export default PropertiesByCity;