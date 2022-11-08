import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

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

  //set favourites:
  // const [favourites, setFavourites] = useState([]);

  // useEffect(() => {
  //   setFavourites();
  // }, []);

  // useEffect(() => {
  //   console.log(favourites);
  // }, [favourites]);

  // function handleFavourite(id) {
  //   const newFavourites = favourites.map(recipe => {
  //     return recipe.id === id ? { ...recipe, favourite: !recipe.favourite } : recipe;
  //   });

  //   setFavourites(newFavourites);
  // }

  return (
    <div className="container">
      <div className="RecipeProfile">
        <div className="row align-items-center">
          <div className="col-7">
            <h2>
              <u className="HeaderTitle ">{recipe.title}</u>
            </h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> <b>Method:</b> {recipe.method}</li>
              <li className="list-group-item"> <b>Glass:</b> {recipe.glass}</li>
              <li className="list-group-item"> <b>Ice:</b> {recipe.ice}</li>
              <li className="list-group-item"> <b>Garnish:</b> {recipe.garnish}</li>
            </ul>
           

          </div>
          <div className="col">
            <img
              src={recipe.imageUrl}
              className="rounded"
              alt={recipe.title}
              style={{ maxHeight: 400 }}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="IngredientsRP col-7">
            <h3>
              <u className="IngredientsTitle ">Ingredients</u>
            </h3>
            <div className="ingredients">{recipe.ingredients}</div>
          </div>
          <div className="InstructionsRP col">
            <h3>
              <u className="InstructionsTitle ">Steps</u>
            </h3>
            <div className="instructions">{recipe.instructions}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeProfile;

// float-right img-fluid
