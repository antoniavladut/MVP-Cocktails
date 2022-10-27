import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="container">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/favourites">Favourites</NavLink>
          </li>
          <li>
            <NavLink to="/add-cocktail">Add A Cocktail</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
