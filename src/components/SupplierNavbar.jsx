import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SupplierNavbar = ({ children }) => {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ background: "#28a745" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand fs-1 fst-italic" to="/supplier">
              <h1 style={{ fontSize: "2.5rem" }}>FreshZippy</h1>
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

export default SupplierNavbar;

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  justify-content: end;
  .userLinks {
    display: flex;
  }
`;
