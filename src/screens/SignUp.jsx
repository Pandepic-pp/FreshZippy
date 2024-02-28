import React, { useContext, useReducer } from "react";
import { TokenContext } from "../context/storeContext";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Login = () => {
  const storeToken = useContext(TokenContext);
  const [state, dispatch] = useReducer(reducer, {
    userName: "",
    userEmail: "",
    userPassword: "",
    userAddress: "",
  });
  function reducer(state, action) {
    if (action.type == "NAME") {
      return { ...state, userName: action.textValue };
    }
    if (action.type == "EMAIL") {
      return { ...state, userEmail: action.textValue };
    }
    if (action.type == "PASSWORD") {
      return { ...state, userPassword: action.textValue };
    }
    if (action.type == "ADDRESS") {
      return { ...state, userAddress: action.textValue };
    }
  }
  return (
    <Navbar>
      <Container>
        <FormContainer>
          <form>
            <div className="form-group col-md-6">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                style={{ width: "23.5rem" }}
                type="text"
                onChange={(e) => {
                  const text = e.target.value;
                  dispatch({ type: "NAME", textValue: text });
                }}
              ></input>
            </div>

            <br></br>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                style={{ width: "23.5rem" }}
                type="text"
                onChange={(e) => {
                  const text = e.target.value;
                  dispatch({ type: "EMAIL", textValue: text });
                }}
              ></input>
            </div>
            <br></br>
            <div className="form-group col-md-6">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                style={{ width: "23.5rem" }}
                type="password"
                onChange={(e) => {
                  const text = e.target.value;
                  dispatch({ type: "PASSWORD", textValue: text });
                }}
              ></input>
            </div>
            <br></br>
            <div className="form-group col-md-6">
              <label htmlFor="address">Address</label>
              <input
                style={{ width: "23.5rem" }}
                id="address"
                type="text"
                onChange={(e) => {
                  const text = e.target.value;
                  dispatch({ type: "ADDRESS", textValue: text });
                }}
              ></input>
            </div>

            <br></br>
            <div className="buttons">
              <button
                className="btn btn-success"
                style={{ width: "11rem" }}
                onClick={(event) => {
                  event.preventDefault();
                  const Obj = {
                    name: state.userName,
                    email: state.userEmail,
                    password: state.userPassword,
                    address: state.userAddress,
                  };
                  fetch("http://localhost:4000/user/signin", {
                    method: "POST",
                    body: JSON.stringify(Obj),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((response) => {
                      //  const HeaderValue =response.headers.get('token');
                      //  console.log(HeaderValue);
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
                Sign up
              </button>
              <button className="btn btn-danger" style={{ width: "11rem" }}>
                Already a user?
              </button>
            </div>
          </form>
        </FormContainer>
      </Container>
    </Navbar>
  );
};

export default Login;

const FormContainer = styled.div`
  background-color: #2b2a2a;
  width: 30%;
  height: 25rem;
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
  height: 86.5vh;
  display: flex;
  justify-content: center;
  position: relative;
  background-size: inherit;
  background-image: url("https://media.istockphoto.com/id/170034281/photo/healthy-organic-vegetables-on-a-wooden-background.jpg?s=2048x2048&w=is&k=20&c=u2w8PYRf5rAlz3dTz85us7POzKLDSK2MP9Q_xmbZj8Y=");
`;
