// @ts-nocheck
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import TopHeader from "../components/TopHeader";
import ItemModel from "../components/ItemModel";
import StoreFeature from "../components/StoreFeature";
import Banner from "../components/Banner";
import GetAPI from "../api/GetAPI";
import Item1 from "../components/Item1";
import { BASE_URL } from "../Utilities/URL";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const { data } = GetAPI("get_all_products");
  const navigate = useNavigate();
  const [tabs, setTabs] = useState("1");
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
          <Banner />
          <div className="product-rows section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="section-header text-center">
                    <h2 className="h2">Featured collection</h2>
                    <p>Our most popular products based on sales</p>
                  </div>
                </div>
              </div>
              <div className="grid-products">
                <div>
                  {data?.data?.categories?.map((cat, index) => (
                    <button onClick={() => setTabs(cat?.id)}>{cat.name}</button>
                  ))}
                </div>
                <div className="row">
                  {data?.data?.products
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
          <StoreFeature />
        </div>
        <Footer />
        <ItemModel />
      </div>
    </>
  );
}
