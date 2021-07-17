import ImgAgent1 from '../../img/user/1.jpg';
import ImgAgent2 from '../../img/user/2.jpg';
import ImgAgent3 from '../../img/user/3.jpg';

function TrustAgents() {
  return (
    <>
      {/* Trusted Agents */}
      <section className="section-padding">
          <div className="section-title text-center mb-5">
            <h2>Trusted Agents</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="agents-card text-center">
                  <img className="img-fluid mb-4" src={ImgAgent1} alt="" />
                  <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                  <h6 className="mb-0 text-primary">- Stave Martin
                    <span className="star-rating">
                      <i className="mdi mdi-star text-warning" />
                      <i className="mdi mdi-star text-warning" />
                      <i className="mdi mdi-star text-warning" />
                      <i className="mdi mdi-star text-warning" />
                      <i className="mdi mdi-star-half text-warning" />
                    </span>
                  </h6>
                  <small>Buying Agent</small>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="agents-card text-center">
                  <img className="img-fluid mb-4" src={ImgAgent2} alt="" />
                  <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                  <h6 className="mb-0 text-primary">- Mark Smith
                    <span className="star-rating">
                      <i className="mdi mdi-star text-warning" />
                      <i className="mdi mdi-star text-warning" />
                      <i className="mdi mdi-star text-warning" />
                      <i className="mdi mdi-star text-warning" />
                      <i className="mdi mdi-star-half text-warning" />
                    </span>
                  </h6>
                  <small>Selling Agent</small>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="agents-card text-center">
                  <img className="img-fluid mb-4" src={ImgAgent3} alt="" />
                  <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                  <h6 className="mb-0 text-primary">- Ryan Printz
                    <span className="star-rating">
                      <i className="mdi mdi-star text-warning" />
                      <i className="mdi mdi-star text-warning" />
                      <i className="mdi mdi-star text-warning" />
                      <i className="mdi mdi-star text-warning" />
                      <i className="mdi mdi-star-half text-warning" />
                    </span>
                  </h6>
                  <small>Real Estate Broker</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Trusted Agents */}
    </>
  );
}

export default TrustAgents;