import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import Error404 from "./pages/Error404";
import Favourites from "./pages/Favourites";
import AddCocktailForm from "./pages/AddCocktailForm";
import RecipeProfile from "./pages/RecipeProfile";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeProfile />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/add-cocktail" element={<AddCocktailForm />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
