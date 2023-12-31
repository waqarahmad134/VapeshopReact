import "swiper/css";
import React from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export default function Banner() {
  return (
    <>
      <div class="slideshow slideshow-wrapper pb-section sliderFull">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper home-slideshow"
        >
          <SwiperSlide>
            <div class="slide">
              <div class="blur-up lazyload bg-size">
                <img
                  class="blur-up lazyload bg-img"
                  data-src="assets/images/slideshow-banners/belle-banner1.jpg"
                  src="assets/images/slideshow-banners/belle-banner1.jpg"
                  alt="Shop Our New Collection"
                  title="Shop Our New Collection"
                />
                <div class="slideshow__text-wrap slideshow__overlay classic bottom">
                  <div class="slideshow__text-content bottom">
                    <div class="wrap-caption center">
                      <h2 class="h1 mega-title slideshow__title">
                        Shop Our New Collection
                      </h2>
                      <span class="mega-subtitle slideshow__subtitle">
                        From Hight to low, classic or modern. We have you
                        covered
                      </span>
                      <span class="btn">Shop now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="blur-up lazyload bg-size">
              <img
                class="blur-up lazyload bg-img"
                data-src="assets/images/slideshow-banners/belle-banner2.jpg"
                src="assets/images/slideshow-banners/belle-banner2.jpg"
                alt="Summer Bikini Collection"
                title="Summer Bikini Collection"
              />
              <div class="slideshow__text-wrap slideshow__overlay classic bottom">
                <div class="slideshow__text-content bottom">
                  <div class="wrap-caption center">
                    <h2 class="h1 mega-title slideshow__title">
                      Summer Bikini Collection
                    </h2>
                    <span class="mega-subtitle slideshow__subtitle">
                      Save up to 50% off this weekend only
                    </span>
                    <span class="btn">Shop now</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
