import PhotoList1 from '../../img/list/1.png';
import PhotoList2 from '../../img/list/2.png';
import PhotoList3 from '../../img/list/3.png';
import PhotoList4 from '../../img/list/4.png';
import PhotoList5 from '../../img/list/5.png';
import PhotoList6 from '../../img/list/6.png';

function ListProperties() {
  return (
    <>
      {/* Properties List */}
      <section className="section-padding">
          <div className="section-title text-center mb-5">
            <h2>Latest Properties</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="card card-list">
                  <a href="/">
                    <div className="card-img">
                      <div className="love-badge text-danger"><i className="mdi mdi-heart" /></div>
                      <div className="badge images-badge"><i className="mdi mdi-image-filter" /> 12</div>
                      <span className="badge badge-primary">For Sale</span>
                      <img className="card-img-top" src={PhotoList1} alt="image_da" />
                    </div>
                    <div className="card-body">
                      <h2 className="text-primary mb-2 mt-0">
                        $130,000 <small>/Per Month</small>
                      </h2>
                      <h5 className="card-title mb-2">House in Kent Street</h5>
                      <h6 className="card-subtitle mt-1 mb-0 text-muted"><i className="mdi mdi-home-map-marker" /> 127 Kent Sreet, Sydny, NEW 2000</h6>
                    </div>
                    <div className="card-footer">
                      <span><i className="mdi mdi-sofa" /> Beds : <strong>3</strong></span>
                      <span><i className="mdi mdi-scale-bathroom" /> Baths : <strong>2</strong></span>
                      <span><i className="mdi mdi-move-resize-variant" /> Area : <strong>587 sq ft</strong></span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card card-list">
                  <a href="/">
                    <div className="card-img">
                      <div className="love-badge text-danger"><i className="mdi mdi-heart" /></div>
                      <div className="badge images-badge"><i className="mdi mdi-image-filter" /> 60</div>
                      <span className="badge badge-secondary">For Rent</span>
                      <img className="card-img-top" src={PhotoList2} alt="Cart_cap" />
                    </div>
                    <div className="card-body">
                      <h2 className="text-primary mb-2 mt-0">
                        $127,000 <small>/month</small>
                      </h2>
                      <h5 className="card-title mb-2">Family House in Hudson</h5>
                      <h6 className="card-subtitle mt-1 mb-0 text-muted"><i className="mdi mdi-home-map-marker" /> Hoboken, NJ, USA</h6>
                    </div>
                    <div className="card-footer">
                      <span><i className="mdi mdi-sofa" /> Beds : <strong>5</strong></span>
                      <span><i className="mdi mdi-scale-bathroom" /> Baths : <strong>3</strong></span>
                      <span><i className="mdi mdi-move-resize-variant" /> Area : <strong>300 sq ft</strong></span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card card-list">
                  <a href="/">
                    <div className="card-img">
                      <div className="love-badge text-danger"><i className="mdi mdi-heart-outline" /></div>
                      <div className="badge images-badge"><i className="mdi mdi-image-filter" /> 03</div>
                      <span className="badge badge-success">For Sale</span>
                      <img className="card-img-top" src={PhotoList3} alt="Cart_cap" />
                    </div>
                    <div className="card-body">
                      <h2 className="text-primary mb-2 mt-0">
                        $55,000 <small>/month</small>
                      </h2>
                      <h5 className="card-title mb-2">Loft Above The City</h5>
                      <h6 className="card-subtitle mt-1 mb-0 text-muted"><i className="mdi mdi-home-map-marker" /> Hope Street (Stop P), London SW11, UK</h6>
                    </div>
                    <div className="card-footer">
                      <span><i className="mdi mdi-sofa" /> Beds : <strong>2</strong></span>
                      <span><i className="mdi mdi-scale-bathroom" /> Baths : <strong>1</strong></span>
                      <span><i className="mdi mdi-move-resize-variant" /> Area : <strong>100 sq ft</strong></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="card card-list">
                  <a href="/">
                    <div className="card-img">
                      <div className="love-badge text-danger"><i className="mdi mdi-heart-outline" /></div>
                      <div className="badge images-badge"><i className="mdi mdi-image-filter" /> 18</div>
                      <span className="badge badge-danger">For Sale</span>
                      <img className="card-img-top" src={PhotoList4} alt="Cart_cap" />
                    </div>
                    <div className="card-body">
                      <h2 className="text-primary mb-2 mt-0">
                        $25,000 <small>/month</small>
                      </h2>
                      <h5 className="card-title mb-2">Store Space Greenville</h5>
                      <h6 className="card-subtitle mt-1 mb-0 text-muted"><i className="mdi mdi-home-map-marker" /> 250-260 3rd St, Hoboken, NJ 07030, USA</h6>
                    </div>
                    <div className="card-footer">
                      <span><i className="mdi mdi-sofa" /> Beds : <strong>6</strong></span>
                      <span><i className="mdi mdi-scale-bathroom" /> Baths : <strong>4</strong></span>
                      <span><i className="mdi mdi-move-resize-variant" /> Area : <strong>987 sq ft</strong></span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card card-list">
                  <a href="/">
                    <div className="card-img">
                      <div className="love-badge text-danger"><i className="mdi mdi-heart" /></div>
                      <div className="badge images-badge"><i className="mdi mdi-image-filter" /> 04</div>
                      <span className="badge badge-warning">For Rent</span>
                      <img className="card-img-top" src={PhotoList5} alt="Cart_cap" />
                    </div>
                    <div className="card-body">
                      <h2 className="text-primary mb-2 mt-0">
                        $12,000 <small>/month</small>
                      </h2>
                      <h5 className="card-title mb-2">Villa in Melbourne</h5>
                      <h6 className="card-subtitle mt-1 mb-0 text-muted"><i className="mdi mdi-home-map-marker" /> NJ 07305, USA</h6>
                    </div>
                    <div className="card-footer">
                      <span><i className="mdi mdi-sofa" /> Beds : <strong>8</strong></span>
                      <span><i className="mdi mdi-scale-bathroom" /> Baths : <strong>4</strong></span>
                      <span><i className="mdi mdi-move-resize-variant" /> Area : <strong>120 sq ft</strong></span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card card-list">
                  <a href="/">
                    <div className="card-img">
                      <div className="love-badge text-danger"><i className="mdi mdi-heart-outline" /></div>
                      <div className="badge images-badge"><i className="mdi mdi-image-filter" /> 45</div>
                      <span className="badge badge-info">For Rent</span>
                      <img className="card-img-top" src={PhotoList6} alt="Cart_cap" />
                    </div>
                    <div className="card-body">
                      <h2 className="text-primary mb-2 mt-0">
                        $356, 000 <small>/month</small>
                      </h2>
                      <h5 className="card-title mb-2">Villa on Hollywood Boulev</h5>
                      <h6 className="card-subtitle mt-1 mb-0 text-muted"><i className="mdi mdi-home-map-marker" /> The Village, Jersey City, NJ 07302, USA</h6>
                    </div>
                    <div className="card-footer">
                      <span><i className="mdi mdi-sofa" /> Beds : <strong>1</strong></span>
                      <span><i className="mdi mdi-scale-bathroom" /> Baths : <strong>3</strong></span>
                      <span><i className="mdi mdi-move-resize-variant" /> Area : <strong>187 sq ft</strong></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12 text-center">
                <button className="btn btn-secondary font-weight-bold btn-lg" type="submit">VIEW ALL</button>
              </div>
            </div>
          </div>
        </section>
        {/* End Properties List */}
    </>
  );
}

export default ListProperties;