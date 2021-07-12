import React from 'react';
import { Container, Flex, Spacer, Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { IconButton } from "@chakra-ui/react"
import "../style/Navbar.css"
import {FaSearch, FaShoppingCart, FaRegHeart} from "react-icons/fa"
import {FiLogOut} from "react-icons/fi"
import logo from '../logo.png'

const Navbar = () =>{
    return(
        <Flex>
            <Box className="logo">
  <img className="logome" src={logo} alt="logo" /> 
</Box>
<Spacer />
        <Box className="menu">
            <div className="menu-items">
                <div className="item-active">Home</div>
                <div className="item">Dress</div>
                <div className="item">Pants</div>
                <div className="item">Shoes</div>
                <div className="item">Accessories</div>
                <div className="item">Bags</div>
                <div className="item">New</div>
                <div className="item">Sale</div>
            </div>

        </Box>
        <Box>
            <div className="search">
            <FaSearch />

            </div>
        </Box>
        <Box>
            <div className="cart">
                <IconButton colorScheme="#F4AFB4">
                    
                <FaShoppingCart size='30' color="#514663" />

                </IconButton>
                
            </div>
        </Box>
        <Box>
            <div className="like">
                <IconButton>
                <FaRegHeart size='30' />

                </IconButton>
                
            </div>
        </Box>
        
        </Flex>
       
    );
}

export default Navbar;