import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RecipeList(props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
    fetch("/recipes")
      .then((res) => res.json())
      .then((json) => {
        setRecipes(json);
      })
      .catch((err) => {
        console.log(`Network Error: ${err.message}`);
      });
  };

  return (
    <div className="RecipeList">
      <h2>Cocktails</h2>
      <ul>
        {recipes.map((e) => (
          <li key={e.id} className="cocktail">
            <Link to={"/recipes/" + e.id}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
