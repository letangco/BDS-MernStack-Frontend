import React, { useState, useEffect } from "react";
import LocationFilter from './filter/location.filter';
import CategoryFilter from './filter/category.filter';
import TypeProductFilter from './filter/typeProduct.filter';
import sliderApi from "../../api/sliderApi";
import PriceFilter from './filter/price.filter';
import SquareFilter from "./filter/square.filter";
import productApi from "../../api/productApi";

function MainSlider(props) {
  const [slides, setSlide] = useState({});
  const [active, setActive] = useState(0);

  const [typeProduct, setTypeProduct] = useState(null);
  const [location, setLocation] = useState(null);
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState(null);
  const [square, setSquare] = useState(null);

  const [queryCondition, setQueryCondition] = useState({});

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
    props.changeFilter(queryCondition);
  }, [queryCondition]);

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

  // Callback from child component
  const handleChangeType = (id) => {
    setTypeProduct(id);
    const temp ={ ...queryCondition, type: id };
    setQueryCondition(temp);
  };
  // handle data change location
  const handleChangeLocation = (data) => {
    setLocation(data);
    const temp = { ...queryCondition, ward: data };
    setQueryCondition(temp);
  }
  // handle change category
  const handleChangeCategory = (data) => {
    setCategory(data);
    const temp = { ...queryCondition, category: data };
    setQueryCondition(temp);
  }
  // handle change price
  const handleChangePrice = (price) => {
    setPrice(price);
    const temp = { ...queryCondition, price: price };
    setQueryCondition(temp);
  }
  // handle change square
  const handleChangeSquare = (square) => {
    setSquare(square);
    const temp = { ...queryCondition, square: square };
    setQueryCondition(temp);
  }
  
  async function onSearch(event) {
    event.preventDefault();
    props.onSearch();
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
          <h2 className="text-center mb-5">Find Your Dream Home</h2>
          <form onSubmit={onSearch}>
            <TypeProductFilter changeType = {handleChangeType} />
            <div className="tab-content">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row no-gutters">
                  <div className="col-md-3">
                    <LocationFilter changeLocation = {handleChangeLocation} />
                  </div>
                  <div className="col-md-3">
                    <CategoryFilter changeCategory = { handleChangeCategory }/>
                  </div>
                  <div className="col-md-2">
                    <PriceFilter changePrice = {handleChangePrice}/>
                  </div>
                  <div className="col-md-2">
                    <SquareFilter changeSquare = {handleChangeSquare}/>
                  </div>
                  <div className="col-md-2">
                    <button type="submit" className="btn btn-secondary btn-block no-radius font-weight-bold">
                      SEARCH
                    </button>
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