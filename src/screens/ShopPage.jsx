import React, { useState, useEffect } from "react";
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
      const initialItemFrequency = {};
      for (const item in data) {
        initialItemFrequency[item] = 0;
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
          backgroundImage:
            "url('https://media.istockphoto.com/id/170034281/photo/healthy-organic-vegetables-on-a-wooden-background.jpg?s=2048x2048&w=is&k=20&c=u2w8PYRf5rAlz3dTz85us7POzKLDSK2MP9Q_xmbZj8Y=')",
        }}
      >
        <ProductContainer>
          <Product>
            <h1>{shopName}</h1>
          </Product>

          {shopItems.map((element, index) => (
            <Product key={index}>
              <div className="productInfo">
                <h2>{element}</h2>
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
              </div>
            </Product>
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
  margin: 2%;
  width: 40%;
`;

const Product = styled.div`
  background-color: #00bc8c;
  margin: 20px;
  width: 100%;
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
  background-color: #00bc8c;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
`;
