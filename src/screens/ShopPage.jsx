import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const location = useLocation();
  const [shopStorage, setShopStorage] = useState(location.state);

  useEffect(() => {
    setShopStorage(location.state);
  }, [location.state]);

  let { shopName, shopImg, options } = shopStorage.item;

  // Assuming jsonData contains the JSON object you provided
  const {
    options: [firstOption, secondOption],
    [firstOption]: firstItems,
    [secondOption]: secondItems,
  } = shopStorage.item;

  const shopItems = [firstOption, ...firstItems, secondOption, ...secondItems];
  console.log(shopItems);

  return (
    <Navbar>
      <Container>
        {shopItems.map((element, index) => (
          <Product key={index}>
            <h1>{element}</h1>
          </Product>
        ))}
      </Container>
    </Navbar>
  );
};

export default ShopPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 2%;
`;

const Product = styled.div`
  background-color: #28af70;
  margin: 20px;
  width: 40%;
  height: 100px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
