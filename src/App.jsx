import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css"

const mainContainerStyle = {
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardContainerStyle = {
  backgroundColor: "#f8f9fa", // Change background color to a light gray
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
  height: "300px",
  width: "300px",
  borderRadius: "8px",
  boxShadow: "0px 0px 10px gray", // Add a box shadow
  transition: "transform 0.3s ease-in-out", // Add transition to transform property
};

const buttonStyle = {
  width: "200px", // Set button width
};

const App = () => {
  const handleHover = (e) => {
    e.target.style.transform = "scale(1.1)"; // Scale up the button on hover
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)"; // Reset the scale on mouse leave
  };

  return (
    <>
      <div className="mainContainer" style={mainContainerStyle}>
        <div
          className="cardContainer"
          style={cardContainerStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/customer">
            <Button variant="success" size="lg" style={buttonStyle}>
              Enter as customer
            </Button>
          </Link>
          <Link to="/supplier">
            <Button variant="success" size="lg" style={buttonStyle}>
              Enter as supplier
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default App;
