import React from 'react';
import { SimpleGrid, Box } from "@chakra-ui/react";
import '../style/Item.css'
import {FiHeart} from 'react-icons/fi'

const Item = ({img, title, price, id}) => {
    const rupee=`RS ${price}`
    
    return (
        <>
        <Box className="boxme">
            <img className="imageme" src={img}/>
            <div className="price">
                {rupee}
                
                <FiHeart className="heartme" />
            </div>
            <div className="name">
                {title}
            </div>
            
        </Box>
        
        </>
        
       
        
       
       
            
        
        
    );
}

export default Item;




