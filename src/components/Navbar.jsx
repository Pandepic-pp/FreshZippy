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
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ background: "#28a745", height: "100px"}}
        >
          <div className="container-fluid" style={{ width: "100%",display: "flex", justifyContent: "space-evenly" }}>
            <Link className="navbar-brand fs-1 fst-italic" to="/customer">
              <h1 style={{ fontSize: "2.5rem" }}>FreshZippy</h1>
            </Link>
            <div
              class="input-group"
              style={{ height: "100%", width: "50%"}}
            >
              <input
                type="search"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button
                type="button"
                class="btn btn-success"
                data-mdb-ripple-init
              >
                search
              </button>
            </div>
            <div
              className="navbar-nav"
              style={{ display: "flex", width: "20%", justifyContent: "end" }}
            >
              <div className="userLinks" style={{marginRight:"20px"}}>
                {getTokenCheck.getTokenInLS() == undefined ||
                getTokenCheck.getTokenInLS() == null ? (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <Link className="nav-link" to="/signup">
                      <div style={{ fontSize: "1rem" }}>Sign up</div>
                    </Link>
                    <Link className="nav-link" to="/signin">
                      <div style={{ fontSize: "1rem" }}>Sign in</div>
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link className="nav-link " to="/userContent">
                      MemberShip Content
                    </Link>
                  </>
                )}
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
