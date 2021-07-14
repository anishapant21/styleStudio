import React from 'react';
import { Container, Flex, Spacer, Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { IconButton } from "@chakra-ui/react"
import "../style/Navbar.css"
import {FaSearch, FaShoppingCart, FaRegHeart} from "react-icons/fa"
import {FiLogOut} from "react-icons/fi"
import logo from '../logo.png'
import {useHistory} from "react-router-dom"

const Navbar = ({filterItems, categories}) =>{
    const history=useHistory();
    const clickHome =()=>{
        history.push({
            pathname:'/'
        });
    };

    const clickFilter=(d)=>{
        history.push({
            pathname:'/filter',
            state:{filterMe: d}
        });
    };
    return(
        <Flex>
            <Box className="logo">
  <img className="logome" src={logo} alt="logo" /> 
</Box>
<Spacer />
        <Box className="menu">
            <div className="menu-items">
                <div className="item-active" onClick={()=>clickHome()}>Home</div>
                <div className="item" onClick={()=>clickFilter('all')}>Dress</div>
                <div className="item"  onClick={()=>clickFilter('pant')}>Pants</div>
                <div className="item"  onClick={()=>clickFilter('shoes')}>Shoes</div>
                <div className="item"  onClick={()=>clickFilter('access')}>Accessories</div>
                <div className="item"  onClick={()=>clickFilter('all')}>Bags</div>
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