import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const cartId = JSON.parse(localStorage.getItem("cartItems"));
  return (
    <>
      <div className="header-wrap classNameicHeader animated d-flex">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
              <Link to="/">
                <img
                  src="assets/images/logo.svg"
                  alt="Belle Multipurpose Html Template"
                  title="Belle Multipurpose Html Template"
                />
              </Link>
            </div>

            <div className="col-2 col-sm-3 col-md-3 col-lg-8">
              <div className="d-block d-lg-none">
                <button
                  type="button"
                  className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open"
                >
                  <i className="icon anm anm-times-l"></i>
                  <i className="anm anm-bars-r"></i>
                </button>
              </div>
              <nav className="grid__item" id="AccessibleNav">
                <ul id="siteNav" className="site-nav medium center hidearrow">
                  <li className="lvl1 parent megamenu">
                    <Link to="/">
                      Home <i className="anm anm-angle-down-l"></i>
                    </Link>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <Link to="/shop">
                      Shop <i className="anm anm-angle-down-l"></i>
                    </Link>
                  </li>
                  <li className="lvl1 parent dropdown">
                    <a to="#">
                      Pages <i className="anm anm-angle-down-l"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
              <div className="logo">
                <a to="index.html">
                  <img
                    src="assets/images/logo.svg"
                    alt="Belle Multipurpose Html Template"
                    title="Belle Multipurpose Html Template"
                  />
                </a>
              </div>
            </div>

            <div className="col-4 col-sm-3 col-md-3 col-lg-2">
              <div className="site-cart">
                <Link to="/cart" className="site-header__cart" title="Cart">
                  <i className="icon anm anm-bag-l"></i>
                  <span
                    id="CartCount"
                    className="site-header__cart-count"
                    data-cart-render="item_count"
                  >
                    {cartId && cartId?.length > 0 ? cartId?.length : "0"}
                  </span>
                </Link>

                <div id="header-cart" className="block block-cart">
                  <ul className="mini-products-list">
                    <li className="item">
                      <a className="product-image" to="#">
                        <img
                          src="assets/images/product-images/cape-dress-1.jpg"
                          alt="3/4 Sleeve Kimono Dress"
                          title=""
                        />
                      </a>
                      <div className="product-details">
                        <a to="#" className="remove">
                          <i className="anm anm-times-l" aria-hidden="true"></i>
                        </a>
                        <a to="#" className="edit-i remove">
                          <i className="anm anm-edit" aria-hidden="true"></i>
                        </a>
                        <a className="pName" to="cart.html">
                          Sleeve Kimono Dress
                        </a>
                        <div className="variant-cart">Black / XL</div>
                        <div className="wrapQtyBtn">
                          <div className="qtyField">
                            <span className="label">Qty:</span>
                            <a
                              className="qtyBtn minus"
                              to="javascript:void(0);"
                            >
                              <i
                                className="fa anm anm-minus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <input
                              type="text"
                              id="Quantity"
                              name="quantity"
                              defaultValue="1"
                              className="product-form__input qty"
                            />
                            <a className="qtyBtn plus" to="javascript:void(0);">
                              <i
                                className="fa anm anm-plus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                        <div className="priceRow">
                          <div className="product-price">
                            <span className="money">$59.00</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item">
                      <a className="product-image" to="#">
                        <img
                          src="assets/images/product-images/cape-dress-2.jpg"
                          alt="Elastic Waist Dress - Black / Small"
                          title=""
                        />
                      </a>
                      <div className="product-details">
                        <a to="#" className="remove">
                          <i className="anm anm-times-l" aria-hidden="true"></i>
                        </a>
                        <a to="#" className="edit-i remove">
                          <i className="anm anm-edit" aria-hidden="true"></i>
                        </a>
                        <a className="pName" to="cart.html">
                          Elastic Waist Dress
                        </a>
                        <div className="variant-cart">Gray / XXL</div>
                        <div className="wrapQtyBtn">
                          <div className="qtyField">
                            <span className="label">Qty:</span>
                            <a
                              className="qtyBtn minus"
                              to="javascript:void(0);"
                            >
                              <i
                                className="fa anm anm-minus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                            <input
                              type="text"
                              id="Quantity"
                              name="quantity"
                              defaultValue="1"
                              className="product-form__input qty"
                            />
                            <a className="qtyBtn plus" to="javascript:void(0);">
                              <i
                                className="fa anm anm-plus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                        <div className="priceRow">
                          <div className="product-price">
                            <span className="money">$99.00</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="total">
                    <div className="total-in">
                      <span className="label">Cart Subtotal:</span>
                      <span className="product-price">
                        <span className="money">$748.00</span>
                      </span>
                    </div>
                    <div className="buttonSet text-center">
                      <a
                        to="cart.html"
                        className="btn btn-secondary btn--small"
                      >
                        View Cart
                      </a>
                      <a
                        to="checkout.html"
                        className="btn btn-secondary btn--small"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="site-header__search">
                <button type="button" className="search-trigger">
                  <i className="icon anm anm-search-l"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
