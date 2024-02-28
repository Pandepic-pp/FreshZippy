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

  return (
    <Navbar>
      <Container>
        
      </Container>
    </Navbar>
  );
};

export default ShopPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 20px;
  /* .navbar {
    display: flex;
    justify-content: space-around;
    width: 50%;
    height: 75px;
    position: absolute;
    top: 50px;
    border-radius: 10px;
  } */
`;
