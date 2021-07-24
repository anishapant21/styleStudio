import React, { useContext } from "react";
import { Flex, Spacer, Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import "../style/Navbar.css";
import { FaSearch, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import logo from "../logo.png";
import { useHistory } from "react-router-dom";
import CartContext from "../Context/Cart/CartContext";

const Navbar = () => {
  const { cartItems, wishItems, totalItem } = useContext(CartContext);
  const history = useHistory();
  const clickHome = () => {
    history.push({
      pathname: "/",
    });
  };

  const clickFilter = (d) => {
    history.push({
      pathname: "/filter",
      state: { filterMe: d },
    });
  };

  const takeMeToWishLand = () => {
    history.push({
      pathname: "/wishlist",
    });
  };

  const takeMeToCheckout = () => {
    history.push({
      pathname: "/checkout",
    });
  };

  return (
    <Flex>
      <Box className="logo">
        <img className="logome" src={logo} alt="logo" />
      </Box>
      <Spacer />
      <Box className="menu">
        <div className="menu-items">
          <div className="item-active" onClick={() => clickHome()}>
            Home
          </div>
          <div className="item" onClick={() => clickFilter("all")}>
            Dress
          </div>
          <div className="item" onClick={() => clickFilter("pant")}>
            Pants
          </div>
          <div className="item" onClick={() => clickFilter("shoes")}>
            Shoes
          </div>
          <div className="item" onClick={() => clickFilter("access")}>
            Accessories
          </div>
          <div className="item" onClick={() => clickFilter("bags")}>
            Bags
          </div>
          <div className="item" onClick={() => clickFilter("dress")}>
            Dress
          </div>
          <div className="item">Sale</div>
        </div>
      </Box>
      <Box>
        <div className="search">
          <FaSearch className="searchlogo" />
          <span className="searchname">Search</span>
        </div>
      </Box>
      <Box>
        <div onClick={() => takeMeToCheckout()} className="cart">
          <IconButton>
            <FaShoppingCart size="30" color="#514663" />
          </IconButton>
        </div>
      </Box>
      <Box>
        {cartItems.length > 0 && (
          <div className="itemCountCart">
            <span>{totalItem}</span>
          </div>
        )}
      </Box>
      <Box>
        <div onClick={() => takeMeToWishLand()} className="like">
          <IconButton>
            <FaRegHeart size="30" />
          </IconButton>
        </div>
      </Box>
      <Box>
        {wishItems.length > 0 && (
          <div className="itemCountWish">
            <span>{wishItems.length}</span>
          </div>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
