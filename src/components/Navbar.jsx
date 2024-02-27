import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../context/storeContext";
const Navbar = ({ children }) => {
  const getTokenCheck = useContext(TokenContext);
  console.log(getTokenCheck.getTokenInLS());
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
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
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                {getTokenCheck.getTokenInLS() == undefined ||
                getTokenCheck.getTokenInLS() == null ? (
                  <div>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">
                        Sign up
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signin">
                        Sign in
                      </Link>
                    </li>
                  </div>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link " to="/userContent">
                      MemberShip Content
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {children}
    </>
  );
};

export default Navbar;
