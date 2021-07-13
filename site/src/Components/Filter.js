import React, { useState } from 'react';
import Navbar from './Navbar';
import data from '../Data/data.js'
import FilterMenu from './FilterMenu';



const allcategories=['all', ...new Set(data.map((dat)=> dat.category))];
console.log(allcategories)
const Filter =()=>{
    const [menuItems, setMenuItems] = useState(data);
    const [categories, setCategories] = useState(allcategories);

    const filterItems = (category) => {
        if(category === 'all'){
            setMenuItems(data)
            return;
        }
        const newData = data.filter((dat)=> dat.category === category);
        setMenuItems(newData);
    }
    return (
        <div style={{ height:"2990px",
            
            
            background: "linear-gradient(180deg, #F2E6E6 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #F4E7E7 0%, rgba(255, 255, 255, 0) 100%), #DDCDCD",
            }} >
    
            <Navbar categories={categories} filterItems={filterItems} />
            <span style={{marginTop:"230px", position:"absolute", marginLeft:"70px", backgroundColor:"#F2B3B3", width:"1750px", height:"60px", textAlign:"center", fontSize:"30px", paddingTop:"5px"}}>Get 20% discount on all the products</span>
            <FilterMenu  items={menuItems} />
           
        </div>
        
    );
};

export default Filter;