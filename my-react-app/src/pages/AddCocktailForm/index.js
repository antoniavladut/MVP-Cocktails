import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { IconName } from "react-icons/fi";

function AddCocktailForm() {
  const nav = useNavigate();

  const [fields, setFields] = useState({
    title: "",
    method: "",
    glass: "",
    ice: "",
    garnish: "",
    ingredients: "",
    instructions: "",
    imageUrl: "",
  });

  async function addCocktail() {
    try {
      // create response - fetch data, method post
      let response = await fetch("/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });
      //if response fetch works
      if (response.ok) {
        nav("/recipes");
      } else {
        console.log(`Server Error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network Error: ${err.message}`);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    addCocktail();
  }

  const onChange = (fieldName) => (e) => {
    return setFields({ ...fields, [fieldName]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row align-items-center">
          <h2>Add A Cocktail</h2>
          <div className="col-7">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <label>
                  <div>Title</div>
                  <input
                    type="text"
                    value={fields.title}
                    onChange={onChange("title")}
                    placeholder="e.g Cosmopolitan"
                  />
                </label>
              </li>
              <li className="list-group-item">
                <label>
                  <div>Method</div>
                  <input
                    type="text"
                    value={fields.method}
                    onChange={onChange("method")}
                    placeholder="e.g Shaken"
                  />
                </label>
              </li>
              <li className="list-group-item">
                <label>
                  <div>Glass</div>
                  <input
                    type="text"
                    value={fields.glass}
                    onChange={onChange("glass")}
                    placeholder="e.g Martini"
                  />
                </label>
              </li>
              <li className="list-group-item">
                <label>
                  <div>Ice</div>
                  <input
                    type="text"
                    value={fields.ice}
                    onChange={onChange("ice")}
                    placeholder="e.g Cubed"
                  />
                </label>
              </li>
              <li className="list-group-item">
                <label>
                  <div>Garnish</div>
                  <input
                    type="text"
                    value={fields.garnish}
                    onChange={onChange("garnish")}
                    placeholder="e.g Lemon wedge"
                  />
                </label>
              </li>
            </ul>
          </div>
          <div className="col">
            <label>
              <div>Image Upload</div>
              <input
                type="url"
                value={fields.imageUrl}
                onChange={onChange("imageUrl")}
                placeholder="Image link"
              />
            </label>
          </div>
        </div>
        <div className="row mt-4">
          <div className="IngredientsCF col-7 ml-2">
            <label>
              <div className="ingredients ">Ingredients</div>
              <input
                type="text"
                value={fields.ingredients}
                onChange={onChange("ingredients")}
                placeholder="e.g 2cl Vodka, 2cl Gin..."
              />
            </label>
          </div>
          <div className="col">
            <label>
              <div>Instructions</div>
              <input
                type="text"
                value={fields.instructions}
                onChange={onChange("instructions")}
                placeholder="1. Chill glass etc."
              />
            </label>
          </div>
        </div>
        <div className="row justify-content-end mt-4">
          <div className="col-10"></div>
          <div className="col">
            <button className="addCocktailButton" type="submit">
              Add Cocktail
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddCocktailForm;
