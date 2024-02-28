import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
// import foodData from "../json files/shopData.json";
let API = "http://localhost:4000/items";

const Home = () => {
  let [shopDetails, setShopDetails] = useState([]);
  let [uniqueOptions, setUniqueOptions] = useState([]);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      //console.log(data);
      setShopDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  const allOptions = shopDetails.reduce((accumulator, current) => {
    return [...accumulator, current.options];
  }, []);

  // Use Set to automatically remove duplicates
  let filteredOptions = [...new Set(allOptions)];
  uniqueOptions = Array.from(
    new Set(filteredOptions.map(JSON.stringify)),
    JSON.parse
  );
  //console.log(uniqueOptions);

  return (
    <div>
      <Navbar>
        <Carousel />
        {
          <div className="m-3">
            {shopDetails.map((item, index) => (
              <div key={index}>
                <Card shopDetail={item} />
              </div>
            ))}
          </div>
        }
        <Footer />
      </Navbar>
    </div>
  );
};

export default Home;
