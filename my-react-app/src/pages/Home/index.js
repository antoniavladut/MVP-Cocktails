import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Home() {
  const nav = useNavigate();

  function onClick() {
    nav("/recipes");
  }

  return (
    <div className="Home">
      <div className="container">
        <div className="HomeContent">
          <h1 className="HomeH1">The Cocktail Cupboard</h1>
          <button className="HomeEnterButton" type="submit" onClick={onClick}>
            Open The Cupboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
