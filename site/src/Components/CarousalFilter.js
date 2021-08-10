import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import data from "../Data/data.js";
import FilterMenu from "./FilterMenu.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
const CarousalFilter = () => {
  const location = useLocation();
  const [menuCar, setMenuCar] = useState(data);
  let feature = useRef();

  useEffect(() => {
    if (location.state) {
      if (location.state.hotpicks === "Everything you need") {
        feature.current = "eyneed";
      } else if (location.state.hotpicks === "Trending Now") {
        feature.current = "trending";
      } else if (location.state.hotpicks === "Feel the vibe") {
        feature.current = "vibe";
      } else {
        feature.current = "myfp";
      }
    }

    const newDataCarousal = data.filter(
      (dat) => dat.feature === feature.current
    );
    setMenuCar(newDataCarousal);
  }, [location.state]);

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #F2E6E6 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #F4E7E7 0%, rgba(255, 255, 255, 0) 100%), #DDCDCD",
      }}
    >
      <Navbar />
      <span
        style={{
          marginTop: "6vw",
          position: "absolute",
          marginLeft: "70px",
          backgroundColor: "#F2B3B3",
          width: "1750px",
          height: "60px",
          textAlign: "center",
          fontSize: "30px",
          paddingTop: "5px",
        }}
      >
        Get 20% discount on all the products
      </span>
      <FilterMenu items={menuCar} />
      <Footer />
    </div>
  );
};

export default CarousalFilter;
