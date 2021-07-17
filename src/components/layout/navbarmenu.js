import logoImg from '../../img/logo.png';

function NavbarMenu() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand text-success logo" href="index.html">
              <img src={logoImg} alt="osahan logo" />
            </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-expanded="false">
                    HOME
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                    <a className="dropdown-item" href="index1.html">Home With Search</a>
                    <a className="dropdown-item" href="index2.html">Home With Map</a>
                    <a className="dropdown-item" href="index3.html">Home With Property Info</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-expanded="false">
                    Properties
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                    <a className="dropdown-item" href="properties-grid.html">Properties Grid</a>
                    <a className="dropdown-item" href="properties-list.html">Properties List</a>
                    <a className="dropdown-item" href="property-single-slider.html">Property Single Slider</a>
                    <a className="dropdown-item" href="property-single-gallery.html">Property Single Gallery</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-expanded="false">
                    Agency
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                    <a className="dropdown-item" href="agency-list.html">Agency List</a>
                    <a className="dropdown-item" href="agency-profile.html">Agency Profile</a>
                    <a className="dropdown-item" href="agents.html">Agents</a>
                    <a className="dropdown-item" href="agent-profile.html">Agent Profile</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-expanded="false">
                    Blog
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                    <a className="dropdown-item" href="blog.html">Blog</a>
                    <a className="dropdown-item" href="blog-single.html">Blog Single</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-expanded="false">
                    My Account
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                    <a className="dropdown-item" href="user-profile.html">User Profile</a>
                    <a className="dropdown-item" href="social-profiles.html">Social Profiles</a>
                    <a className="dropdown-item" href="my-properties.html">My Properties</a>
                    <a className="dropdown-item" href="favorite-properties.html">Favorite Properties</a>
                    <a className="dropdown-item" href="add-property.html">Add Property</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-expanded="false">
                    Pages
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownPortfolio">
                    <a className="dropdown-item" href="about.html">About Us</a>
                    <a className="dropdown-item" href="faq.html">FAQ</a>
                    <a className="dropdown-item" href="contact.html">Contact</a>
                    <a className="dropdown-item" href="not-found.html">404 Page</a>
                  </div>
                </li>
              </ul>
              <div className="my-2 my-lg-0">
                <ul className="list-inline main-nav-right">
                  <li className="list-inline-item">
                    <a className="btn btn btn-outline-primary btn-sm" href="login.html"><i className="mdi mdi-account-outline" /> Sign In</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-primary btn-sm" href="register.html"><i className="mdi mdi-account-outline" /> Sign Up</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

    </>
  );
}

export default NavbarMenu;