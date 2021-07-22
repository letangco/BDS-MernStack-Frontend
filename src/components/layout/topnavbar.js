import React from 'react';

function TopNavbar() {
  return (
    <div className="navbar-top bg-primary">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <p>
                        Welcome To <strong>BDS khu Đông</strong>
                    </p>
                </div>
                <div className="col-lg-8 col-md-8 text-right">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="/a"><i className="mdi mdi-email-outline"></i> lethanh@bds.com.vn</a>
                        </li>
                        <li className="list-inline-item">
                            <a href='/'><i className="mdi mdi-phone"></i> (+84) 938.540.410</a>
                        </li>
                        <li className="list-inline-item">
                            <a href='/'><i className="mdi mdi-headphones"></i> Contact Us</a>
                        </li>
                        <li className="list-inline-item">
                            <span>Download App</span> &nbsp;
                            <a href='/'><i className="mdi mdi-windows"></i></a>
                            <a href='/'><i className="mdi mdi-apple"></i></a>
                            <a href='/'><i className="mdi mdi-android"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopNavbar;