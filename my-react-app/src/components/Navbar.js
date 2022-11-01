import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { ImSearch } from "react-icons/im";

function Navbar() {
  const nav = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    nav("/recipes?search=" + searchInput, { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4">
      <div className="container-fluid">
        <div className="me-2">
          <NavLink to="/">
            <img
              src="https://img.freepik.com/free-vector/minimal-brandy-glass-vector-graphic-line-art-style-set_53876-111872.jpg?w=1060&t=st=1666950324~exp=1666950924~hmac=25c708adafb772731c639afad799bc227ddc3ce299c350813b9feaba2b099163"
              alt="Home"
              width="30"
              height="24"
            ></img>
          </NavLink>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form role="search" className="d-flex" onSubmit={onSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              <ImSearch />
            </button>
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link active" aria-current="page">
                <NavLink to="/recipes">Recipes</NavLink>
              </div>
            </li>
            {/* <li className="nav-item">
              <div className="nav-link">
                <NavLink to="/favourites">Favourites</NavLink>
              </div>
            </li> */}
            <li className="nav-item">
              <div className="nav-link">
                <NavLink to="/add-cocktail">Add A Cocktail</NavLink>
              </div>
            </li>
          </ul>
        </div>
        {/* <span
          className="navbar-toggler-icon bg-light r"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <span className="navbar-toggler-icon bg-light r"></span> */}
      </div>
    </nav>
  );
}

export default Navbar;
