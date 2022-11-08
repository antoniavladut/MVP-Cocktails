import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css"


function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const [recipes, setRecipes] = useState([]);

  async function handleFavourites(id) {

    let options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify(favCocktail)
    };

    try {
        let response = await fetch(`/recipes/${id}`, options);  
        if (response.ok) {
            let recipes = await response.json();
            setRecipes(recipes);
            alert("Oh no, removed from your Favourites...");
            window.location.reload()
            console.log("You have changed the state of this cocktail!")
        } else {
            console.log(`Server error: ${response.status} ${response.statusText}`);
        }
    } catch (err) {
        console.log(`Server error: ${err.message}`);
    };

   
}


//in UseEffect - do another get for recipes where fav = 1;
//save to favourites;
//in return - map thru favs;
  useEffect(() => {  
    getFavourites();
  }, []);
    //get here for recipes from backend where fav = true
    
  async function getFavourites() {
    try {
        let response = await fetch('/recipes/favourites');  // does GET by default
        if (response.ok) {
            let favourites = await response.json();
            setFavourites(favourites);
        } else {
            console.log(`Server error: ${response.status} ${response.statusText}`);
        }
    } catch (err) {
        console.log(`Server error: ${err.message}`);
    }
}






  //map thru the recipes where recipe.fav = 1, display them
  

  return (
    <div className="App">
      
      <h2>My Favourite Cocktails:</h2>
      
      <ul>
      <div className="row row-cols-4">
        {favourites.map(c => <li key={c.favourite}>
          
          <div className="col">
            <div className="card">
            <Link to={"/recipes/" + c.id} className="btn ">
                <img src={c.imageUrl} className="card-img-top" alt={c.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{c.title}</h5>
                  <p className="card-text">{c.ingredients}</p>
                  </div>
                  </Link>
                  <div className = " text-center">
                  <button key={c.id} onClick={() => {
                handleFavourites(c.id)}}


             
                 
                 type="button" className="btn btn-outline-danger" data-toggle="button" aria-pressed="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-heartbreak" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38.094 38.094 0 0 0 .867-.59Zm-.303-1.01c6.164-4.4 6.91-7.982 6.22-9.921C14.031 1.37 11.447.42 9.587 1.368L8.136 3.18l1.3 3.468a1 1 0 0 1-.104.906l-1.739 2.608.971 3.237Zm-1.25 1.137a36.027 36.027 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3 1.815 4.537Zm-2.3-3.06C.895 7.797.597 4.875 1.308 3.248c.756-1.73 2.768-2.577 4.456-2.127L4.732 2.36a1 1 0 0 0-.168.991L5.91 6.943l-1.305 2.61a1 1 0 0 0-.034.818l.442 1.106Z"/>
</svg>
 Remove 
              </button>
              </div>

                
                
                  </div>
                  </div>
                  
         
          </li>
          
        )}
        </div>
      </ul>
      </div>
    
  )
}

export default Favourites;
