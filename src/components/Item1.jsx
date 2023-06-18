import React from "react";
import { Link } from "react-router-dom";
import Product from "../pages/Product";
import { IMG_URL } from "../Utilities/URL";

export default function Item1(props) {
  return (
    <>
      <div class="col-6 col-sm-6 col-md-4 col-lg-3 item">
        <div class="product-image">
          <a href="#">
            <img
              class="primary blur-up lazyload"
              src={IMG_URL + props.img}
              alt="image"
              title="product"
            />

            <img
              class="hover blur-up lazyload"
              src={IMG_URL + props.img2}
              alt="image"
              title="product"
            />

            <div class="product-labels">
              <span class="lbl on-sale">Sale</span>
            </div>
          </a>

          <form
            class="variants add"
            action="#"
            onclick="window.location.href='cart.html'"
            method="post"
          >
            {props.condition ? (
              <button
                class="btn btn-addto-cart"
                type="button"
                onClick={props.addCart}
              >
                +
              </button>
            ) : (
              <button
                class="btn btn-addto-cart"
                type="button"
                onClick={props.addCart}
              >
                Add To Cart
              </button>
            )}
          </form>
          <div class="button-set">
            <a
              href="javascript:void(0)"
              title="Quick View"
              class="quick-view-popup quick-view"
              data-toggle="modal"
              data-target="#content_quickview"
            >
              <i class="icon anm anm-search-plus-r"></i>
            </a>
            <div class="wishlist-btn">
              <a
                class="wishlist add-to-wishlist"
                href="#"
                title="Add to Wishlist"
              >
                <i class="icon anm anm-heart-l"></i>
              </a>
            </div>
            <div class="compare-btn">
              <a
                class="compare add-to-compare"
                href="compare.html"
                title="Add to Compare"
              >
                <i class="icon anm anm-random-r"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="product-details text-center">
          <div class="product-name">
            <button onClick={props.onClick}>{props.title}</button>
          </div>

          <div class="product-price">
            <span class="old-price">$900.00</span>
            <span class="price">{props.price}</span>
          </div>
          <ul class="swatches">
            {/* <li class="swatch medium rounded">
              <div>red</div>
            </li> */}
            {props.colors}
          </ul>
        </div>
      </div>
    </>
  );
}
