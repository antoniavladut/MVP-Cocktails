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
    <div classname="container">
      <form onSubmit={handleSubmit}>
        <div className="row align-items-center">
          <div className="col-7">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <label>
                  <div>Title</div>
                  <input type="text" value={fields.title} onChange={onChange("title")} />
                </label>
              </li>
              <li className="list-group-item">
                <label>
                  <div>Method</div>
                  <input type="text" value={fields.method} onChange={onChange("method")} />
                </label>
              </li>
              <li className="list-group-item">
                <label>
                  <div>Glass</div>
                  <input type="text" value={fields.glass} onChange={onChange("glass")} />
                </label>
              </li>
              <li className="list-group-item">
                <label>
                  <div>Ice</div>
                  <input type="text" value={fields.ice} onChange={onChange("ice")} />
                </label>
              </li>
              <li className="list-group-item">
                <label>
                  <div>Garnish</div>
                  <input type="text" value={fields.garnish} onChange={onChange("garnish")} />
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
                placeholder="Image Url"
              />
            </label>
          </div>
        </div>
        <div className="row mt-4">
          <div className="IngredientsCF col-7">
            <label>
              <div className="ingredients">Ingredients</div>
              <input type="text" value={fields.ingredients} onChange={onChange("ingredients")} />
            </label>
          </div>
          <div className="col">
            <label>
              <div>Instructions</div>
              <input type="text" value={fields.instructions} onChange={onChange("instructions")} />
            </label>
          </div>
          <button type="submit">Add Cocktail</button>
        </div>
      </form>
    </div>
  );
}

export default AddCocktailForm;
