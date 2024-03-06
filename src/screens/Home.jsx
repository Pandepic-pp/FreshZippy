import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
// import foodData from "../json files/shopData.json";
let API = "http://localhost:4000/items";
import styled from "styled-components";

const Home = () => {
  let [shopDetails, setShopDetails] = useState([]);
  let [vegetableShops, setVegetableShops] = useState([]);
  let [breadShops, setBreadShops] = useState([]);
  let [grainShops, setGrainShops] = useState([]);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setShopDetails(data);
      setVegetableShops(data.slice(0, 3));
      setBreadShops(data.slice(3, 6));
      setGrainShops(data.slice(6, 9));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  console.log(vegetableShops);
  console.log(breadShops);
  console.log(grainShops);

  const h1Color = {
    color: "black",
  };
  return (
    <div>
      <Navbar>
        <Carousel />
        <Container style={{ width: "100vw" }}>
          <div
            className="vegetableShops"
            style={{
              width: "100vw",
              background: "white",
              padding: "40px 20px",
            }}
          >
            <h1 style={h1Color}>Vegetables and Fruits</h1>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              {vegetableShops.map((item, index) => (
                <Link
                  to="/shopPage"
                  state={{ item }}
                  key={index}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Card shopDetail={item} />
                </Link>
              ))}
            </div>
          </div>
          <div
            className="breadShops"
            style={{
              width: "100vw",
              background: "#f8f4f1",
              padding: "40px 20px",
            }}
          >
            <h1 style={h1Color}>Bread and Dairy</h1>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              {breadShops.map((item, index) => (
                <Link
                  to="/shopPage"
                  state={{ item }}
                  key={index}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Card shopDetail={item} />
                </Link>
              ))}
            </div>
          </div>
          <div
            className="grainShops"
            style={{
              width: "100vw",
              background: "white",
              padding: "40px 20px",
            }}
          >
            <h1 style={h1Color}>Grains and Cereals</h1>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              {grainShops.map((item, index) => (
                <Link
                  to="/shopPage"
                  state={{ item }}
                  key={index}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Card shopDetail={item} />
                </Link>
              ))}
            </div>
          </div>
        </Container>
        <Footer />
      </Navbar>
    </div>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .vegetableShops,
  .breadShops,
  .grainShops {
    text-align: center;
  }
`;
