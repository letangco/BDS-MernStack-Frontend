import logo from '../../img/logo.png';

function Footer() {
  return (
    <>
      {/* Footer */}
      <section className="section-padding footer bg-white border-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <h4 className="mb-5 mt-0">
                  <a className="logo" href="index.html"><img src={logo} alt="osahan logo" /></a>
                </h4>
                <p>Building S2.02 Vinhomes Grand Park apartment building in Thu Duc City</p>
                <p className="mb-0"><a className="text-dark" href="/">(+84) 938.540.410</a></p>
                <p className="mb-0"><a className="text-success" href="/">iamosahan@gmail.com</a></p>
                <p className="mb-0"><a className="text-primary" href="/">www.askbootstrap.com</a></p>
              </div>
              <div className="col-lg-2 col-md-2">
                <h6 className="mb-4">OUR PROPERTIES</h6>
                <ul>
                  <li><a href="/">Single Story</a></li>
                  <li><a href="/">Dubble Story</a></li>
                  <li><a href="/">Tripple Story</a></li>
                  <li><a href="/">Resort</a></li>
                  <li><a href="/">Home in Merrick Way</a></li>
                  <ul>
                  </ul></ul></div>
              <div className="col-lg-2 col-md-2">
                <h6 className="mb-4">QUICK LINKS</h6>
                <ul>
                  <li><a href="/">Home in Coral Gables</a></li>
                  <li><a href="/">Villa on Grand Avenue</a></li>
                  <li><a href="/">Home in Merrick Way</a></li>
                  <li><a href="/">Land / Plots</a></li>
                  <li><a href="/">Restaurent</a></li>
                  <ul>
                  </ul></ul></div>
              <div className="col-lg-2 col-md-2">
                <h6 className="mb-4">ABOUT OP</h6>
                <ul>
                  <li><a href="/">Company Information</a></li>
                  <li><a href="/">Careers</a></li>
                  <li><a href="/">Store Location</a></li>
                  <li><a href="/">Affillate Program</a></li>
                  <li><a href="/">Copyright</a></li>
                  <ul>
                  </ul></ul></div>
              <div className="col-lg-3 col-md-3">
                <h6 className="mb-4">NEWSLETTER</h6>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Email Address..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <button className="btn btn-secondary" type="button"><i className="mdi mdi-arrow-right" /></button>
                  </div>
                </div>
                <p className="text-info newsletter-info"><i className="mdi mdi-email-variant" /> Get the most recent updates from our site and be updated your self...</p>
                <h6 className="mb-3 mt-4">GET IN TOUCH</h6>
                <div className="footer-social">
                  <a className="btn-facebook" href="/"><i className="mdi mdi-facebook" /></a>
                  <a className="btn-twitter" href="/"><i className="mdi mdi-twitter" /></a>
                  <a className="btn-instagram" href="/"><i className="mdi mdi-instagram" /></a>
                  <a className="btn-whatsapp" href="/"><i className="mdi mdi-whatsapp" /></a>
                  <a className="btn-messenger" href="/"><i className="mdi mdi-facebook-messenger" /></a>
                  <a className="btn-google" href="/"><i className="mdi mdi-google" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Footer */}
    </>
  );
}

export default Footer;