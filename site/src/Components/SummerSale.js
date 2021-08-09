import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import data from '../Data/data';
import FilterMenu from './FilterMenu';


function SummerSale() {
    const [summerItems, setSummerItems] = useState(data);

    useEffect(() => {
        for (let i = 1; i < 5; i++) {
          const newDataSend = data.filter((dat) => dat.weather === "summer");
          setSummerItems(newDataSend);
        }
      }, []);
      console.log(summerItems)
    return (
        <div style={{
            background:
              "linear-gradient(180deg, #F2E6E6 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #F4E7E7 0%, rgba(255, 255, 255, 0) 100%), #DDCDCD",
          }}>
              <Navbar />
              <span
        style={{
          marginTop: "8vw",
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
        Get 60% discount on all the summer products
      </span>
      <FilterMenu items={summerItems} />
      <Footer />
            
        </div>
    )
}

export default SummerSale
