import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Cart = () => {
  // Initialize count as an array of 10 elements, each initialized to 0
  const [count, setCount] = useState(Array(10).fill(0));

  const handleChange = (index, value) => {
    const newCount = [...count];
    newCount[index] = parseInt(value);
    setCount(newCount);
  };

  const calculateTotal = () => {
    let total = 0;
    count.forEach((value, index) => {
      total += (index + 1) * value;
    });
    return total.toFixed(1);
  };

  return (
    <Navbar>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        {count.map((value, index) => (
          <div key={index}>
            <input
              type="number"
              value={value}
              onChange={(e) => handleChange(index, e.target.value)}
              style={{ marginTop: "20px" }}
            />
            <h1>
              Total {index + 1}: {value * (index + 1)}
            </h1>
          </div>
        ))}
        <h1>Total: {calculateTotal()}</h1>
      </div>
    </Navbar>
  );
};

export default Cart;
