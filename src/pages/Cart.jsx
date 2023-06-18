// @ts-nocheck
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import TopHeader from "../components/TopHeader";
import ItemModel from "../components/ItemModel";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const cartArr = JSON.parse(localStorage.getItem("cartItems"));
  const calculateTotalSum = (array) => {
    const totalSum = cartArr.reduce(
      (sum, item) => sum + parseInt(item.total),
      0
    );
    localStorage.setItem("subTotal", totalSum);
    return totalSum;
  };
  useEffect(() => {
    calculateTotalSum();
  }, []);

  const cartEdit = (id, math) => {
    const updatedCartItems = cartArr.map((item) => {
      if (item.id === id) {
        if (math === "add") {
          const updatedQty = parseInt(item.qty, 10) + 1;
          const updatedTotal = parseInt(item.price, 10) + parseInt(item.total);
          return {
            ...item,
            qty: updatedQty.toString(),
            total: updatedTotal.toString(),
          };
        } else if (math === "subtract") {
          const updatedQty = parseInt(item.qty, 10) - 1;
          const updatedTotal = parseInt(item.total) - parseInt(item.price, 10);
          return {
            ...item,
            qty: updatedQty.toString(),
            total: updatedTotal.toString(),
          };
        }
      }
      return item;
    });

    // Update the localStorage with the updated array
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    navigate("/cart");
  };
  const removeCart = (itemId) => {
    const updatedArray = cartArr.filter((item) => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedArray));
    navigate("/cart");
  };
  return (
    <div classNameName="pageWrapper">
      <TopHeader />
      <Header />
      <MobileNav />
      <div id="page-content">
        <div class="page section-header text-center">
          <div class="page-title">
            <div class="wrapper">
              <h1 class="page-width">Your cart</h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-8 col-lg-8 main-col">
              <div action="#" method="post" class="cart style2">
                <table>
                  <thead class="cart__row cart__header">
                    <tr>
                      <th colspan="2" class="text-center">
                        Product
                      </th>
                      <th class="text-center">Price</th>
                      <th class="text-center">Quantity</th>
                      <th class="text-right">Total</th>
                      <th class="action">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartArr?.map((cart, index) => (
                      <tr class="cart__row border-bottom line1 cart-flex border-top">
                        <td class="cart__image-wrapper cart-flex-item">
                          <a href="#">
                            <img
                              class="cart__image"
                              src="assets/images/product-images/product-image1.jpg"
                              alt="Elastic Waist Dress - Navy / Small"
                            />
                          </a>
                        </td>
                        <td class="cart__meta small--text-left cart-flex-item">
                          <div class="list-view-item__title">
                            <a href="#">{cart?.title} </a>
                          </div>

                          <div class="cart__meta-text">
                            Color: Navy <br /> Size: Small <br />
                          </div>
                        </td>
                        <td class="cart__price-wrapper cart-flex-item">
                          <span class="money">{cart?.price}</span>
                        </td>
                        <td class="cart__update-wrapper cart-flex-item text-right">
                          <div class="cart__qty text-center">
                            <div class="qtyField">
                              <button
                                class="qtyBtn minus"
                                onClick={() => cartEdit(cart?.id, "subtract")}
                                disabled={cart?.qty === "1" && true}
                              >
                                <i class="icon icon-minus"></i>
                              </button>
                              <span>{cart?.qty}</span>
                              <button
                                class="qtyBtn plus"
                                onClick={() => cartEdit(cart?.id, "add")}
                              >
                                <i class="icon icon-plus"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td class="text-right small--hide cart-price">
                          <div>
                            <span class="money">{cart?.total}</span>
                          </div>
                        </td>
                        <td class="text-center small--hide">
                          <button
                            class="btn btn--secondary cart__remove"
                            title="Remove item"
                            onClick={() => removeCart(cart?.id)}
                          >
                            <i class="icon icon anm anm-times-l"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 cart__footer">
              <div class="cart-note">
                <div class="solid-border">
                  <h5>
                    <label
                      for="CartSpecialInstructions"
                      class="cart-note__label small--text-center"
                    >
                      Add a note to your order
                    </label>
                  </h5>
                  <textarea
                    name="note"
                    id="CartSpecialInstructions"
                    class="cart-note__input"
                  ></textarea>
                </div>
              </div>
              <div class="solid-border">
                <div class="row">
                  <span class="col-12 col-sm-6 cart__subtotal-title">
                    <strong>Subtotal</strong>
                  </span>
                  <span class="col-12 col-sm-6 cart__subtotal-title cart__subtotal text-right">
                    <span class="money">{calculateTotalSum()}</span>
                  </span>
                </div>
                <div class="cart__shipping">
                  Shipping &amp; taxes calculated at checkout
                </div>
                <p class="cart_tearm">
                  <label>
                    <input
                      type="checkbox"
                      name="tearm"
                      id="cartTearm"
                      class="checkbox"
                      value="tearm"
                      required=""
                    />
                    I agree with the terms and conditions
                  </label>
                </p>
                <Link className="btn btn--small-wide checkout" to="/checkout">
                  {" "}
                  Checkout
                </Link>
                <div class="paymnet-img">
                  <img src="assets/images/payment-img.jpg" alt="Payment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ItemModel />
    </div>
  );
}
