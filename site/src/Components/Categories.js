import React from 'react';

const Categories = ({categories, filterItems}) => {
    
    return (
        <div style={{paddingLeft:'150px', paddingTop:'25px', paddingBottom:'25px'}} className="ui raised very padded text container">
            {categories.map((category, index) => {
                return (
                
                        
                    <button className="ui orange button" key={index} onClick={() => filterItems(category)} >
                        {category}

                    </button>

                ); 
            })}
        </div>

    );
}

export default Categories;