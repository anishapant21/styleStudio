import React from "react";
import "../style/Slider.css";
import { BsThreeDots } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
  
   <div>
    <div className="slider">
      <div className="discountInfo">
        60% off on <b />
        Summer dress
      </div>
      <div className="shopButton">
            <NavLink
              to="/summersale"
            >
              Shop Now
            </NavLink>
          </div>
      
      <div className="quote">
        Feel the summer <b />
        with
        <b />
        some colors
      </div>
    </div>
    <div
      style={{
        position: "absolute",
        width: "560px",
        height: "560px",
        left: "990px",
        top: "960px",
      }}
      className="threedots"
    >
      <BsThreeDots size={40} />
    </div>
  </div>
  )
}

export default Slider;
