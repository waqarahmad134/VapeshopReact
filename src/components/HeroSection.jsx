import React from "react";

export default function HeroSection() {
  return (
    <>
      <div class="collection-header">
        <div class="collection-hero">
          <div class="collection-hero__image">
            <img
              class="blur-up lazyload"
              data-src="assets/images/cat-women1.jpg"
              src="assets/images/cat-women1.jpg"
              alt="Women"
              title="Women"
            />
          </div>
          <div class="collection-hero__title-wrapper">
            <h1 class="collection-hero__title page-width">
              Shop Grid 4 Column
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
