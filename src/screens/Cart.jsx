import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Cart = () => {
  const location = useLocation();
  const price = location.state.price;
  console.log(price);
  const itemFrequency = location.state.itemFrequency;

  let count = 0,
    totalCost = 0;
  for (let key in itemFrequency) {
    if (itemFrequency[key] !== 0) count++;
  }

  const itemNames = Object.keys(itemFrequency);

  itemNames.forEach((itemName) => {
    {
      totalCost += (itemFrequency[itemName] / 2) * price[itemName] * 10;
    }
  });

  return (
    <Navbar>
      <div
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/170034281/photo/healthy-organic-vegetables-on-a-wooden-background.jpg?s=2048x2048&w=is&k=20&c=u2w8PYRf5rAlz3dTz85us7POzKLDSK2MP9Q_xmbZj8Y=')",
        }}
      >
        <MainContainer>
          <Grid count={count + 2}>
            <h1>Billing</h1>
            <hr></hr>
            <hr></hr>
            {itemNames.map((itemName, index) =>
              itemFrequency[itemName] ? (
                <React.Fragment key={index}>
                  <h2 style={{ fontSize: "1.5rem" }}>{itemName}</h2>
                  <h2 style={{ fontSize: "1.5rem" }}>{`${
                    itemFrequency[itemName] / 2
                  } (Rs ${price[itemName] * 2}/kg)`}</h2>
                </React.Fragment>
              ) : null
            )}
            <hr></hr>
            <hr></hr>
            <h1>Total</h1>
            <h1>Rs {totalCost}</h1>
          </Grid>
          <button className="btn btn-danger btn-lg">Pay now!</button>
        </MainContainer>
      </div>
    </Navbar>
  );
};

export default Cart;

const MainContainer = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1;
  }
  button {
    margin-bottom: 4rem;
    width: 200px;
    height: 75px;
    font-size: 1.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(
    ${(props) => props.count},
    1fr
  ); /* Use template string to dynamically set row count */
  background-color: #28a745;
  margin: 4% 0 2% 0;
  border-radius: 15px;
  gap: 5px;
  padding: 20px;
  text-align: center;
  :first-child {
    grid-column: 1 / -1;
  }
`;
