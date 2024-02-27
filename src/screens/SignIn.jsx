import React, { useReducer, useContext } from "react";
import { TokenContext } from "../context/storeContext";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const SignIn = function () {
  const storeToken = useContext(TokenContext);
  const SetTokenValue = useContext(TokenContext);
  const [state, dispatch] = useReducer(reducer, {
    userEmail: "",
    userPassword: "",
  });

  function reducer(state, action) {
    if (action.type === "EMAIL") {
      return { ...state, userEmail: action.inputValue };
    }
    if (action.type === "PASSWORD") {
      return { ...state, userPassword: action.inputValue };
    }
    return state; // Add a default case to return the current state
  }

  return (
    <Navbar>
      <Container>
        <FormContainer>
          <form>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="text"
                style={{ width: "23.5rem" }}
                onChange={(e) => {
                  const text = e.target.value;
                  dispatch({ type: "EMAIL", inputValue: text });
                }}
              ></input>
            </div>

            <br />
            <div className="form-group col-md-6">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                style={{ width: "23.5rem" }}
                onChange={(e) => {
                  const text = e.target.value;
                  dispatch({ type: "PASSWORD", inputValue: text });
                }}
              ></input>
            </div>
            <br />
            <div className="buttons">
              <button
                className="btn btn-success"
                style={{ width: "11rem" }}
                onClick={(e) => {
                  e.preventDefault();
                  const Obj = {
                    name: state.userName,
                    email: state.userEmail,
                  };
                  fetch("http://localhost:4000/user/logIn", {
                    method: "POST",
                    body: JSON.stringify(Obj),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((response) => {
                      return response.json();
                    })
                    .then((data) => {
                      storeToken.storetokenInLS(data.token);
                      console.log("Success:", data);
                    })
                    .catch((error) => {
                      console.error("Error:", error);
                    });
                }}
              >
                Submit
              </button>
              <button className="btn btn-danger" style={{ width: "11rem" }}>
                Not a user?
              </button>
            </div>
          </form>
        </FormContainer>
      </Container>
    </Navbar>
  );
};

export default SignIn;

const FormContainer = styled.div`
  background-color: #2b2a2a;
  width: 30%;
  height: 14rem;
  border-radius: 10px;
  border: 1px solid #28af70;
  position: absolute;
  top: 40px;
  padding: 10px 10px 10px 15px;
  input {
    background-color: black;
    border: none;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    width: 23.5rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  position: relative;
  background-size: inherit;
  background-image: url("https://media.istockphoto.com/id/170034281/photo/healthy-organic-vegetables-on-a-wooden-background.jpg?s=2048x2048&w=is&k=20&c=u2w8PYRf5rAlz3dTz85us7POzKLDSK2MP9Q_xmbZj8Y=");
`;
