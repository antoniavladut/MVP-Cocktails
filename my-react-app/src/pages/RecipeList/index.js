import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation, useSearchParams } from "react-router-dom";
import "./style.css"

// import LoginView from '/.pages/'


function RecipeList(props) {
  const [searchParams] = useSearchParams({ search: "" });
  const search = searchParams.get("search");
  const [recipes, setRecipes] = useState([]);
  const [favourites, setFavourites] = useState([]);
  // const jwt = require("jsonwebtoken");
  // const { SECRET_KEY } = require("../config");

  //search function
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

  //add to favourites function
  
  async function handleFavourites(id) {

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      
    };

    try {
        let response = await fetch(`/recipes/${id}`, options);  
        if (response.ok) {
            let recipes = await response.json();
            setRecipes(recipes);
            alert("Yay, added to your Favourites!");
            console.log("You have changed the state of this cocktail!")
        } else {
            console.log(`Server error: ${response.status} ${response.statusText}`);
            alert("Please log in to see your Favourites.");
            
        }
    } catch (err) {
        console.log(`Server error: ${err.message}`);
        alert("Please log in to select Favourites.");
    };
  }

   //check if user is logged in function

//    function ensureUserLoggedIn(req, res, next) {
//     let token = _getToken(req);

//     try {
//         // Throws error on invalid/missing token
//         jwt.verify(token, SECRET_KEY);
//         // If we get here, a valid token was passed
//         next();
//     } catch (err) {
//         res.status(401).send({ error: 'Unauthorized' });
//     }
// }
// }

    
  
 

  return (
    <div className="RecipeList">
      <h2>Cocktails</h2>

      <div className="row row-cols-4">
        {recipes.map((c) => (
          <div className="col">
            <div className="card">
              <Link to={"/recipes/" + c.id} className="btn ">
                <img src={c.imageUrl} className="card-img-top" alt={c.title} />
                <div className="card-body">
                  <h5 className="card-title">{c.title}</h5>
                  <p className="card-text">{c.ingredients}</p>
                  
                </div>
              </Link>

      
              <div className = " text-center">
               
            {props.user && (
              <button key={c.id} onClick={() => {
                handleFavourites(c.id)}}
                
                
                type="button" className="btn btn-outline-danger" data-toggle="button" aria-pressed="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
</svg> 
 Add To Favourites
              </button>
             )}
            </div>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
