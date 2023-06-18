import React from "react";
export default function ShopFilter(props) {
  return (
    <>
      <div class="col-12 col-sm-12 col-md-3 col-lg-3 sidebar filterbar">
        <div class="closeFilter d-block d-md-none d-lg-none">
          <i class="icon icon anm anm-times-l"></i>
        </div>
        <div class="sidebar_tags">
          <div class="sidebar_widget categories filter-widget">
            <div class="widget-title">
              <h2>Categories</h2>
            </div>
            <div class="widget-content">
              <ul class="sidebar_categories">
                {props.filter}
              </ul>
            </div>
          </div>
          <div class="sidebar_widget filterBox filter-widget">
            <div class="widget-title">
              <h2>Color</h2>
            </div>
            <div class="filter-color swacth-list clearfix">
              <span class="swacth-btn black"></span>
              <span class="swacth-btn white checked"></span>
              <span class="swacth-btn red"></span>
              <span class="swacth-btn blue"></span>
              <span class="swacth-btn pink"></span>
              <span class="swacth-btn gray"></span>
              <span class="swacth-btn green"></span>
              <span class="swacth-btn orange"></span>
              <span class="swacth-btn yellow"></span>
              <span class="swacth-btn blueviolet"></span>
              <span class="swacth-btn brown"></span>
              <span class="swacth-btn darkGoldenRod"></span>
              <span class="swacth-btn darkGreen"></span>
              <span class="swacth-btn darkRed"></span>
              <span class="swacth-btn dimGrey"></span>
              <span class="swacth-btn khaki"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
