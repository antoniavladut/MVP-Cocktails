import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation, useSearchParams } from "react-router-dom";

function RecipeList(props) {
  const [searchParams] = useSearchParams({ search: "" });
  const search = searchParams.get("search");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [search]);

  const getRecipes = () => {
    const query = new URLSearchParams({
      title: search,
      ingredients: search,
      glass: search,
      ice: search,
      method: search,
      garnish: search,
    }).toString();
    fetch("/recipes?" + query)
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

      <div className="row row-cols-4">
        {recipes.map((e) => (
          <div className="col">
            <div className="card">
              <a href={"/recipes/" + e.id} className="btn ">
                <img src={e.imageUrl} className="card-img-top" alt={e.title} />
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.ingredients}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
