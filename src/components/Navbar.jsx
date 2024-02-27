import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../context/storeContext";
import styled from "styled-components";
const Navbar = ({ children }) => {
  const getTokenCheck = useContext(TokenContext);
  console.log(getTokenCheck.getTokenInLS());
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand fs-1 fst-italic" to="/">
              FreshZippy
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <NavDiv>
                  {/* <div className="homePage">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      to="/"
                    >
                      Home
                    </Link>
                  </div> */}
                  <div className="userLinks">
                    {getTokenCheck.getTokenInLS() == undefined ||
                    getTokenCheck.getTokenInLS() == null ? (
                      <>
                        <Link className="nav-link" to="/signup">
                          Sign up
                        </Link>
                        <Link className="nav-link" to="/signin">
                          Sign in
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link className="nav-link " to="/userContent">
                          MemberShip Content
                        </Link>
                      </>
                    )}
                  </div>
                </NavDiv>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {children}
    </>
  );
};

export default Navbar;

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  width: 81vw;
  justify-content: end;
  .userLinks {
    display: flex;
  }
`;
