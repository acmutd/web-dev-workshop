import React, { useState, useEffect } from "react";

function AddRecipe() {
  let [recipeName, setRecipeName] = useState("");
  let [image, setImage] = useState("");
  let [ingredients, setIngredients] = useState("");
  let [recipeSteps, setRecipeSteps] = useState("");

  function saveRecipe() {
    const recipe = {
      title: recipeName,
      img: image,
      ingredients: ingredients.split(","),
      recipe: recipeSteps.split("."),
    };
    console.log(recipe);
  }

  return (
    <div style={{ backgroundColor: "beige", height: "100%" }}>
      <h1 style={{ margin: 0, padding: 20 }}>Add a Recipe</h1>
      <div>
        <p>Enter Recipe Name</p>
        <input
          type="text"
          value={recipeName}
          onChange={(event) => setRecipeName(event.target.value)}
        />
        <p>Enter Link to Image</p>
        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        <p>Enter Ingredients (sepearted by commas)</p>
        <input
          type="text"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
        />
        <p>Enter Recipe (sepearted by periods)</p>
        <input
          type="text"
          value={recipeSteps}
          onChange={(event) => setRecipeSteps(event.target.value)}
        />
        <button onClick={saveRecipe}>Save Recipe</button>
      </div>
    </div>
  );
}

export default AddRecipe;
