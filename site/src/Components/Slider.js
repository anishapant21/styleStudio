import React from "react";
import "../style/Slider.css";
import { BsThreeDots } from "react-icons/bs";

const Slider = () => {
  return (
    <div>
      <div className="slider">
        <div
          style={{
            position: "absolute",
            width: "440px",
            height: "184px",
            left: "100px",
            top: "90px",

            fontFamily: "Rosario",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "72px",
            lineHeight: "87px",

            color: "#411E1E",
          }}
        >
          60% off on <b />
          Summer dress
        </div>

        <div
          style={{
            position: "absolute",
            width: "208px",
            height: "80px",
            left: "100px",
            top: "270px",

            background: "#F2C1C1",
            border: "1px solid #0E1A8D",
            boxSizing: "border-box",
            backdropFilter: "blur(4px)",
            fontSize: "30px",
            fontFamily: "fantasy",
            padding: "15px 38px",
            cursor: "pointer",

            borderRadius: "32px",
          }}
        >
          Shop Now
        </div>
        <div
          style={{
            position: "absolute",
            width: "457px",
            height: "434px",
            left: "1200px",
            top: "100px",

            fontFamily: "Sacramento",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "72px",
            lineHeight: "105px",

            color: "#000000",
          }}
        >
          Feel the summer <b />
          with <t></t>
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
  );
};

export default Slider;
