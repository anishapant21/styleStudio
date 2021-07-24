import React from "react";
import "../style/Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
      id: 1,
      title: "Everything you need",
      picture:
        "https://media.istockphoto.com/vectors/dress-icon-vector-id507081676?k=6&m=507081676&s=612x612&w=0&h=0qDHfEqtTCT60-bDYBWdPEn6fMQRFtklQrSrAc80HII=",
    },
    {
      id: 2,
      title: "Trending Now",
      picture:
        "https://media.istockphoto.com/photos/elegant-young-woman-is-looking-away-smiling-and-thinking-picture-id915320148?k=6&m=915320148&s=612x612&w=0&h=V4pl8OKEMsuSQ-3hjuCFgBoa6byLRUwBdfP936CAU88=",
    },
    {
      id: 3,
      title: "Feel the vibe",
      picture:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192790/02/sv01/fnd/EEA/fmt/png/Flyer-Runner-Engineered-Knit-Men's-Running-Shoes",
    },
    {
      id: 4,
      title: "Make yourself feel pretty",
      picture:
        "https://ae01.alicdn.com/kf/HTB1eCFiadzvK1RkSnfoq6zMwVXaq/New-1lot-18pcs-Cute-Ribbon-Bowknot-Flower-Hairpins-Hair-Barrettes-Children-Hair-Accessories-Baby-Girls-Headwear.jpg",
    },
  ];

  const callCarList = (d) => {
    history.push({
      pathname: "/hotpicks",
      state: { hotpicks: d },
    });
  };

  return (
    <div className="car">
      <div className="heading">Lets Explore</div>
      <Slider {...settings}>
        {listMe.map(function (list) {
          return (
            <React.Fragment key={list.id}>
              <div className="cartList" onClick={() => callCarList(list.title)}>
                <img
                  className="image-here"
                  src={list.picture}
                  alt={list.title}
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
