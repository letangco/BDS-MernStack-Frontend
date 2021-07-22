import React, { useState, useEffect } from "react";
import LocationFilter from './location.filter';
import sliderApi from "../../api/sliderApi";

function MainSlider() {
  const [slides, setSlide] = useState({});
  const [active, setActive] = useState(0);

  // const main_slide = useRef(null);
  const fetchApiFunc = async () => {
    try {
      const res = await sliderApi.getSliders();
      setSlide(res.payload.map(item => item.image.img));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiFunc();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (active + 1 === slides.length) {
        setActive(0);
      } else setActive(active + 1);
    }, 6000);
    return () => clearInterval(interval);
  });

  function nextSlide() {
    if (active + 1 === slides.length) {
      setActive(0);
    } else setActive(active + 1);
  }

  function preSlide() {
    if (active - 1 < 0) {
      setActive(slides.length - 1);
    } else setActive(active - 1);
  }
  return (
    <section className="osahan-slider">
      <div id="osahanslider" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#osahanslider" data-slide-to={0} className="active" />
          {/* <li data-target="#osahanslider" data-slide-to={1} /> */}
        </ol>
        <div className="carousel-inner" role="listbox">
          {/* <div className="carousel-item active" style={{backgroundImage: 'url('+Slider1+')'}}>
            <div className="overlay" />
          </div>
          <div className="carousel-item">
            <div className="overlay" />
          </div> */}
          {slides ? (<div className="carousel-item active" style={{ backgroundImage: 'url(' + slides[active] + ')' }}>
            <div className="overlay" />
          </div>) : null}
        </div>
        <a className="carousel-control-prev" role="button" data-slide="prev" onClick={preSlide}>
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" id="slide-button-next" role="button" data-slide="next" onClick={nextSlide}>
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="slider-form">
        <div className="container">
          <h2 className="text-left mb-5">Find Your Dream Home</h2>
          <form>
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">For Sale</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">For Rent</a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <LocationFilter />
                  </div>
                  <div className="col-md-3">
                    <div className="input-group">
                      <div className="input-group-addon"><i className="mdi mdi-security-home" /></div>
                      <select className="form-control select2 no-radius">
                        <option value>Property Type</option>
                        <option value>House/Villa</option>
                        <option value>Flat</option>
                        <option value>Plot/Land</option>
                        <option value>Office Space</option>
                        <option value>Shop/Showroom</option>
                        <option value>Commercial Land</option>
                        <option value>Warehouse/ Godown</option>
                        <option value>Industrial Building</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="input-group">
                      <div className="input-group-addon"><i className="mdi mdi-cash-usd" /></div>
                      <select className="form-control select2 no-radius">
                        <option value>Price</option>
                        <option value>House/Villa</option>
                        <option value>Flat</option>
                        <option value>Plot/Land</option>
                        <option value>Office Space</option>
                        <option value>Shop/Showroom</option>
                        <option value>Commercial Land</option>
                        <option value>Warehouse/ Godown</option>
                        <option value>Industrial Building</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="input-group">
                      <div className="input-group-addon"><i className="mdi mdi-format-wrap-square" /></div>
                      <select className="form-control select2 no-radius">
                        <option value>Square</option>
                        <option value>House/Villa</option>
                        <option value>Flat</option>
                        <option value>Plot/Land</option>
                        <option value>Office Space</option>
                        <option value>Shop/Showroom</option>
                        <option value>Commercial Land</option>
                        <option value>Warehouse/ Godown</option>
                        <option value>Industrial Building</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <button type="submit" className="btn btn-secondary btn-block no-radius font-weight-bold">SEARCH</button>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="row no-gutters">
                  <div className="col-md-7">
                    <div className="input-group">
                      <div className="input-group-addon"><i className="mdi mdi-map-marker-multiple" /></div>
                      <input className="form-control" placeholder="Enter Landmark, Location or Society" type="text" />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="input-group">
                      <div className="input-group-addon"><i className="mdi mdi-security-home" /></div>
                      <select className="form-control select2 no-radius">
                        <option value>Property Type</option>
                        <option value>House/Villa</option>
                        <option value>Flat</option>
                        <option value>Plot/Land</option>
                        <option value>Office Space</option>
                        <option value>Shop/Showroom</option>
                        <option value>Commercial Land</option>
                        <option value>Warehouse/ Godown</option>
                        <option value>Industrial Building</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <button type="submit" className="btn btn-secondary btn-block no-radius font-weight-bold">SEARCH</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="top-search">
            <strong><i className="mdi mdi-keyboard" /> Top Search</strong>
            <a href="/">Flat</a>
            <a href="/">Plot/Land</a>
            <a href="/">Office Space</a>
            <a href="/">Shop/Showroom</a>
            <a href="/">Commercial Land</a>
            <a href="/">Warehouse/ Godown</a>
            <a href="/">Industrial Building</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSlider;