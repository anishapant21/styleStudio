import React, { useContext } from "react";
import { Flex, Spacer, Box } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import "../style/Navbar.css";
import { FaSearch, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import logo from "../logo.png";
import { useHistory } from "react-router-dom";
import CartContext from "../Context/Cart/CartContext";
import { NavLink } from "react-router-dom";

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
      pathname: `/filter/${d}`,
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
          <div className="notactive" onClick={() => clickHome()}>
            <NavLink
              exact
              activeClassName="item-active"
              className="notactive"
              to="/"
            >
              Home
            </NavLink>
          </div>
          <div className="notactive" onClick={() => clickFilter("pant")}>
            <NavLink
              exact
              activeClassName="item-active"
              className="notactive"
              to="/filter/pant"
            >
              Pant
            </NavLink>
          </div>

          <div className="notactive" onClick={() => clickFilter("dress")}>
            <NavLink
              exact
              activeClassName="item-active"
              className="notactive"
              to="/filter/dress"
            >
              Dress
            </NavLink>
          </div>

          <div className="notactive" onClick={() => clickFilter("shoes")}>
            <NavLink
              exact
              activeClassName="item-active"
              className="notactive"
              to="/filter/shoes"
            >
              Shoes
            </NavLink>
          </div>
          <div className="notactive" onClick={() => clickFilter("bags")}>
            <NavLink
              exact
              activeClassName="item-active"
              className="notactive"
              to="/filter/bags"
            >
              Bags
            </NavLink>
          </div>
          <div className="notactive" onClick={() => clickFilter("access")}>
            <NavLink
              exact
              activeClassName="item-active"
              className="notactive"
              to="/filter/access"
            >
              Accessories
            </NavLink>
          </div>
          <div className="notactive">
            <NavLink
              exact
              activeClassName="item-active"
              className="notactive"
              to="/summersale"
            >
              Sale
            </NavLink>
          </div>
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
