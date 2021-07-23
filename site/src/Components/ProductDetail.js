import React, { useEffect, useState, createContext, useContext } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import "../style/ProductDetail.css";
import CartContext from "../Context/Cart/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import data from "../Data/data.js";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import WishButton from "./WishButton";
import CartButton from "./CartButton";

const ProductDetail = () => {
  const [dataOfProduct, setDataOfProduct] = useState([{}]);

  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      console.log(location.state.productName);
      const dataProduct = data.filter(
        (dat) => dat.title === location.state.productName
      );
      console.log(dataProduct);
      setDataOfProduct(dataProduct);
    }
  }, []);

  return (
    <div className="productdetail">
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

      <div className="detail">
        <div className="breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                {dataOfProduct[0].category}
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">{dataOfProduct[0].title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="alldetailshere">
          <div className="bigImage">
            <Box className="insidebox">
              <img src={dataOfProduct[0].img} />
            </Box>
          </div>
          <div className="smallImages">
            <SimpleGrid columns={1} spacing={10}>
              <Box>
                <img src="/assets/images/malikagupta_sandragowncocktailtroisieme_1.jpg" />
              </Box>
              <Box>
                <img src="/assets/images/malikagupta_sandragowncocktailtroisieme_1.jpg" />
              </Box>
              <Box>
                <img src="/assets/images/malikagupta_sandragowncocktailtroisieme_1.jpg" />
              </Box>
            </SimpleGrid>
          </div>
          <div className="writtendetails">
            <div>
              <span className="iamheader">{dataOfProduct[0].title}</span>
              <div className="stars">
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiOutlineStar size={20} />
              </div>
              <div style={{ display: "flex" }} className="priceHere">
                <div className="writeprice">RS {dataOfProduct[0].price}</div>
                <div className="writepricenew">
                  RS {(80 / 100) * dataOfProduct[0].price}
                </div>
              </div>

              <div className="desc">
                Let's groove tonight. This dress features a V neckline, relaxed,
                midi silhouette, button down closure, split at front, racerback,
                and wave print throughout. Team with your favourite dancing
                shoes.
                <p
                  style={{
                    fontFamily: "fantasy",
                    fontSize: "20px",
                    color: "gray",
                  }}
                  className="writextra"
                >
                  {" "}
                  Shell: 100% rayon{" "}
                </p>{" "}
                <p
                  style={{
                    fontFamily: "fantasy",
                    fontSize: "20px",
                    color: "gray",
                  }}
                >
                  Lining: 100% polyester
                </p>
                <p style={{ paddingTop: "20px", fontWeight: "bold" }}>
                  Size: M, L, XL
                </p>
              </div>
              <div style={{ paddingTop: "30px", display: "flex" }}>
                <div>
                  <FaShoppingCart size="30" color="#514663" />
                </div>
                <div>
                  <CartButton title={dataOfProduct[0].title} />
                </div>
              </div>
            </div>

            <div>
              <WishButton title={dataOfProduct[0].title} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
