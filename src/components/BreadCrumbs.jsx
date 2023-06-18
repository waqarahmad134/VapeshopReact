import React from "react";

export default function BreadCrumbs() {
  return (
    <>
      <div className="bredcrumbWrap">
        <div className="container breadcrumbs">
          <a href="index.html" title="Back to the home page">
            Home
          </a>
          <span aria-hidden="true"> = </span>
          <span>Product Layout Style1</span>
        </div>
      </div>
    </>
  );
}
