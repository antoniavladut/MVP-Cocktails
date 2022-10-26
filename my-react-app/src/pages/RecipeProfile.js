import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeProfile() {
  const params = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = () => {
    fetch("/recipes/" + params.id)
      .then((res) => res.json())
      .then((json) => {
        setRecipe(json);
      })
      .catch((err) => {
        console.log(`Network Error: ${err.message}`);
      });
  };
  return (
    <div className="RecipeProfile">
      <h2>{recipe.title}</h2>
      <ul>
        <li> Method: {recipe.method}</li>
        <li> Glass: {recipe.glass}</li>
        <li> Ice: {recipe.ice}</li>
        <li> Garnish: {recipe.garnish}</li>
        <pre>
          Ingredients:
          <br />
          {recipe.ingredients}
        </pre>
        <pre>
          Steps:
          <br /> {recipe.instructions}
        </pre>
      </ul>
    </div>
  );
}

export default RecipeProfile;
