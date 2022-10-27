import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCocktailForm.css";

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
    <form onSubmit={handleSubmit}>
      <label>
        <div>Title</div>
        <input type="text" value={fields.title} onChange={onChange("title")} />
      </label>
      <label>
        <div>Method</div>
        <input type="text" value={fields.method} onChange={onChange("method")} />
      </label>
      <label>
        <div>Glass</div>
        <input type="text" value={fields.glass} onChange={onChange("glass")} />
      </label>
      <label>
        <div>Ice</div>
        <input type="text" value={fields.ice} onChange={onChange("ice")} />
      </label>
      <label>
        <div>Garnish</div>
        <input type="text" value={fields.garnish} onChange={onChange("garnish")} />
      </label>
      <label>
        <div>Ingredients</div>
        <input type="text" value={fields.ingredients} onChange={onChange("ingredients")} />
      </label>
      <label>
        <div>Instructions</div>
        <input type="text" value={fields.instructions} onChange={onChange("instructions")} />
      </label>
      <label>
        <div>Image Url</div>
        <input type="url" value={fields.imageUrl} onChange={onChange("imageUrl")} />
      </label>
      <button type="submit">Add Cocktail</button>
    </form>
  );
}

export default AddCocktailForm;
