import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../style/Home.css";
import Slider from "./Slider";
import Carousel from "./Carousel";
import FilterMenu from "./FilterMenu";
import data from "../Data/data.js";
import Footer from "./Footer";

const Home = () => {
  const [dataSend, setToDataSend] = useState(data);

  useEffect(() => {
    for (let i = 1; i < 5; i++) {
      const newDataSend = data.filter((dat) => dat.feature === "hot");
      setToDataSend(newDataSend);
    }
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Slider />
      <Carousel />
      <div className="headingMe">~Recommended for you~</div>
      <FilterMenu items={dataSend} />
      <Footer />
    </div>
  );
};

export default Home;
