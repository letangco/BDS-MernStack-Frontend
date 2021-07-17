function MainSlider() {
  return (
    <>
     <section className="osahan-slider">
          <div id="osahanslider" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#osahanslider" data-slide-to={0} className="active" />
              <li data-target="#osahanslider" data-slide-to={1} />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active slider-one">
                <div className="overlay" />
              </div>
              <div className="carousel-item slider-two">
                <div className="overlay" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#osahanslider" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#osahanslider" role="button" data-slide="next">
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
                      <div className="col-md-4">
                        <div className="input-group">
                          <div className="input-group-addon"><i className="mdi mdi-map-marker-multiple" /></div>
                          <input className="form-control" placeholder="Enter Location, Project or Landmark" type="text" />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="input-group">
                          <div className="input-group-addon"><i className="mdi mdi-google-maps" /></div>
                          <select className="form-control select2 no-radius">
                            <option value>Locations</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                          </select>
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
    </>   
  );
}

export default MainSlider;