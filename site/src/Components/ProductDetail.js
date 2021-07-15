import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import "../style/ProductDetail.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import data from "../Data/data.js";
import { Box, SimpleGrid } from "@chakra-ui/react";

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
        <div className="allimagehere">
          <div>
            <Box className="imageHere">
              <img src={dataOfProduct[0].img} />
            </Box>
          </div>
          <div>
            <SimpleGrid columns={1} spacing={10}>
              <Box width="180px">
                <img src="/assets/images/00434231-01 (3).jpg" />
              </Box>
              <Box width="180px">
                <img src="/assets/images/00434231-01 (3).jpg" />
              </Box>
              <Box width="180px">
                <img src="/assets/images/00434231-01 (3).jpg" />
              </Box>
            </SimpleGrid>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
