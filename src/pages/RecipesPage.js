import React from "react";
import Recipe from "../components/Recipe";

function RecipesPage() {
  return (
    <div style={{ backgroundColor: "beige" }}>
      <h1>Your Recipes</h1>
      <div style={{ display: "flex" }}>
        <Recipe />
        <Recipe />
      </div>
    </div>
  );
}

export default RecipesPage;
