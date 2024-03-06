// ShopPage.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const api = "http://localhost:4000/price";

const ShopPage = () => {
  const location = useLocation();
  const [shopStorage, setShopStorage] = useState(location.state);
  const [price, setPrice] = useState({});
  const [itemFrequency, setItemFrequency] = useState({});

  const fetchApi = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setPrice(data);
      // Initialize itemFrequency with all items having frequency 0
      const initialItemFrequency = JSON.parse(localStorage.getItem('itemFrequency')) || {};
      for (const item in data) {
        initialItemFrequency[item] = initialItemFrequency[item] || 0;
      }
      setItemFrequency(initialItemFrequency);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setShopStorage(location.state);
    fetchApi();
  }, [location.state]);

  useEffect(() => {
    // Store itemFrequency in localStorage whenever it changes
    localStorage.setItem('itemFrequency', JSON.stringify(itemFrequency));
  }, [itemFrequency]);

  const { shopName, shopImg, options } = shopStorage.item;

  const {
    options: [firstOption, secondOption],
    [firstOption]: firstItems,
    [secondOption]: secondItems,
  } = shopStorage.item;

  const shopItems = [firstOption, ...firstItems, secondOption, ...secondItems];

  // Function to handle change in item frequency
  const handleChange = (itemName, newFrequency, instruction) => {
    // Update the frequency of the item
    setItemFrequency((prevFrequency) => ({
      ...prevFrequency,
      [itemName]: instruction === "PLUS" ? newFrequency + 1 : newFrequency - 1,
    }));

    // Calculate the new total cost based on updated frequency
  };

  const handleCost = () => {
    let newTotalCost = 0;
    for (const item in itemFrequency) {
      newTotalCost += price[item] * 10.0 * itemFrequency[item];
    }
    return newTotalCost;
  };

  return (
    <Navbar>
      <div
        className="mainContainer"
        style={{
          height: "100%",
          width: "100vw",
        }}
      >
        <ProductContainer>
          <div style={{background: "#f8f4f1", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Product>
            <h1>{shopName}</h1>
          </Product>
          </div>
        
          {shopItems.map((element, index) => (
            <div style={{background: index % 2 === 1 ? "#f8f4f1" : "white", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} key={index} >
            <Product >
              <div className="productInfo">
                <h2>{element}</h2>
                {!isNaN(itemFrequency[element]) && ( // Conditionally render buttons if itemFrequency[element] is not NaN
                  <div
                    className="buttons"
                    style={{
                      display: "flex",
                      gap: "20px",
                    }}
                  >
                    <button
                      className="btn btn-danger"
                      value={itemFrequency[element]}
                      onClick={(e) =>
                        handleChange(element, parseInt(e.target.value), "PLUS")
                      }
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger"
                      value={itemFrequency[element]}
                      onClick={(e) =>
                        handleChange(element, parseInt(e.target.value), "MINUS")
                      }
                    >
                      -
                    </button>
                    <div
                      className="frequency"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100px",
                      }}
                    >
                      Total: {itemFrequency[element] / 2} kg
                    </div>
                  </div>
                )}
              </div>
            </Product>
            </div>
          ))}
        </ProductContainer>
      </div>
      <TotalCost>
        <p>Total Cost: Rs {handleCost() / 2}</p>
        <Link to="/cart" state={{ price, itemFrequency }}>
          <button className="btn btn-danger">Go to cart </button>
        </Link>
      </TotalCost>
    </Navbar>
  );
};

export default ShopPage;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  width: 100%;
`;

const Product = styled.div`
  background-color: #28a745;
  margin: 20px;
  width: 40%;
  height: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .productInfo {
    height: 80%;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const TotalCost = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  background-color: #28a745;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
`;
