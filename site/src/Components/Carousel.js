import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "../style/Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Box, { requiredChakraThemeKeys } from "@chakra-ui/react";
import Item from "./Item";
import data from "../Data/data.js";
import FilterMenu from "./FilterMenu";
import { useHistory } from "react-router-dom";

const Carousel = () => {
  const history = useHistory();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  };

  const listMe = [
    {
      title: "Everything you need",
      picture:
        "https://media.istockphoto.com/vectors/dress-icon-vector-id507081676?k=6&m=507081676&s=612x612&w=0&h=0qDHfEqtTCT60-bDYBWdPEn6fMQRFtklQrSrAc80HII=",
    },
    {
      title: "Trending Now",
      picture:
        "https://media.istockphoto.com/photos/elegant-young-woman-is-looking-away-smiling-and-thinking-picture-id915320148?k=6&m=915320148&s=612x612&w=0&h=V4pl8OKEMsuSQ-3hjuCFgBoa6byLRUwBdfP936CAU88=",
    },
    {
      title: "Feel the vibe",
      picture:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192790/02/sv01/fnd/EEA/fmt/png/Flyer-Runner-Engineered-Knit-Men's-Running-Shoes",
    },
    {
      title: "Make yourself feel pretty",
      picture:
        "https://ae01.alicdn.com/kf/HTB1eCFiadzvK1RkSnfoq6zMwVXaq/New-1lot-18pcs-Cute-Ribbon-Bowknot-Flower-Hairpins-Hair-Barrettes-Children-Hair-Accessories-Baby-Girls-Headwear.jpg",
    },
  ];
  let renderAgainHere;
  let newDataSEndCar;

  const callCarList = (d) => {
    history.push({
      pathname: "/hotpicks",
      state: { hotpicks: d },
    });
    // if (title === "Everything you need") {
    //   console.log("I am every");
    //   newDataSEndCar = data.filter((dat) => dat.feature === "eyneed");
    //   //renderAgainHere = <FilterMenu items={newDataSEndCar} />;
    //   return <FilterMenu items={newDataSEndCar} />;
    // } else if (title === "Trending Now") {
    //   newDataSEndCar = data.filter((dat) => dat.feature === "trending");
    //   //renderAgainHere = <FilterMenu items={newDataSEndCar} />;
    //   return <FilterMenu items={newDataSEndCar} />;
    // } else if (title === "Feel the vibe") {
    //   newDataSEndCar = data.filter((dat) => dat.feature === "vibe");
    //   //renderAgainHere = <FilterMenu items={newDataSEndCar} />;
    //   return <FilterMenu items={newDataSEndCar} />;
    // } else {
    //   newDataSEndCar = data.filter((dat) => dat.feature === "myfp");
    //   //renderAgainHere = <FilterMenu items={newDataSEndCar} />;
    //   return <FilterMenu items={newDataSEndCar} />;
    // }
  };

  return (
    <div
      style={{
        paddingLeft: "100px",
        paddingRight: "100px",
        paddingTop: "1200px",
      }}
    >
      <div className="heading">Lets Explore</div>
      <Slider {...settings}>
        {listMe.map(function (list) {
          return (
            <React.Fragment>
              <div
                style={{
                  width: "650px",
                  height: "708px",
                  left: "281px",
                  top: "1183px",
                  paddingLeft: "100px",
                  backgroundSize: "80ch 70ch",
                  boxShadow: "4px 15px 4px rgba(0, 0, 0, 0.25)",
                }}
                onClick={() => callCarList(list.title)}
              >
                <img
                  style={{ paddingTop: "10px", minHeight: "650px" }}
                  src={list.picture}
                />
                <div
                  style={{
                    backgroundColor: "#C4C4C4",
                    textAlign: "center",
                    minHeight: "90px",
                    fontSize: "30px",
                    fontFamily: "monospace",
                  }}
                >
                  {list.title}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
