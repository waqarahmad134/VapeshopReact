// @ts-nocheck
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import TopHeader from "../components/TopHeader";
import ItemModel from "../components/ItemModel";
import ProductFeatures from "../components/ProductFeatures";
import BreadCrumbs from "../components/BreadCrumbs";
import { Link, useLocation } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Product() {
  const location = useLocation();
  const prodData = location?.state?.prodDetails;
  console.log("🚀 ~ file: Product.jsx:15 ~ Product ~ prodData:", prodData);
  const images = [];
  return (
    <div classNameName="pageWrapper">
      <TopHeader />
      <Header />
      <MobileNav />
      <div id="page-content">
        <div id="MainContent" className="main-content" role="main">
          <BreadCrumbs />

          <div
            id="ProductSection-product-template"
            className="product-template__container prstyle1 container"
          >
            <div className="product-single">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="product-details-img">
                    <div className="zoompro-wrap product-zoom-right pl-20">
                      <div className="zoompro-span">
                        {/* <ImageGallery items={images} /> */}
                      </div>
                      <div className="product-labels">
                        <span className="lbl on-sale">Sale</span>
                        <span className="lbl pr-label1">new</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="product-single__meta">
                    <h1 className="product-single__title">{prodData?.title}</h1>
                    <p className="product-single__price product-single__price-product-template">
                      <span className="visually-hidden">Regular price</span>
                      <s id="ComparePrice-product-template">
                        <span className="money">{prodData?.price}</span>
                      </s>
                      <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                        <span id="ProductPrice-product-template">
                          <span className="money">$500.00</span>
                        </span>
                      </span>
                      <span className="discount-badge">
                        {" "}
                        <span className="devider">|</span>&nbsp;
                        <span>You Save</span>
                        <span
                          id="SaveAmount-product-template"
                          className="product-single__save-amount"
                        >
                          <span className="money">$100.00</span>
                        </span>
                        <span className="off">
                          (<span>16</span>%)
                        </span>
                      </span>
                    </p>
                    <div className="orderMsg" data-user="23" data-time="24">
                      <img src="assets/images/order-icon.jpg" alt="" />{" "}
                      <strong className="items">5</strong> sold in last{" "}
                      <strong className="time">26</strong> hours
                    </div>
                  </div>
                  <div className="product-single__description rte">
                    <div>{prodData?.shortDescription}</div>
                  </div>

                  <form>
                    <div
                      className="swatch clearfix swatch-1 option2"
                      data-option-index="1"
                    >
                      <div className="product-form__item">
                        <label className="header">
                          Size:{" "}
                          {prodData?.Colors?.map((col, index) => (
                            <li
                              class="swatch medium rounded"
                              style={{ background: col?.name }}
                            ></li>
                          ))}
                        </label>
                        <div
                          data-value="XS"
                          className="swatch-element xs available"
                        >
                          <input
                            className="swatchInput"
                            id="swatch-1-xs"
                            type="radio"
                            name="option-1"
                            value="XS"
                          />
                          <label
                            className="swatchLbl medium rectangle"
                            for="swatch-1-xs"
                            title="XS"
                          >
                            XS
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="product-action clearfix">
                      <div className="product-form__item--quantity">
                        <div className="wrapQtyBtn">
                          <div className="qtyField">
                            <a
                              className="qtyBtn minus"
                              href="javascript:void(0);"
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
                              value="1"
                              className="product-form__input qty"
                            />
                            <a
                              className="qtyBtn plus"
                              href="javascript:void(0);"
                            >
                              <i
                                className="fa anm anm-plus-r"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-form__item--submit">
                        <Link
                          to="/cart"
                          type="button"
                          name="add"
                          className="btn product-form__cart-submit"
                        >
                          <span>Add to cart</span>
                        </Link>
                      </div>
                      <div
                        className="shopify-payment-button"
                        data-shopify="payment-button"
                      >
                        <Link
                          to="/cart"
                          type="button"
                          className="shopify-payment-button__button shopify-payment-button__button--unbranded"
                        >
                          Buy it now
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <ProductFeatures />
          </div>
        </div>
      </div>
      <Footer />
      <ItemModel />
    </div>
  );
}
