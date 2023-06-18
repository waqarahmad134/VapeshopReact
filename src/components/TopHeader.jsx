import React from "react";

export default function TopHeader() {
  return (
    <>
      <div className="top-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 col-sm-8 col-md-5 col-lg-4">
              <div className="currency-picker">
                <span className="selected-currency">USD</span>
                <ul id="currencies">
                  <li data-currency="INR" className="">
                    INR
                  </li>
                  <li data-currency="GBP" className="">
                    GBP
                  </li>
                  <li data-currency="CAD" className="">
                    CAD
                  </li>
                  <li data-currency="USD" className="selected">
                    USD
                  </li>
                  <li data-currency="AUD" className="">
                    AUD
                  </li>
                  <li data-currency="EUR" className="">
                    EUR
                  </li>
                  <li data-currency="JPY" className="">
                    JPY
                  </li>
                </ul>
              </div>
              <div className="language-dropdown">
                <span className="language-dd">English</span>
                <ul id="language">
                  <li className="">German</li>
                  <li className="">French</li>
                </ul>
              </div>
              <p className="phone-no">
                <i className="anm anm-phone-s"></i> +440 0(111) 044 833
              </p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 d-none d-lg-none d-md-block d-lg-block">
              <div className="text-center">
                <p className="top-header_middle-text">
                  {" "}
                  Worldwide Express Shipping
                </p>
              </div>
            </div>
            <div className="col-2 col-sm-4 col-md-3 col-lg-4 text-right">
              <span className="user-menu d-block d-lg-none">
                <i className="anm anm-user-al" aria-hidden="true"></i>
              </span>
              <ul className="customer-links list-inline">
                <li>
                  <a to="login.html">Login</a>
                </li>
                <li>
                  <a to="register.html">Create Account</a>
                </li>
                <li>
                  <a to="wishlist.html">Wishlist</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
