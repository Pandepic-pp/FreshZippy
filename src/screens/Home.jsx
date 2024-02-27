import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
// import foodData from "../json files/shopData.json";

const Home = () => {
  // console.log(foodData);
  return (
    <div>
      {/* <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div> */}
      <div>
        <Navbar>
          <Carousel />
          <div className="m-3">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <Footer />
        </Navbar>
      </div>
    </div>
  );
};

export default Home;
