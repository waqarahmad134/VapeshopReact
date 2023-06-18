// @ts-nocheck
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import TopHeader from "../components/TopHeader";
import ItemModel from "../components/ItemModel";
import StoreFeature from "../components/StoreFeature";
import HeroSection from "../components/HeroSection";
import ShopFilter from "../components/ShopFilter";
import Item1 from "../components/Item1";
import GetAPI from "../api/GetAPI";
import { BASE_URL } from "../Utilities/URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const { data } = GetAPI("get_all_products");
  const [tabs, setTabs] = useState("");
  console.log("🚀 ~ file: Shop.jsx:20 ~ Shop ~ tabs:", tabs);
  const navigate = useNavigate();
  const prodDetails = async (slug) => {
    var config = {
      headers: {
        accessToken: localStorage.getItem("accessToken"),
      },
    };
    try {
      axios.get(BASE_URL + `product_details/${slug}`, config).then((dat) => {
        if (dat.data?.status === "1") {
          navigate(`/product/${slug}`, {
            state: {
              prodDetails: dat?.data?.data,
            },
          });
        } else {
          alert(dat?.data?.message);
        }
      });
    } catch (err) {}
  };
  const [cart, setCart] = useState({
    image: "",
    title: "",
    price: "",
    qty: "",
    total: "",
    id: "",
  });
  const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const handleClick = (image, title, price, qty, total, id) => {
    const newCartItem = {
      image: image,
      title: title,
      price: price,
      qty: qty,
      total: total,
      id: id,
    };

    setCart(newCartItem);
    const updatedCartItems = [...existingCartItems, newCartItem];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  const cartId = JSON.parse(localStorage.getItem("cartItems"));
  const cartCheck = (id) => {
    const cartIdMatch = cartId && cartId.find((ele) => ele.id === id)?.id;
    return cartIdMatch;
  };
  return (
    <>
      <div className="pageWrapper">
        <TopHeader />
        <Header />
        <MobileNav />
        <div id="page-content">
          <HeroSection />
          <div class="container mt-5">
            <div class="row">
              <ShopFilter
                filter={data?.data?.categories?.map((filter, index) => (
                  <li class="lvl-1">
                    <button
                      onClick={() =>
                        tabs == filter?.id ? setTabs("") : setTabs(filter?.id)
                      }
                    >
                      {filter?.name}
                    </button>
                  </li>
                ))}
                setTabs={setTabs}
              />
              <div class="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
                <div class="productList">
                  <button
                    type="button"
                    class="btn btn-filter d-block d-md-none d-lg-none"
                  >
                    Product Filters
                  </button>
                  <div class="toolbar">
                    <div class="filters-toolbar-wrapper">
                      <div class="row">
                        <div class="col-4 col-md-4 col-lg-4 filters-toolbar__item collection-view-as d-flex justify-content-start align-items-center">
                          <a
                            href="shop-left-sidebar.html"
                            title="Grid View"
                            class="change-view change-view--active"
                          >
                            <img src="assets/images/grid.jpg" alt="Grid" />
                          </a>
                          <a
                            href="shop-listview.html"
                            title="List View"
                            class="change-view"
                          >
                            <img src="assets/images/list.jpg" alt="List" />
                          </a>
                        </div>
                        <div class="col-4 col-md-4 col-lg-4 text-center filters-toolbar__item filters-toolbar__item--count d-flex justify-content-center align-items-center">
                          <span class="filters-toolbar__product-count">
                            Showing: 22
                          </span>
                        </div>
                        <div class="col-4 col-md-4 col-lg-4 text-right">
                          <div class="filters-toolbar__item">
                            <label for="SortBy" class="hidden">
                              Sort
                            </label>
                            <select
                              name="SortBy"
                              id="SortBy"
                              class="filters-toolbar__input filters-toolbar__input--sort"
                            >
                              <option
                                value="title-ascending"
                                selected="selected"
                              >
                                Sort
                              </option>
                              <option>Best Selling</option>
                              <option>Alphabetically, A-Z</option>
                              <option>Alphabetically, Z-A</option>
                              <option>Price, low to high</option>
                              <option>Price, high to low</option>
                              <option>Date, new to old</option>
                              <option>Date, old to new</option>
                            </select>
                            <input
                              class="collection-header__default-sort"
                              type="hidden"
                              value="manual"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid-products grid--view-items">
                    <div class="row">
                      {tabs === ""
                        ? data?.data?.products.map((prod, index) => (
                            <Item1
                              title={prod?.title}
                              price={prod?.price}
                              img={prod?.image}
                              img2={prod?.ProductImages[0]?.image}
                              colors={prod?.Colors?.map((col, index) => (
                                <li
                                  class="swatch medium rounded"
                                  style={{ background: col?.name }}
                                ></li>
                              ))}
                              addCart={() => {
                                handleClick(
                                  prod?.image,
                                  prod?.title,
                                  prod?.price,
                                  "1",
                                  prod?.price,
                                  prod?.id
                                );
                              }}
                              condition={cartCheck(prod?.id) ? true : false}
                              onClick={() => prodDetails(prod?.slug)}
                            />
                          ))
                        : data?.data?.products
                            ?.filter((prod) => prod.CategoryId == tabs)
                            .map((prod, index) => (
                              <Item1
                                title={prod?.title}
                                price={prod?.price}
                                img={prod?.image}
                                img2={prod?.ProductImages[0]?.image}
                                colors={prod?.Colors?.map((col, index) => (
                                  <li
                                    class="swatch medium rounded"
                                    style={{ background: col?.name }}
                                  ></li>
                                ))}
                                addCart={() => {
                                  handleClick(
                                    prod?.image,
                                    prod?.title,
                                    prod?.price,
                                    "1",
                                    prod?.price,
                                    prod?.id
                                  );
                                }}
                                condition={cartCheck(prod?.id) ? true : false}
                                onClick={() => prodDetails(prod?.slug)}
                              />
                            ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <StoreFeature />
        </div>
        <Footer />
        <ItemModel />
      </div>
    </>
  );
}
