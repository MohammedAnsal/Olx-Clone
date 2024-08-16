import React from "react";

import "./Banner.css";
import Arrow from "../../assets/Arrow";
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow>
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcycle</span>
            <span>Mobile Phone</span>
            <span>For Sale:Houses & Apartment</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehicle</span>
            <span>For Rent: House & Apartment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
