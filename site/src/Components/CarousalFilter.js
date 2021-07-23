import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../Data/data.js";
import FilterMenu from "./FilterMenu.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
const CarousalFilter = () => {
  const location = useLocation();
  const [menuCar, setMenuCar] = useState(data);
  let feature = "";
  useEffect(() => {
    if (location.state) {
      console.log(location.state.hotpicks);

      if (location.state.hotpicks === "Everything you need") {
        feature = "eyneed";
      } else if (location.state.hotpicks === "Trending Now") {
        feature = "trending";
      } else if (location.state.hotpicks === "Feel the vibe") {
        feature = "vibe";
      } else {
        feature = "myfp";
      }
    }

    const newDataCarousal = data.filter((dat) => dat.feature === feature);
    setMenuCar(newDataCarousal);
  }, []);

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
          marginTop: "230px",
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
